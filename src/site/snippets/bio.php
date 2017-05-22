<?php $profile = $pages->find('about/leadership/'.$name); ?>
<a href="<?php echo $profile->url() ?>" class="leader overlay-link">
  &mdash; <?php echo html($profile->title()) ?><br>
  <?php echo html($profile->position()) ?>
</a>
<div class="overlay-target">
  <img src="/assets/images/leadership/<?php echo $profile->uid(); ?>.jpg" class="profile-img" alt="<?php echo html($profile->title()) ?>" />
  <h1><?php echo html($profile->title()) ?></h1>
  <h2><?php echo html($profile->position()) ?></h2>
  <?php echo kirbytext($profile->bio()) ?>
  <div class="profile-social">
    <?php if ($profile->twitter()!='') { ?>
    <a href="<?php echo $profile->twitter(); ?>" class="icon icon-twitter-large" target="_blank"></a>
    <?php } ?>
    <?php if ($profile->linkedin()!='') { ?>
    <a href="<?php echo $profile->linkedin(); ?>" class="icon icon-linkedin-large" target="_blank"></a>
    <?php } ?>
  </div>
</div>