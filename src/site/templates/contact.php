<?php snippet('header') ?>
<?php snippet('loader') ?>
<?php snippet('menu') ?>

<div class="content">
  <div class="contact">
    <div class="wrap">

      <div class="global-hero contact-hero">
        <h1 class="headline"><?php echo $page->title(); ?></h1>
        <h2 class="sub-head"><?php echo $page->subtitle(); ?></h2>
      </div>


      <section class="contact-form">
        <?php echo $page->text(); ?>

        <?php if ($page->form() == 'on') { ?>

        <div class="contact-form-errors">
          <?php if (isset($_GET['firstname']) && $_GET['firstname'] == '') { ?>
            <p class="contact-form-error"><strong>First name</strong> is required.</p>
          <?php } ?>
          <?php if (isset($_GET['lastname']) && $_GET['lastname'] == '') { ?>
            <p class="contact-form-error"><strong>Last name</strong> is required.</p>
          <?php } ?>
          <?php if (isset($_GET['email']) && $_GET['email'] == '') { ?>
            <p class="contact-form-error"><strong>Email</strong> is required.</p>
          <?php } ?>
          <?php if (isset($_GET['company']) && $_GET['company'] == '') { ?>
            <p class="contact-form-error"><strong>Company</strong> is required.</p>
          <?php } ?>
        </div>

        <!-- Form -->
        <form action="http://www2.publicisgroupe.net/l/136951/2016-06-30/cm9dm" method="post">
          <div class="contact-form-column">
            <div class="contact-form-field">
              <label for="firstname">First Name *</label>
              <input type="text" id="firstname" name="firstname" value="<?php if (isset($_GET['firstname'])) { echo $_GET['firstname']; } ?>" class="form-input" autocomplete="off" required>
            </div>
            <div class="contact-form-field">
              <label for="lastname">Last Name / Surname *</label>
              <input type="text" id="lastname" name="lastname" value="<?php if (isset($_GET['lastname'])) { echo $_GET['lastname']; } ?>" class="form-input" autocomplete="off" required>
            </div>
            <div class="contact-form-field">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" value="<?php if (isset($_GET['email'])) { echo $_GET['email']; } ?>" class="form-input" autocomplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="email@domain.com" required>
            </div>
            <div class="contact-form-field">
              <label for="title">Title</label>
              <input type="text" id="title" name="title" value="<?php if (isset($_GET['title'])) { echo $_GET['title']; } ?>" class="form-input" autocomplete="off">
            </div>
            <div class="contact-form-field">
              <label for="company">Company *</label>
              <input type="text" id="company" name="company" value="<?php if (isset($_GET['company'])) { echo $_GET['company']; } ?>" class="form-input" autocomplete="off" required>
            </div>
            <div class="contact-form-field">
              <label for="phone">Phone</label>
              <input type="text" id="phone" name="phone" value="<?php if (isset($_GET['phone'])) { echo $_GET['phone']; } ?>" class="form-input" autocomplete="off">
            </div>
          </div>
          <div class="contact-form-column">
            <div class="contact-form-field">
              <label for="inquiry">Inquiry Type</label>
              <select type="text" id="inquiry" name="inquiry" value="" class="form-select" autocomplete="off">
                <option disabled="" selected="" value="">Please select one</option>
                <option value="Sales"<?php if(isset($_GET['inquiry']) && $_GET['inquiry'] == 'Sales') { ?> selected<?php } ?>>Sales</option>
                <option value="Employment"<?php if(isset($_GET['inquiry']) && $_GET['inquiry'] == 'Employment') { ?> selected<?php } ?>>Employment</option>
                <option value="News"<?php if(isset($_GET['inquiry']) && $_GET['inquiry'] == 'News') { ?> selected<?php } ?>>News</option>
              </select>
            </div>
            <div class="contact-form-field">
              <label for="comments">Tell us more...</label>
              <textarea id="comments" name="comments" class="form-textarea"><?php if (isset($_GET['comment'])) { echo $_GET['comment']; } ?></textarea>
            </div>
          </div>

          <div class="contact-form-field contact-form-field-submit">
            <input type="submit" value="Submit" class="form-submit cta">
          </div>
        </form>
        <!-- / Form -->

        <?php } ?>
      </section>


      <section class="contact-social">
        <h2 class="sub-head">Or you can hear from us.</h2>
      	<ul>
          <li><a href="https://twitter.com/RosettaMktg" target="_blank" class="icon icon-twitter-large"></a></li>
          <li><a href="http://www.linkedin.com/company/rosetta" target="_blank" class="icon icon-linkedin-large"></a></li>
          <li><a href="https://plus.google.com/+RosettaMktg/" target="_blank" class="icon icon-google-large"></a></li>
          <li><a href="https://www.facebook.com/rosetta" target="_blank" class="icon icon-facebook-large"></a></li>
          <li><a href="http://instagram.com/rosettamktg" target="_blank" class="icon icon-instagram-large"></a></li>
        </ul>
      </section>

      <section class="locations contact-locations" rel="locations">
      	<?php snippet('locations') ?>
      </section>

    </div>
  </div>
</div>

<?php snippet('footer') ?>
