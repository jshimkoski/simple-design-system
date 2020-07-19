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
npx parcel build simple-design-system/tailwindcss/tailwind.css --out-file index.css --no-minify

for d in simple-design-system/wc/* ; do
  if [[ "$d" == *"index.ts"* ]]; then
    # build all web components
    npx vue-cli-service build --no-clean --target lib --dest dist/ --name index $d
  else
    # build individual web components
    npx vue-cli-service build --no-clean --target lib --dest dist/wc/${d##*/} --name index $d/index.ts
  fi
done

# remove auto-generated demo.html files
find dist -name "*demo.html" -type f -exec rm {} \;

duration=$(( SECONDS - start ))

printf "\nFinished build in $duration seconds.\n\n"