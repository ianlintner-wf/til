---
layout: post
title: Refreshing Local Dev Mysql From Production Via Scp.
date: 2016-02-19 17:25:27
categories: 
- mysql docker bash
tags: 
- bash mysql docker devops automation acquia
---

This is a set of scripts I am calling gantry. These are just quick one off scripts. I plan on making these configurable
with env and/or config files but they do the job. 

This is based on local docker development enviornment and getting the database dumps from fixed location e.g. acquia.

This is project I am nick naming gantry as in gantry crane

## gantry.sh
Gets gets the database to a shared folder and kicks off the import.

```bash
#!/usr/bin/env bash
#$1: site grouping & part 1 of ssh user (acquia standard)
#$2: site enviornment & part 2 of ssh user (acquia standard)
#$3: database name

#Set up variables we will need to get data we will use these throughout the script
server=YOUR_REMOTE_SERVER_HOST 
site=$1
env=$2
db=$3
#This is a location that our mysql docker container will have access to
local_file=~/mnt/db/$db.sql.gz

#The names of the local files before/after decompression that our container has access to
f=/mnt/fs/db/$db.sql.gz
f2=/mnt/fs/db/$db.sql

#The remote acquia backup directory
backup_dir="/mnt/files/$site.$env/backups"

#Get the name of the latest backup in the directory via ssh
echo "finding latest backup in directory"

#The standard ssh username format for acquia we are using ssh authorized key login
backup=$(ssh $site.$env@$server "ls $backup_dir/prod-$db-*.sql.gz | head -1")

echo "copying backup $backup from $site.$env@$server to $local_file"

#Remove any copies of the local files we have
rm -f $local_file

#SCP standard acquia format for username 
scp $site.$env@$server:"$backup" $local_file

#Copy our database import script to the container so we can use standard containers
docker cp db_import.sh mysql-db:/usr/bin/db_import.sh

#Run the script
docker exec -it mysql-db /usr/bin/db_import.sh $f $f2 $db

#Optional if you run a memcached with drupal it is a good idea to flush it
docker exec -it memcached bash -c "echo 'flush_all' | nc localhost 11211"

```

## db_import.sh 
Part 2 the database import script we run in the docker container
This is faster than connecting to mysql on our local computer since.

```bash
#!/usr/bin/env bash
#$1 gzip filename
#$2 .sql filename after gunzip
#$3 database name

mysql -u root -e "drop database $3;"
mysql -u root -e "CREATE DATABASE IF NOT EXISTS $3;"
gunzip $1
echo "running import on $3 for file $2"
mysql -u root -e "use $3; source $2;"
if [ "$?" -eq 0 ]; then
    echo "Success"
    rm -f $2
else
    echo "import encountered a problem please inspect the file $2"
fi
```

