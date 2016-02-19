---
published: true
title:  "Pattern lab for use with github pages"
layout: post
date: 2016-02-12T11:48:00.000Z
categories: bash
tag: 
  - bash
  - patternlab
author: Ian Lintner
---

```bash
git clone git@github.com:youruser/yourrepo.git patternlab-gh-pages
cd patternlab-gh-pages
cd core/scripts/
php core/builder.php -g
php core/builder.php -g
git checkout --orphan gh-pages
git reset .
rm -r *
echo 'Coming soon' > index.html
git add index.html
git commit -m "init"
git push -u origin gh-pages
git ..
git co master
git reset .
git rm -rf public/*
git commit -a -m 'removed all files in public on master'
git push
git clone git@github.com:youruser/yourrepo.git -b gh-pages public
php core/builder.php -g
cd public
git add -A .
git commit -a -m 'generated site'
git push
```