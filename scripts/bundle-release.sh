#!/bin/bash

start=$SECONDS

# clean dist directory
rm -rf dist/

# copy simple design system source files to dist/src
mkdir dist/ && mkdir dist/src/
cp -a simple-design-system/. dist/src/

# build docs
PURGE_CSS=true npx vue-cli-service build --no-clean --dest dist/docs

# build non-minified css
npx parcel build simple-design-system/css/index.css --no-minify

# build minified css
npx parcel build simple-design-system/css/index.css --out-file index.min.css

for d in simple-design-system/wc/* ; do
  if [[ "$d" == *"index.js"* ]]; then
    # build all web components
    npx vue-cli-service build --no-clean --target lib --dest dist/ --name index $d
  else
    # build individual web components
    npx vue-cli-service build --no-clean --target lib --dest dist/wc/${d##*/} --name index $d/index.js
  fi
done

duration=$(( SECONDS - start ))

printf "\nFinished build in $duration seconds.\n\n"