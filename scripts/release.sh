#!/bin/bash

read -p 'Version (major, minor, or patch): ' version

if [ "$version" == "major" ] || [ "$version" == "minor" ] || [ "$version" == "patch" ] ;then
    echo Proceed with $version...
    npm run build
    # npm version $version
    # git push —-tags origin master
    # npm publish
else
    printf "\nTry again. Use a version type for this release: major, minor, or patch.\n\n"
fi
