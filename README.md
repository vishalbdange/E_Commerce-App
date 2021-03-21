…or create a new repository on the command line

echo "# E_Commerce-App" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vishalbdange/E_Commerce-App.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/vishalbdange/E_Commerce-App.git
git branch -M main
git push -u origin main