/* global Raphael:false */
(function (window, document, $, undefined) {
	'use strict';
	// place entire program inside of this closure

$(function () {
// document is ready

// Scale Dials
// var minScrW = 1280;
// function dialSize() {
//   var winW = $(window).width();
//   var dialScale = winW/minScrW;
//   $('.data-dial, .data-text').css({
//     'transform' : 'scale('+dialScale+')'
//   });
// }

// if ($(window).width()>minScrW) {
//   dialSize();
// }
// else {
//   $('.data-dial, .data-text').css({
//     'transform' : 'scale(1)'
//   });
// }

// $(window).resize(function() {
//   if ($(this).width()>minScrW) {
//     dialSize();
//   }
// });


$('.why-data').each(function() {

var dataItem = $(this),
dialId = dataItem.attr('data-id'),
n = $('#'+dialId).attr('data-value'); // final value

var paper = new Raphael(dialId, 216, 216);
var circle = paper.circle(104, 104, 100);
circle.attr({
  'fill' : '#FFF',
  'fill-opacity' : '0.5',
  'stroke' : 0
});

dataItem.waypoint(function() {

  var archtype = new Raphael(dialId, 216, 216);
  archtype.customAttributes.arc = function (xloc, yloc, value, total, R) {
    var alpha = 360 / total * value,
    a = (90 - alpha) * Math.PI / 180,
    x = xloc + R * Math.cos(a),
    y = yloc - R * Math.sin(a),
    path;
    if (total == value) {
      path = [
      ['M', xloc, yloc - R],
      ['A', R, R, 0, 1, 1, xloc - 0.01, yloc - R]
      ];
    } else {
      path = [
      ['M', xloc, yloc - R],
      ['A', R, R, 0, +(alpha > 180), 1, x, y]
      ];
    }
    return {
      path: path
    };
  };

  var arcInner = archtype.path().attr({
    'stroke': '#A1A3A6',
    'stroke-width': 8,
    'stroke-dasharray' : '',
    arc: [104, 104, 0, 100, 80]
  });

  arcInner.node.setAttribute('stroke-dasharray', '2,3'); // FIX for dash arrays

  var arcOuter = archtype.path().attr({
    'stroke': '#e81e75',
    'stroke-width': 8,
    arc: [104, 104, 0, 100, 80]
  });

  function animArcOuter() {
    arcOuter.animate({
      arc: [104, 104, n, 100, 80]
    }, n*20, '<>');

    var m = 1; // increment
    //var nInt = n/time*1000;
    //console.log(nInt);

    var dataText = setInterval(function() {
      dataInterval();
    }, 20); // time between increments

    function dataInterval() {
      m += 1;
      dataItem.find('.data-text-value').val(m).trigger('change');
      dataItem.find('.data-text-value').html(m);
      if(m==n) {            
        window.clearInterval(dataText);
      }
    }
  }

  var time  = 1000;
  function animArcInner() {
    arcInner.animate({
      arc: [104, 104, 100, 100, 80]
    }, time, '<>');
  }

  animArcInner();

  setTimeout(function() {
    animArcOuter();
  }, time/4); 

  }, {
    offset: '75%',
    triggerOnce: true
  });

});




// end document ready
});
})(window, document, jQuery);

