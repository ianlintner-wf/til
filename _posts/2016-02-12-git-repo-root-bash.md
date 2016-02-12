---
published: false
layout: post
date: 2016-02-12T09:31:00.000Z
categories: bash
tag: 
  - bash
  - git
author: Ian Lintner
---

## Get the root of git repo

```bash
cd $(git rev-parse --show-cdup)
```

```bash
alias git-root='cd $(git rev-parse --show-cdup)'
```