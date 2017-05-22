<?php snippet('header') ?>
<?php snippet('menu') ?>

<div class="content">
  <div class="page-hero-wrap">
    <div class="page-hero page-hero-news">
      <h1 class="page-title"><?php echo $page->title() ?></h1>
      <?php if ($page->subtitle()!='') { ?>
      <h2 class="page-subtitle"><?php echo $page->subtitle(); ?></h2>
      <?php } ?>
      <div class="page-hero-pagination pagination-controls">
        <?php if ($page->hasNextVisible()) { ?>
        <a href="<?php echo $page->next()->url(); ?>" class="icon icon-prev prev"></a>
        <?php } ?>
        <?php if ($page->hasPrevVisible()) { ?>
        <a href="<?php echo $page->prev()->url(); ?>" class="icon icon-next next"></a>
        <?php } ?>
      </div>
      <div class="page-hero-button">
        <a href="<?php echo $page->parent->url(); ?>" class="button button-inline">
          <span class="button-icon button-icon-rl arrow"></span>
          <span class="button-text">Back to News</span>
        </a>
      </div>
    </div>
  </div>
  <div class="page-wrap">
    <div class="page-content">
      <article class="article-col">
        <span class="news-loc-date"><?php echo ($page->location() !='' ? $page->location() . ', ' . html($page->date('F j, Y')) . '&nbsp;&mdash;' : ''); ?></span>
        <?php echo kirbytext($page->text()); ?>
        <?php echo ($page->source_name() !='' ? '<hr><p>This article originally published on <a href="'. $page->source_url() .'" target="_blank">' . $page->source_name() . '</a>.</p>' : ''); ?>
        <?php if($page->about_rosetta()!='') { ?>
          <hr>
          <h2>About Rosetta</h2>
          <p>Rosetta. Unlocking and Activating<sup>&trade;</sup> Human Behavior.</p>
          <p>Rosetta, part of Razorfish and the Publicis.Sapient platform, is an agency focused on Customer Engagement. We connect rich data, engaging experiences and robust technologies to create meaningful customer relationships that drive business impact.<p>
        <?php } ?>
      </article>
      <aside>
        <?php if($page->hasImages()) { ?>
        <div>
          <img src="<?php echo $page->images()->first()->url() ?>" class="article-img" />
        </div>
        <?php } ?>
        <?php snippet('page-share'); ?>
        <?php
          $article_contacts = str::split($page->contact_name());
          if($page->contact_name()!='') {
        ?>
        <div class="page-contact">
          <h4>Contact</h4>
          <?php
            foreach($article_contacts as $article_contact) {
              $profile = $pages->find('profiles')->children()->findBy('contact_name',''.$article_contact.'');
          ?>
          <p class="contact-info">
            <strong><?php echo $profile->title(); ?></strong><br>
            <?php echo $profile->phone(); ?><br>
            <a href="mailto:<?php echo $profile->email(); ?>"><?php echo $profile->email(); ?></a>
          </p>
          <?php } ?>
        </div>
        <?php } ?>
      </aside>
    </div>

    <div class="page-pagination news-pagination">
      <?php if ($page->hasNext()) { ?>
        <a href="<?php echo $page->next()->url(); ?>" class="page-prev">Previous <span class="icon icon-prev prev"></span></a>
      <?php } ?>
      <?php if ($page->hasPrev()) { ?>
        <a href="<?php echo $page->prev()->url(); ?>" class="page-next">Next <span class="icon icon-next next"></span></a>
      <?php } ?>
    </div>
  </div>
</div>

<?php snippet('footer') ?>
