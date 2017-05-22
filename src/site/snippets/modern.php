<script>
  Modernizr.load([
  {
    load: '//code.jquery.com/jquery-1.11.1.min.js',
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load('/assets/js/libs/jquery-1.11.1.js');
      }
    }
  },
  {
    // This will wait for the fallback to load and
    // execute if it needs to.
    console.log('Jquery loaded');
    //load: '/assets/js/libs/jquery-1.11.1.js'
  }
]);
</script>