<?php $thisPage = $page->uri(); ?>

<div class="section-nav">
  <ul>
    <?php echo ($thisPage !='why') ? '<li><a href="/why">' : '<li class="section-nav-current">' ?>
    	<img src="/assets/images/global/section-nav-why.jpg" alt="Why Engagement Matters">
    	<span>Why Engagement Matters</span>
    	<?php echo ($thisPage !='why') ? '</a>' : '' ?>
    </li>
    <?php echo ($thisPage !='how') ? '<li><a href="/how">' : '<li class="section-nav-current">' ?>
    	<img src="/assets/images/global/section-nav-how.jpg" alt="How We Get It Right">
    	<span>How We Get It Right</span>
    	<?php echo ($thisPage !='how') ? '</a>' : '' ?>
    </li>
    <?php echo ($thisPage !='who') ? '<li><a href="/who">' : '<li class="section-nav-current">' ?>
    	<img src="/assets/images/global/section-nav-who.jpg" alt="Who We Do It For">
    	<span>Who We Do It For</span>
    	<?php echo ($thisPage !='who') ? '</a>' : '' ?>
    </li>
    <?php echo ($thisPage !='about') ? '<li><a href="/about">' : '<li class="section-nav-current">' ?>
    	<img src="/assets/images/global/section-nav-about.jpg" alt="About Rosetta">
    	<span>About Rosetta</span>
    	<?php echo ($thisPage !='about') ? '</a>' : '' ?>
  	</li>
  </ul>
</div>