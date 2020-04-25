#!/bin/bash

# clean build directories
rm -rf build/
rm -rf dist/

# build minified css
npx parcel build src/styles/index.css -d build/css

# build web components
npx parcel build src/wc/index.js -d build/wc

# build docs
PURGE_CSS=true npx vue-cli-service build
