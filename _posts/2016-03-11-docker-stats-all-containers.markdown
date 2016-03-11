---
layout: post
title: Docker Stats All Containers
date: 2016-03-11 03:37:29
categories: 
- docker
- bash
tags: 
- docker
- bash
---

Get stats for all docker containers.
```bash
docker stats $(docker inspect -f "{{ .Name }}" $(docker ps -aq)) 
```