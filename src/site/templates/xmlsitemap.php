<?php
  $ignore = array('sitemap', 'error', 'profiles', 'locations');
  header('Content-type: text/xml; charset="utf-8"');
  echo '<?xml version="1.0" encoding="utf-8"?>';
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"> 
  <?php foreach($pages->index() as $p) { ?>
  <?php if(in_array($p->uri(), $ignore)) continue ?>
  <url>
    <loc><?php echo html($p->url()) ?></loc>
    <?php if ($p->hasImages()) { ?>
      <?php foreach($p->images() as $image) { ?>
      <image:image>
        <image:loc><?= $image->url() ?></image:loc>
      </image:image>
      <?php } ?>
    <?php } ?>
    <lastmod><?php echo $p->modified('c') ?></lastmod>
    <priority><?php echo ($p->isHomePage()) ? 1 : number_format(0.5/$p->depth(), 1) ?></priority>
  </url>
  <?php } ?>
</urlset>