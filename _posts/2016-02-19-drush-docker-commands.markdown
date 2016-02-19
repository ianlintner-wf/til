---
layout: post
title: Running Drush for your Drupal Docker Containers
date: 2016-02-19 17:17:46
categories: 
- drupal
tags: 
- drush drupal docker bash
---
If you run sites in docroot or need to cd into a site directory in a multisite configuration. This is my prefered way
to quickly run drush commands unless you use a wrapper similar to bowline which is an excellent option.

My sites typically include a docroot folder as is the standard with Acquia hosted sites/repos.

```bash
#    cmd/flag   container name        exec    wrap commands in quotes to use multi step 
docker exec -it drupal-container-name bash -c "cd /var/www/docroot && drush uli -l drupal.loc"
```