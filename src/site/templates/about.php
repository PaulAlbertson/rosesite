<?php snippet('header') ?>
<?php snippet('loader') ?>
<?php snippet('menu') ?>

<div class="global-hero about-hero hero-parallax">
  <div class="wrap">
    <div class="hero-inner">
      <h1 class="headline">About</h1>
      <h2 class="sub-head">We are an agency of data scientists,<br> designers, storytellers and innovators.</h2>
      <div class="about-hero-links">
        <a href="#careers" class="button button-block">
          <span class="button-icon button-icon-tb arrow"></span>
          <span class="button-text">Careers</span>
        </a>
        <a href="#leadership" class="button button-block">
          <span class="button-icon button-icon-tb arrow"></span>
          <span class="button-text">Leadership</span>
        </a>
        <a href="/news" class="button button-block">
          <span class="button-icon button-icon-lr arrow"></span>
          <span class="button-text">News</span>
        </a>
        <a href="/contact" class="button button-block">
          <span class="button-icon button-icon-lr arrow"></span>
          <span class="button-text">Contact</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="content">

  <div class="callout">
    <div class="wrap">
      <p>In 1998, Rosetta was founded on the knowledge that with a deeper understanding of consumers, we could design breakthrough solutions and drive business growth. Today our core strategy continues to provide a powerful competitive advantage to our clients by harnessing the power of data to create customer engagement that increases customer satisfaction,&nbsp;loyalty&nbsp;and&nbsp;advocacy.</p>
    </div>
  </div>
  
  <section class="about-values">
    <div class="wrap">
      <div class="cta-panel right">
        <h2 class="large-header">Values</h2>
        <div class="col-wrap">
          <div class="col2">
            <span class="icon icon-collaborate"></span>
            <h3>Collaborate</h3>
            <p>In an agency, no good idea or individual becomes great in&nbsp;isolation.</p>
          </div>
          <div class="col2">
            <span class="icon icon-listen"></span>
            <h3>Listen</h3>
            <p>To our colleagues, clients and their customers. Good ideas can come from all&nbsp;directions.</p>
          </div>
        </div>
        <div class="col-wrap">
          <div class="col2">
            <span class="icon icon-trust"></span>
            <h3>Trust</h3>
            <p>Solid relationships based on respect and open communication result in&nbsp;success.</p>
          </div>
          <div class="col2">
            <span class="icon icon-discover"></span>
            <h3>Discover</h3>
            <p>Be curious. Be a student of your craft; design a career worthy of your time, talent and&nbsp;purpose.</p>
          </div>
        </div>
        <div class="col-wrap">
          <div class="col2">
            <span class="icon icon-imagine"></span>
            <h3>Imagine</h3>
            <p>Explore what’s possible, what’s doable and what’s never been considered&nbsp;before.</p>
          </div>
          <div class="col2">
            <span class="icon icon-deliver"></span>
            <h3>Deliver</h3>
            <p>Accountability, results, impact and promises. Everything we do should be measurable at the individual and agency&nbsp;level.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="panel about-content">
    <div class="wrap">
      <section class="about-careers">
        <div class="col-wrap">
          <div class="col3 careers-publicis">
            <img src="/assets/images/about/publicis-logo.png" alt="Publicis">
            <p>As part of the Publicis Groupe, we have access to a global network of 62,000 professionals across 108 countries.  Today, Rosetta leads the charge on the behalf of the Groupe in creating customer engagement for the world’s prominent&nbsp;brands.</p>
          </div>
          <div class="col3 col3-wrap2">
            <h2 class="large-header" rel="careers">Careers</h2>
            <div class="col-wrap">
              <p>We help our clients create meaningful and measurable relationships with their customers by connecting rich data and insights, engaging experiences and robust technologies to drive business impact. If you're interested in helping us create engagement programs for some of the world's leading brands, use the link below to view all available opportunities.</p>
            </div>
            <a href="https://careers-razorfish.icims.com/jobs/search?ss=1&searchKeyword=Rosetta" class="button button-inline" target="_blank">
              <span class="button-icon button-icon-lr"></span>
              <span class="button-text">View All Careers</span>
            </a>
          </div>
        </div>
      </section>

      <section class="leadership-wrap">
        <h2 class="headline" rel="leadership">Leadership</h2>
        <div id="leadership" class="leadership slideshow">
          <?php $profiles = $pages->find('about/leadership')->children(); ?>
          <?php foreach($profiles as $profile) { ?>
          <div class="leader-wrap">
            <a href="<?php echo $profile->url() ?>" class="leader overlay-link overlay-slideshow" data-order="<?php echo ltrim($profile->num(), '0') ?>">
              <img src="/assets/images/leadership/<?php echo $profile->uid(); ?>.jpg" alt="<?php echo html($profile->title()) ?>" />
              <div class="leader-info">
                <div>
                  <h3><?php echo html($profile->title()) ?></h3>
                  <h4><?php echo html($profile->position()) ?></h4>
                </div>
              </div>
            </a>
            <div class="overlay-target">
              <img src="/assets/images/leadership/<?php echo $profile->uid(); ?>.jpg" alt="<?php echo html($profile->title()) ?>" class="profile-img" />
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
          </div>
          <?php } ?>
        </div>
      </section>
    </div>
  </div>

  <section class="locations about-locations" rel="locations">
    <?php snippet('locations') ?>
  </section>

  <?php snippet('section-nav') ?>

</div>

<?php snippet('footer') ?>