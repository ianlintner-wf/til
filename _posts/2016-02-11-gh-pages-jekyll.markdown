---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-07-11 11:34:20
categories: jekyll
author: Google Developers Group Managua
image: https://raw.githubusercontent.com/jekyll/brand/master/jekyll-logo-light-transparent.png
---
This is my first TIL post to my new page of my Today I learned site. The basic intent is to share things I have learned
to do. Mostly technology based.

First to create a github pages using Jekyll you have to install the Jekyll gem in Ruby. Then create gemfile.
{% highlight bash %}

gem install jekyll -g

github checkout -b gh-pages
vi Gemfile

{% endhighlight %}

Add these to your gem file

{% highlight bash %}
source 'https://rubygems.org'

gem 'github-pages'
{% endhighlight %}

{% highlight bash %}

bundle install

#To start your site on http://127.0.0.1:4000
jekyll serve .

{% endhighlight %}