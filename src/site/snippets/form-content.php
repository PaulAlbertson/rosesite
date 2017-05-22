<div class="content-form">
	<?php echo kirbytext($page->contentformtext()) ?>
	<script src="//app-sj03.marketo.com/js/forms2/js/forms2.js"></script>
	<form id="mktoForm_<?php echo $page->$id(); ?>"></form>
	<script>
		MktoForms2.loadForm("//app-sj03.marketo.com", "566-HAN-801", <?php echo $page->$id(); ?>, function(MktoForms2) {
			MktoForms2.onSuccess(function(values, followUpUrl) {
				$('.content-form').fadeOut(500);
	      $('.submit-message').delay(510).fadeIn(500, function() {
	      	var subMes = $('.submit-message').offset().top;
	      	$('html,body').animate({scrollTop: subMes-80}, 400);
	      });
	      return false;
	    });
		});
	</script>
</div>
<div class="submit-message">
	<?php echo kirbytext($page->submitmessage()) ?>
</div>