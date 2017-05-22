<?php $addresses = yaml($pages->find('locations')->addresses()) ?>
<h1 class="headline"><?php echo $pages->find('locations')->title(); ?></h1>
<div class="locations-wrap">
<?php foreach($addresses as $key => $address) { ?>
<div class="location">
  <h3><?php echo $key ?></h3>
  <p class="address"><?php echo $address['Address'] ?><br>
    <?php echo $address['City'] ?>, <?php echo $address['State'] ?> <?php echo $address['ZIP'] ?>, <?php echo $address['Country'] ?><br>
    <?php echo $address['Phone'] ?></p>
  <p class="address-cta">
  	<a href="<?php echo $address['Map'] ?>" target="_blank"><span class="icon icon-location"></span></a>
  	<a href="mailto:<?php echo $address['Email'] ?>"><span class="icon icon-mail1"></span></a>
  </p>          
</div>
<?php } ?>
</div>