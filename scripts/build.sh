#!/bin/bash

start=$SECONDS

# clean dist directory
rm -rf dist/

# build docs
PURGE_CSS=true npx vue-cli-service build --dest dist/docs

# build all web components and css
npx parcel build simple-design-system/index.js

# build non-minified css
npx parcel build simple-design-system/css/index.css --no-minify -d dist/css

# build minified css
npx parcel build simple-design-system/css/index.css --out-file index.min.css -d dist/css

for d in simple-design-system/wc/* ; do
  if [[ "$d" == *"index.js"* ]]; then
    # build all web components
    npx parcel build $d -d dist/wc
  else
    # build individual web components
    npx parcel build $d/index.js -d dist/wc/${d##*/}
  fi
done

duration=$(( SECONDS - start ))

printf "\nFinished build in $duration seconds.\n\n"