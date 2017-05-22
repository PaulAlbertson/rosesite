<?php snippet('header') ?>
<?php snippet('menu') ?>

<div class="content">
  <div class="page-hero-wrap">
    <?php
      $hero = $page->images()->find('hero.jpg');
      if($hero) {
    ?>
    <div class="page-hero-img" style="background-image: url('<?php echo $hero->url() ?>');"></div>
    <?php } ?>
    <div class="page-hero">
      <h1 class="page-title"><?php echo $page->title() ?></h1>
      <?php if ($page->subtitle()!='') { ?>
      <h2 class="page-subtitle"><?php echo $page->subtitle() ?></h2>
      <?php } ?>
    </div>
  </div>
  <div class="page-wrap landing-page-wrap">
    <div class="page-content">
      <?php if ($page->sharing()=='off' && $page->columntext()=='') { ?>
      <article>
      <?php } else { ?>
      <article class="article-col">
      <?php } ?>
      
        <?php if ($page->video()!='') { ?>
        <iframe src="https://player.vimeo.com/video/<?php echo $page->video(); ?>?title=0&amp;byline=0&amp;portrait=0" class="main-video-player" width="900" height="506" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <?php } ?>

        <?php echo kirbytext($page->text()) ?>
        <?php
          if ($page->contentform()!='') {
            snippet('form-content', array('id' => 'contentform'));
          }
        ?>
      </article>
      <?php if ($page->sharing()!='off' || $page->columntext()!='') { ?>
      <aside<?php if($hero) { echo ' class="sidebar-overlap"'; } ?>>
        <?php if ($page->columntext()!='') { echo '<div>' . kirbytext($page->columntext()) . '</div>'; } ?>
        <?php if ($page->sharing()!='off') { snippet('page-share'); } ?>
      </aside>
      <?php } ?>

      <?php if ($page->fulltext()!='') { ?>
      <div class="clear"></div>
      <article>
        <?php echo kirbytext($page->fulltext()); ?>
      </article>
      <?php } ?>

    </div>
  </div>
</div>

<?php snippet('footer') ?>