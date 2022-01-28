#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:SciammarellaBrenno/vue-veevalidate.git master:git-pages

cd -