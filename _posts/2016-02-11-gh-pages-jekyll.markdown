---
layout: post
title:  "Welcome to Jekyll!"
date:   2016-02-11 11:34:20
categories: jekyll
tag: 
- github-pages
- github
- jekyll
author: Ian Lintner

---
This is my first TIL post to my new page of my Today I learned site. The basic intent is to share things I have learned
to do. Mostly technology based.

First to create a github pages using Jekyll you have to install the Jekyll gem in Ruby. Then create gemfile.
```bash

gem install jekyll -g

github checkout -b gh-pages
vi Gemfile

```

Add these to your gem file

```bash
source 'https://rubygems.org'

gem 'github-pages'
```

```bash

bundle install

#To start your site on http://127.0.0.1:4000
jekyll serve .

```