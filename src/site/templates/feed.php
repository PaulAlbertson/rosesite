<?php
  echo page('news')->children()->visible()->flip()->limit(10)->feed(array(
    'title'       => $page->title(),
    'description' => $page->description(),
    'link'        => 'news' 
));
?>
