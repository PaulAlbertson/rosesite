<div class="page-share">
	<h4>Share</h4>
	<ul>
		<li><a href="https://twitter.com/intent/tweet?text=<?php echo urlencode($page->title()); ?> <?php echo $page->tinyurl(); ?>" class="icon icon-twitter-small"></a></li>
		<li><a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode($page->url()); ?>&title=<?php echo urlencode($page->title()); ?>&summary=<?php echo $page->metadescription(); ?>&source=<?php echo 'Rosetta'; ?>" target="_blank" class="icon icon-linkedin-small"></a></li>
    <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $page->url(); ?>" target="_blank" class="icon icon-facebook-small"></a></li>
    <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
    <li><a href="mailto:?subject=<?php echo $page->title() ?>&body=<?php echo $page->url(); ?>" class="icon icon-mail2"></a></li>
  </ul>
  <span class="tinyurl">
    <span class="icon icon-link"></span>
    <input type="text" value="<?php echo $page->tinyurl(); ?>" readonly>
  </span>
</div>

<?php // echo ($page->share()!='') ? $page->share() : urlencode($page->title()) . $page->tinyurl() ?>