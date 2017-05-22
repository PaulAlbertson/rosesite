<?php $thisPage = $page->uri(); ?>
<div class="section-subnav">
  <ul>
    <?php echo ($thisPage !='case-studies/software') ? '<li><a href="/case-studies/software">' : '<li class="section-subnav-current"><a>' ?>
      <div class="img-wrap">
        <span class="icon">
          <span class="case-icons icon-desktop"></span>
        </span>
        <img src="/assets/images/how/case-study-software.jpg" alt="Software Case Study">
      </div> 
      Software
      <?php echo ($thisPage !='case-studies/software') ? '</a>' : '</a>' ?>
    </li>

    <?php echo ($thisPage !='case-studies/investment-services') ? '<li><a href="/case-studies/investment-services">' : '<li class="section-subnav-current"><a>' ?>
      <div class="img-wrap">
        <span class="icon">
          <span class="case-icons icon-chart"></span>
        </span>
        <img src="/assets/images/how/case-study-investment-services.jpg" alt="Investment Services Case Study">
      </div>
      Investment Services
      <?php echo ($thisPage !='case-studies/investment-services') ? '</a>' : '</a>' ?>
    </li>

    <?php echo ($thisPage !='case-studies/apparel-retail') ? '<li><a href="/case-studies/apparel-retail">' : '<li class="section-subnav-current"><a>' ?>
        <div class="img-wrap">
          <span class="icon">
            <span class="case-icons icon-shoe"></span>
          </span>
          <img src="/assets/images/how/case-study-apparel-retail.jpg" alt="Apparel Retail Case Study">
        </div>
        Apparel Retail
      <?php echo ($thisPage !='case-studies/apparel-retail') ? '</a>' : '</a>' ?>
    </li>

    <?php echo ($thisPage !='case-studies/personal-computing') ? '<li><a href="/case-studies/personal-computing">' : '<li class="section-subnav-current"><a>' ?>
        <div class="img-wrap">
          <span class="icon">
            <span class="case-icons icon-cart"></span>
          </span>
          <img src="/assets/images/how/case-study-personal-computing.jpg" alt="Personal Computing Case Study">
        </div>
        Personal Computing
      <?php echo ($thisPage !='case-studies/personal-computing') ? '</a>' : '</a>' ?>
    </li>

    <?php echo ($thisPage !='case-studies/pharmaceuticals') ? '<li><a href="/case-studies/pharmaceuticals">' : '<li class="section-subnav-current"><a>' ?>
        <div class="img-wrap">
          <span class="icon">
            <span class="case-icons icon-health"></span>
          </span>
          <img src="/assets/images/how/case-study-pharmaceuticals.jpg" alt="Pharmaceuticals Case Study">
        </div>
        Pharmaceuticals
      <?php echo ($thisPage !='case-studies/pharmaceuticals') ? '</a>' : '</a>' ?>
    </li>

    <?php echo ($thisPage !='case-studies/gaming') ? '<li><a href="/case-studies/gaming">' : '<li class="section-subnav-current"><a>' ?>
        <div class="img-wrap">
          <span class="icon">
            <span class="case-icons icon-gaming"></span>
          </span>
          <img src="/assets/images/how/case-study-gaming.jpg" alt="Gaming Case Study">
        </div>
        Gaming
      <?php echo ($thisPage !='case-studies/gaming') ? '</a>' : '</a>' ?>
    </li>
  </ul>
</div>