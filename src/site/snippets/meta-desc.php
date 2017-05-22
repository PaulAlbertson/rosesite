<?php
  if ($page->metadescription()!='') {
    echo $page->metadescription();
  }
  elseif ($page->subtitle()!='') {
    echo strip_tags($page->subtitle());
  }
?>