---
layout: post
title: Writing Drupal Caching Code The Right Way
date: 2016-03-23 21:32:18
categories: 
- Drupal
- Caching
- PHP
tags: 
- Drupal
- Caching
- PHP
- Performance
---

Two examples first is basic caching function, the second is using static cache.

```PHP

/**
* This is an example function to demonstrate effective caching in drupal.
**/
function example_module_get_cached_data() {
  // Set a cache ID to store and retrieve the cache.
  $cache_id = 'example_module_data';

  $example_data = null;

  // Test to see if the variable is empty and via overload then do the cache get.
  if ($cache = cache_get($cache_id)) {
    $example_data = $cache->data;
  }

  // Check if there was a result this is important to do again.
  if (empty($example_data)) {
    // Do expensive operation if variable is not available.
    $example_data = example_expensive_call();
    
    // Cache the output with the cache_id (CACHE_TEMPORARY to signify that it can be removed on cache clear).
    // You can use other flags as well, depending on the use case
    cache_set($cache_id, $example_data, 'cache', CACHE_TEMPORARY);
  }
  return $example_data;
}
```

Below is an example of how to do caching in Drupal using static cache.

```PHP

/**
* This is an example function to demonstrate effective caching in drupal.
**/
function example_module_get_cached_data() {
  // Set a cache ID to store and retrieve the cache.
  $cache_id = 'example_module_data';

  // Try to retrieve from static cache.
  $example_data = &drupal_static($cache_id);

  // Test to see if the variable is empty and via overload then do the cache get.
  if (empty($example_data) && $cache = cache_get($cache_id)) {
    $example_data = $cache->data;
  }

  // Check if there was a result this is important to do again.
  if (empty($example_data)) {
    // Do expensive operation if variable is not available.
    $example_data = example_expensive_call();
    
    // Cache the output with the cache_id (CACHE_TEMPORARY to signify that it can be removed on cache clear).
    // You can use other flags as well, depending on the use case
    cache_set($cache_id, $example_data, 'cache', CACHE_TEMPORARY);
  }
  return $example_data;
}
```