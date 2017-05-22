<?php snippet('header') ?>
<?php snippet('menu') ?>

<div class="content">
	<div class="profile-content">
		<img src="/assets/images/leadership/<?php echo $page->uid(); ?>.jpg" alt="<?php echo html($page->title()) ?>" class="profile-img" />
		<h1><?php echo html($page->title()) ?></h1>
		<h2><?php echo html($page->position()) ?></h2>
		<?php echo kirbytext($page->bio()) ?>
		<div class="profile-social">
			<?php if ($page->twitter()!='') { ?>
			<a href="<?php echo $page->twitter(); ?>" class="icon icon-twitter-large" target="_blank"></a>
			<?php } ?>
			<?php if ($page->linkedin()!='') { ?>
			<a href="<?php echo $page->linkedin(); ?>" class="icon icon-linkedin-large" target="_blank"></a>
			<?php } ?>
		</div>
	</div>
</div>
<?php snippet('footer') ?>