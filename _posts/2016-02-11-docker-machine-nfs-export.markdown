---
layout: post
title:  "Docker-Machine NFS Share Permissions on Mac OSX"
date:   2016-02-11 09:00:20
categories:
  - docker
tag: 
 - docker-machine
 - docker
author: Ian Lintner

---
If you set up a Docker Machine on virtual box one of the things that can fix some of the pressures if you choose
to share your files via NFS is to confirm that the docker-machine has access to the files as your user

```bash
#To see your exports
cat /etc/exports

#Edit Exports
sudo vi /etc/exports

#Get user id
id -u 

#Get group id
id -g 

```

Update your /etc/hosts to look like this

501 will be your UID
20 is your GID

```bash

"/Users" 192.168.99.100 -alldirs -mapall=501:20
```
