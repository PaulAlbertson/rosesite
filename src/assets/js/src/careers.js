/* global Modernizr:false */

(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure
  
  function splitTable() {
    var count = 12;
    var tr = $('.careers-results tr');
    var rows = tr.length;
    console.log(rows);
    if (rows>(count+1)) {
      console.log('more than');
      $('.careers-results table, .careers-results tbody').contents().unwrap();
      var th = $('.careers-results-headers').html();
      $('.careers-results-headers').remove();
      var newTr = $('.careers-results tr');
      var newRows = newTr.length;
      for(var c = 0; c<=newRows;c+=count) {
        newTr.slice(c, c+count).wrapAll('<table>');
      }
      $('.careers-results table').prepend('<tr class="careers-results-headers">'+th+'</tr>');
    }
    $('.careers-results table:first').addClass('careers-results-current');
  }
  splitTable();

  var i = 0;
  var pages = $('.careers-results table').length;
  if (pages>1) {
    $('.careers-pagination').append('<li class="careers-pagination-arrow careers-pagination-arrow-hidden"><span class="button-icon icon-prev"></span></li>');
    for(i=0; i<pages; i++) {
       console.log(i+1);
      $('.careers-pagination').append('<li class="careers-pagination-item">'+(i+1)+'</li>');
    }
    $('.careers-pagination').append('<li class="careers-pagination-arrow"><span class="button-icon icon-next"></span></li>');
  }
  else {
    $('.careers-pagination-wrap').remove();
  }

  $('.careers-pagination-item:first').addClass('careers-pagination-current');

  $('.careers-pagination-item').click(function() {
    var pos = $(this).index('.careers-pagination-item');
    $('.careers-pagination-item').removeClass('careers-pagination-current');
    $('.careers-pagination-item:eq('+pos+')').addClass('careers-pagination-current');
    $('.careers-results table').removeClass('careers-results-current');
    $('.careers-results table:eq('+pos+')').addClass('careers-results-current');
  });

  $('.careers-pagination-arrow').click(function() {
    var curItem = $('.careers-pagination-current'),
      firstItem = $('.careers-pagination-item:first'),
      lastItem = $('.careers-pagination-item:last');

    if ($(this).find('span').hasClass('icon-next')) {
      curItem.next('.careers-pagination-item').trigger('click');
    }
    if ($(this).find('span').hasClass('icon-prev')) {
      curItem.prev('.careers-pagination-item').trigger('click');
    }
  });

  $('.careers-pagination li').click(function() {
    var firstItem = $('.careers-pagination-item:first'),
    lastItem = $('.careers-pagination-item:last');
    if (firstItem.hasClass('careers-pagination-current')) {
      $('.careers-pagination-arrow:first').addClass('careers-pagination-arrow-hidden');
    }
    else {
      $('.careers-pagination-arrow:first').removeClass('careers-pagination-arrow-hidden');
    }
    if (lastItem.hasClass('careers-pagination-current')) {
      $('.careers-pagination-arrow:last').addClass('careers-pagination-arrow-hidden');
    }
    else {
      $('.careers-pagination-arrow:last').removeClass('careers-pagination-arrow-hidden');
    }
  });

  $('.careers .top-nav').hide();
  setTimeout(function() {
    $('.careers .top-nav').show();
  }, 1);



// End Document Ready
})(window, document, jQuery);

