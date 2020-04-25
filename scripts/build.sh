#!/bin/bash

# clean dist directory
rm -rf dist/

# build docs
PURGE_CSS=true npx vue-cli-service build --dest dist/docs

# build non-minified css
npx parcel build src/styles/index.css --no-minify -d dist/css

# build minified css
npx parcel build src/styles/index.css --out-file index.min.css -d dist/css

# build web components
npx parcel build src/wc/index.js -d dist/wc