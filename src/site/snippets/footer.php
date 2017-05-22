   <div class="footer-space"></div>

  <footer>
    <div class="footer">
      <div class="footer-feeds">
        <div class="footer-wrap">
          <div class="col3">
            <h3 class="large-header"><a href="/news">News</a></h3>
            <?php
              $news = $pages->find('news')->children()->visible()->flip()->slice(0,2);
              foreach($news as $article) {
            ?>
            <a href="/<?php echo $article->uri(); ?>">
              <h4><?php echo $article->title(); ?></h4>
              <p class="date-time"><?php echo $article->date('F d, Y'); ?></p>
            </a>
          <?php } ?>
          </div>
           <div class="col3">
            <h3 class="large-header"><a href="http://currents.rosetta.com/" target="_blank">Currents</a></h3>
            <?php
            
              $rss = new DOMDocument();
              $rss->load('http://currents.rosetta.com/feed/');
              $feed = array();
              foreach ($rss->getElementsByTagName('item') as $node) {
                $item = array (
                  'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
                  'link' => $node->getElementsByTagName('link')->item(0)->nodeValue,
                  'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue
                );
                array_push($feed, $item);
              }
              $limit = 2;
              for($x=0;$x<$limit;$x++) {
                $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
                $link = $feed[$x]['link'];
                $date = date('F d, Y', strtotime($feed[$x]['date']));
                echo '<a href="'.$link.'" target="_blank"><h4>'.$title.'</h4>';
                echo '<p class="date-time">'.$date.'</p></a>';
              }
              
            ?>
          </div>
          <div class="col3">
            <h3 class="large-header"><a href="https://twitter.com/RosettaMktg" target="_blank">Twitter</a></h3>
            <section class="tweets">
              <div id="twitter-feed"></div>
            </section>
          </div>
        </div>
      </div>
      <div class="footer-social">
        <div class="footer-wrap">
          <ul>
            <li><a href="https://twitter.com/RosettaMktg" target="_blank" class="icon icon-twitter-large"></a></li>
            <li><a href="http://www.linkedin.com/company/rosetta" target="_blank" class="icon icon-linkedin-large"></a></li>
            <li><a href="https://plus.google.com/+RosettaMktg/" target="_blank" class="icon icon-google-large"></a></li>
            <li><a href="https://www.facebook.com/rosetta" target="_blank" class="icon icon-facebook-large"></a></li>
            <li><a href="http://instagram.com/rosettamktg" target="_blank" class="icon icon-instagram-large"></a></li>
            <li><a href="/contact" class="icon icon-mail3"></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-wrap">
          <ul class="footer-nav">
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact#locations">Locations</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="mailto:contact@rosetta.com?Subject=Rosetta RFP">Submit RFP</a></li>    
          </ul>
          <span class="copyright"><a href="/privacy"><?php echo kirbytext($site->copyright()); ?></a></span>
        </div>
    </div>
  </footer>

  <?php snippet('overlay') ?>
  <?php snippet('scripts') ?>
  </body>
</html>