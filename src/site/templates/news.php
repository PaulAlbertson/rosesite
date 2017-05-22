<?php snippet('header') ?> 
<?php snippet('menu') ?>

<div class="global-hero news-hero">
  <div class="wrap">
    <h1 class="headline">Fresh News</h1>
    <h2 class="sub-head">The Latest From Our Agency</h2>
  </div>
</div>

<div class="content">
  <div class="news-articles">
    <div class="news-list">
      <?php $articles = $page->children()->visible()->sortBy('date','desc')->paginate(10); ?> 
      <?php foreach($articles as $article) { ?>
      <a href="<?php echo $article->url() ?>">
        <span class="news-date"><?php echo $article->date('F j, Y') ?></span>
        <h2><?php echo $article->title() ?></h2>
        <h3><?php echo $article->subtitle() ?></h3>
      </a>
      <?php } ?>
    </div>
  </div>

  <?php if($articles->pagination()->hasPages()) { ?>
  <div class="page-pagination news-pagination">
    <?php if($articles->pagination()->hasPrevPage()) { ?>
    <a class="page-prev" href="<?php echo $articles->pagination()->prevPageURL() ?>"><span class="icon icon-prev prev"></span> Newer</a>
    <?php } ?>
    <?php if($articles->pagination()->hasNextPage()) { ?>
    <a class="page-next" href="<?php echo $articles->pagination()->nextPageURL() ?>">Older <span class="icon icon-next next"></span></a>
    <?php } ?>
  </div>
  <?php } ?>
</div>

<?php snippet('footer') ?>
