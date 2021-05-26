npm run build &&
git checkout gh-page &&
rm -rf *.js *.css *.html &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m "update" &&
git push 
