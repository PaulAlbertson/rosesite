<div class="marketo-overlay">
  <div class="marketo-form content-form">
    <h1 class="headline">Content is hidden</h1>
    <p class="center">Please fill out the form to view it.</p>
    <script src="//app-sj03.marketo.com/js/forms2/js/forms2.js"></script>
    <form id="mktoForm_<?php echo $page->$id(); ?>"></form>
    <script>
      MktoForms2.loadForm("//app-sj03.marketo.com", "566-HAN-801", <?php echo $page->$id(); ?>, function(MktoForms2) {
        MktoForms2.onSuccess(function(values, followUpUrl) {
          var url = location.href;
          var newUrl = url.split('?')[0];
          window.location = newUrl;
          return false;
        });
      });
    </script>
  </div>
</div>