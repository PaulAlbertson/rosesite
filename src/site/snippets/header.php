<!DOCTYPE html>
<html class="no-js" xmlns="http://www.w3.org/1999/xhtml"
  xmlns:fb="http://www.facebook.com/2008/fbml"
  xmlns:og="http://opengraphprotocol.org/schema/" xml:lang="en" lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<!-- Meta -->
<title><?php snippet('meta-title'); ?></title>
<meta name="description" content="<?php snippet('meta-desc'); ?>"/>
<meta name="keywords" content="<?php echo ($page->keywords()!='') ? $page->keywords() : $site->keywords() ?>"/>

<!-- Icons -->
<link rel="shortcut icon" href="/assets/images/global/favicon.ico" type="image/x-icon">
<link rel="icon" href="/assets/images/global/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="/assets/images/global/touch-icon.png">

<!-- App -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="application-name" content="Rosetta.com" />
<meta name="apple-mobile-web-app-title" content="Rosetta.com">
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<?php $imgCount = $page->images()->count(); ?>
<!-- Facebook -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="<?php echo $site->title() ?>" />
<meta property="og:title" content="<?php snippet('meta-title'); ?>" />
<meta property="og:url" content="<?php echo $page->url() ?>" />
<meta property="og:description" content="<?php snippet('meta-desc'); ?>" />
<!-- image must be 1200x630 -->
<?php if($page->hasImages()) { ?>
<?php if($imgCount===2) { ?>
<meta property="og:image" content="<?php echo $page->images()->last()->url(); ?>" />
<?php } } else { ?>
<meta property="og:image" content="/assets/images/social/rosetta-facebook-1200x630.jpg" />
<?php } ?>


<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@RosettaMktg">
<meta name="twitter:title" content="<?php snippet('meta-title'); ?>">
<meta name="twitter:description" content="<?php snippet('meta-desc'); ?>">
<meta name="twitter:creator" content="@RosettaMktg">
<!-- image must be at least 280x150px -->
<?php if($page->hasImages()) { ?>
<?php if($imgCount==2) { ?>
<meta property="og:image" content="" />
<meta name="twitter:image:src" content="<?php echo $page->images()->last()->url(); ?>">
<?php } } else { ?>
<meta name="twitter:image:src" content="/assets/images/social/rosetta-twitter-280x150.jpg">
<?php } ?>

<!-- Google+ -->
<meta itemprop="name" content="<?php snippet('meta-title'); ?>">
<meta itemprop="description" content="<?php snippet('meta-desc'); ?>">
<?php if($page->hasImages()) { ?>
<?php if($imgCount==2) { ?>
<meta itemprop="image" content="<?php echo $page->images()->last()->url(); ?>">
<?php } } else { ?>
<meta itemprop="image" content="/assets/images/social/rosetta-googleplus-380x400.jpg">
<?php } ?>

<!-- Pace Loader -->
<!--[if (gt IE 9)|!(IE)]><!-->
<script>  
  window.paceOptions = {
    ajax: false,
    elements: {
      selectors: ['.content']
    },
    restartOnPushState: false,
    restartOnRequestAfter: false,
    eventLag: false,
    minTime: 0,
    ghostTime: 0
}
</script>
<script src="/assets/js/libs/pace.js"></script>
<!--<![endif]-->

<link rel="stylesheet" type="text/css" href="/assets/css/main.css" />

<!--[if lte IE 9]>
<style> .loader { display:none; } </style>
<![endif]-->

<!--[if IE 9]><link rel="stylesheet" href="/assets/css/ie9.css" type="text/css" /><![endif]-->

<script src="/assets/js/libs/modernizr.custom.js"></script>

<!-- Ensighten -->
<?php $server_url = "$_SERVER[HTTP_HOST]"; ?>
<script src="//nexus.ensighten.com/rosetta/<?php echo ($server_url!='rosemk-www-01-d1-wb01.wwwa.com') ? '' : 'dev/'; ?>Bootstrap.js"></script>

</head>

<body>
