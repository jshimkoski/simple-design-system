#!/bin/bash

# clean dist directory
rm -rf dist/

# build docs
PURGE_CSS=true npx vue-cli-service build --dest dist/docs

# build all
npx parcel build simple-design-system/index.js

# build non-minified css
npx parcel build simple-design-system/css/index.css --no-minify -d dist/css

# build minified css
npx parcel build simple-design-system/css/index.css --out-file index.min.css -d dist/css

# build all web components
npx parcel build simple-design-system/wc/index.js -d dist/wc