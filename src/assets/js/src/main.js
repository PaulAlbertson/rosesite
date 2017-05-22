// If you are using a library whos namespace starts with a cap letter, enter it below, else you will receiveth an error
/* global TweenMax:false, Linear:false, TimelineLite:false, Power3:false, Pace:false, Modernizr:false, $f:false, FastClick:false */

(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

  // Fast Click
  // FastClick.attach(document.body);
  
  /* Global within main.js */
  var $window = $(window),
      $body = $('body'),
      $target = $('.header .target'),
      $topnav = $('.top-nav'),
      $nav = $('nav'),
      $navLink = $('nav a'),
      $navOverlay = $('.nav-overlay'),
      $mainSideLinks = $('.main-side-nav a, .top-side-nav a'),
      $sideNav = $('nav a'),
      url = window.location.href,
      urlPath = window.location.pathname,
      //homeAnimationContent = $('.animatedimages').children(),
      //fps = 24,
      //duration = 2 / fps,
      //scrollBottom = ($(document).height()-800),
      homeAnimationPlayed = false,
      videoCanPlay = false,
      isWebkit = 'WebkitAppearance' in document.documentElement.style;
  /* Global Functions */

// Master function to init page functionality
  $(function () {
    /* NEW NAV topNav.init();  
    slideMenu.init();
    slideMenu.close();*/
    homeHero.init();

    if (checkHome) {
      intro.init();
    }
  });



// ------------- Header / Navigation -------------//

  var header = $('header'),
    nav = $('nav'),
    button = $('.nav-button'),
    navOverlay = $('.nav-overlay'),
    listItem = $('nav li'),
    loadOverlay = $('.load-overlay'),
    navTime = 400,
    navTimeS = navTime/1000;

  if (Modernizr.touch) {
    button.addClass('nav-button-touch');
  }
  
  // Nav
  function navOpen() {
    nav.addClass('nav-open');
    navOverlay.show();
    button.addClass('nav-button-open').removeClass('nav-button-closed');
    if (Modernizr.csstransforms3d) {
      setTimeout(function() {
        navOverlay.addClass('nav-overlay-open');
      }, 15);
    }
    else {
      TweenMax.to(nav, navTimeS, {x: '0%'});
      TweenMax.to(navOverlay, navTimeS, {opacity: 1, onComplete: function() {
        animated = false;
      }});
    }
    if (Modernizr.touch) {
      header.removeClass('header-scroll');
    }
    else {
      headerAtTop();
    }
}
function navClose() {
    nav.removeClass('nav-open');
    button.removeClass('nav-button-open').removeClass('nav-button-closed');
    if (Modernizr.csstransforms3d) {
      navOverlay.removeClass('nav-overlay-open');
    }
    else {
      TweenMax.to(nav, navTimeS, {x: '100%'});
      TweenMax.to(navOverlay, navTimeS, {opacity: 0, onComplete: function() {
        animated = false;
      }});
    }
    setTimeout(function() {
      navOverlay.hide();
      nav.scrollTop(0);
    }, navTime);
    if (Modernizr.touch) {
      header.addClass('header-scroll');
    }
    else {
      headerScroll();
    }
}
var animated = false;
button.on('click', function() {
  if (button.hasClass('nav-button-open') && animated === false) {
    navClose();
  }
  else {
    if (animated === false) {
      navOpen();
    }
  }
  animated = true;
});
nav.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function() {
  animated = false;
  //console.log('transition end');
});

// Other actions that close the menu
navOverlay.on('click mousewheel DOMMouseScroll', function () {
  navClose();
});

if (Modernizr.touch) {
  nav.touchSwipeRight(function() {
    navClose();
  });
}

// Nav link click
nav.find('a').not('a[href*="mailto"], a[target="_blank"]').click(function(e) {
  navClose();
  e.preventDefault();
  var url = $(this).attr('href'),
    nohash = url.split('#')[0],
    thehash = url.substr(url.indexOf('#') + 1),
    path = window.location.pathname;
  if (url.indexOf('#') >= 0 && nohash === path) {
    setTimeout(function() {
      scrollToAnchor(thehash);
    }, navTime);
  }
  else {
    setTimeout(function() {
      window.location = url;
    }, navTime);
  }
});

// Header Scroll
if (Modernizr.touch) {
  header.addClass('header-scroll');
}
function headerNotTop() {
    header.addClass('header-scroll');
}
function headerAtTop() {
  if (!Modernizr.touch) {
    header.removeClass('header-scroll');
  }
}
function headerScroll() {
  var scrollPos = $(window).scrollTop();
  if (nav.hasClass('nav-open')===false) {
    if (scrollPos<=1) {
        headerAtTop();
    }
    else {
        headerNotTop();
    }
  }
}
headerScroll();
$(window).scroll(function() {
  headerScroll();
});

// ------------- End Header / Navigation -------------//

// Applies the nav-current class to the current menu item 
$('.main-nav-item a[href="'+urlPath+'"]').addClass('nav-current');



/*
  function homeNews() {
    $('.home-news-item:first').addClass('home-intro-active');
    setTimeout(function() {
      $('.home-news-item').removeClass('home-intro-active');
      $('.home-intro').addClass('home-intro-active');
    }, 10000);
  }
*/

  var hasPlayed = false;
  function homeVideo() {

    var homeVid = $('.home-video video'),
        homeVidElem = homeVid[0];

    function playVideo() {
      if (hasPlayed) return;

      homeVidElem.play();
      hasPlayed = true;
      
      // Safari video focus/blur fix
      if (isWebkit) {
        setTimeout(function() {
          $(window).focus(function() {
            homeVidElem.currentTime=5;
          });
          $(window).blur(function() {
            homeVidElem.currentTime=5;
          });
        },4000);
      }
    }
    
    //homeVid.on('canplaythrough', playVideo());

    // if (homeVidElem.readyState > 3) {
    //   playVideo();
    //   $('.home-video-placeholder').hide();
    // }



    function isTouch() {
      var hasTouch = Modernizr.touch,
          mobileUser = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
      return (hasTouch && mobileUser);
    }

    if (isTouch()) {
      $('.holiday-hero').remove();
      $('.home-intro').show();
      $('.home-video-placeholder').show();
      $('.home-video video, .home-video-mask').hide();
    }
    else {

      if ($('.home-video').length && !hasPlayed) {
        $('.home-video-placeholder').hide();
        // hasPlayed = true;
      }
    }
  }

  function hideLoader() {
      if ($('body').find('.home').length) {
        homeVideo();
      }
    setTimeout(function() {
      $('.loader').addClass('loader-hidden');
      //footerSize();
      //homeNews();

    },100);
    setTimeout(function() {
      $('div.pace, .loader').remove();
      $('body').removeClass('noscroll pace-done');
      //footerSize();
    },600);
  }

  if ($('.loader:hidden') && $('.home-video video').length) {
    homeVideo();
  }

  if (Modernizr.touch) {
    $('.top-nav').addClass('display-nav');
  }

/* NEW NAV  var heroScroll = $('.hero-scroll span');
  if (!Modernizr.touch) {
    setInterval(function() { 
      heroScroll.toggleClass('fadeOutDown');
      setTimeout(function() {
        heroScroll.toggleClass('fadeInDown');
      },1500);
    },1500);
  }*/

  //Fallback for Android 2.3 and below position:fixed issue
/* NEW NAV function staticNav() {
    var ua = navigator.userAgent;
    if( ua.indexOf('Android') >= 0 ) {
      var androidversion = parseFloat(ua.slice(ua.indexOf('Android')+8)); 
      if (androidversion <= 2.3) {
        $topnav.css('position','absolute');
        $nav.css('position','absolute');
        $nav.css('height','135%');
      }
    }
  }
  staticNav();*/

  //Fallback for close icon on mobile devices that do not support csstransforms3d
/* NEW NAV if (!Modernizr.csstransforms3d) {
    $('.xxx').html('').addClass('close-icon-fallback');
    $nav.hide();
  }*/


  function footerSize() {
    var ftrH = $('footer').height()-15;
    $('.footer-space').css({
      'height' : ftrH-1
    });
  }

  if ($('.loader').length) {
    //console.log('loader');
    if (typeof Pace != 'undefined') {
      Pace.on('hide', function(){
        hideLoader();
      });
      setTimeout(function() {
        hideLoader(); // Kills loader after 5 seconds no matter what
      },5000);
    }
  }

  function heroParallax() {
    var sPos = $window.scrollTop();
    var hero = $('.hero-parallax .wrap');
    if (!Modernizr.touch) {
      hero.css({ 'transform' : 'translate3d(0, '+sPos*(0.5)+'px, 0)' });
      hero.find('.hero-inner').css({ 'transform' : 'translate3d(0, '+(-sPos/10)+'px, 0)' });
      $('.content').css({ 'z-index' : '1' });
    }
  }
  heroParallax();

  $window.scroll(function() {
    heroParallax();
  });
  
  var checkHome = function(){
    if (urlPath != '/'){
      return false;
    } else {
      return true;
    }
  };

  /*function goHomeAnimation(){
    new TimelineLite({ repeat: -1, delay: '0' })
    .staggerTo(homeAnimationContent, 0, { visibility: 'visible' }, duration, 0)
    .staggerTo(homeAnimationContent.not(homeAnimationContent.last()), 0, { visibility: 'hidden', immediateRender: false }, duration, duration)
    .set({}, {}, '+='+duration);
  }*/

  // Will move to Intro method
  /*  NEW NAV$('#video').bind('ended', function(){
    $body.removeClass('stop-scrolling').scrollTop();
    intro.loadHome();
  });
*/

  if ($body.hasClass('marketo-noscroll')) {
    $('html,body').scrollTop(0);
  }

  /* Main Functions */

  /* Text Animations for the First Panel on Each Page */
  var homeHero = {

    $homePanel: $('.home1, .home1 .wrap'),
    $homeHero: $('.home-hero'),

    resize: function() {
      this.homeHeight = $(window).height();
      this.heroHeight = $('.hero-content').height();
      this.$homePanel.css('height', this.homeHeight);
      //this.$homeHero.css('padding-top', ((this.homeHeight/2) - 92));
      footerSize();
      $error.height($(window).height());
    },

    init: function() {
      homeHero.resize();
      $(window).resize(function() {
        homeHero.resize();
      });
    }
  },

  /* Displays the top navigation after scroll, except for the home page */
 /*  NEW NAV topNav = {
    
  $hamburger: $('.hamburger'),
    $logo: $('.logo img'),

    display: function() {
      $topnav.addClass('display-nav');
      this.$hamburger.addClass('display-nav');
      this.$logo.attr('src', '/assets/images/global/logo.png');
    },

    fade: function() {
      $topnav.removeClass('display-nav');
      this.$hamburger.removeClass('display-nav');
      this.$logo.attr('src', '/assets/images/global/logo_white.png');
    },

    bindActions: function() {

        /*NEW NAV var visible;
        function navScroll() {
          if ($window.scrollTop() < 1 && !Modernizr.touch) {
            if (visible) {
              topNav.fade();
              visible = false;
              $('.hero-scroll').show();
            }
          }
          else if (!visible) {
            topNav.display();
            visible = true;
            $('.hero-scroll').hide();
          }
        }

        navScroll();

        $window.scroll(function() {
          NEW NAV navScroll();
          heroParallax();
        });
    },

    init: function() {
      this.bindActions();
    }
    
  },*/

  /* Slides the main navigation menu out and back */
/* NEW NAV  slideMenu = {

    $linkOveride: $('nav a').not('.nav-social a').not('[href*="@"]'),
    closed: true,
    speed: 0.35,

    isClosed: function () {
      return this.closed;
    },

    animateLinks: function() {
      $navOverlay.addClass('nav-overlay-display'); //adds overlay

        $navLink.each(function(i) {
          var link = $(this);

          if (!Modernizr.csstransitions) {
            TweenMax.to(link, 0.35, {className:'+=link-animate', ease:Linear.easeIn, delay:0.05*i});
          }
          else {
            setTimeout(function() {  
              link.addClass('link-animate');
            }, 50*i);
          }
        });    
    },

    open: function() {
      $topnav.addClass('nav-override'); //hides white nav
      TweenMax.to('nav', this.speed, {x:-320, ease:Linear.ease, onComplete:slideMenu.animateLinks()});
      //Fallback for mobile devices that do not support transform3d
      if (!Modernizr.csstransforms3d) {
        $nav.show();
        $nav.animate({
          right: '0'
        }, 200);
        TweenMax.to('nav', this.speed, {x:0, ease:Linear.ease, onComplete:slideMenu.animateLinks()});
      }
      this.closed = false;
    },

    close: function() {
      $topnav.removeClass('nav-override');
      $navOverlay.removeClass('nav-overlay-display');
      TweenMax.to('nav', this.speed, {x:0, ease:Linear.ease});
      TweenMax.to($navLink, 0.1, {className:'-=link-animate', ease:Linear.ease});
      //Fallback for mobile devices that do not support transform3d
      if (!Modernizr.csstransforms3d) {
        $nav.animate({
          right: '-320px'
        }, 200);
        $nav.hide();
      }
      this.closed = true;
    },

    bindActions: function() {
      // Open or Close Menu
      $target.on('click', function() {
        return (slideMenu.isClosed()) ? slideMenu.open() : slideMenu.close();
      });


      // Overide menu links so that the menu closes first
      this.$linkOveride.on('click', function(e) {

        function setLocation () {
          if ((clickedPage == currLocation) && ($this.hash)) {
              scrollToAnchor($this.hash.replace('#',''));
          }
          else {
            window.location.replace($this.href);
          }
        }

        
        slideMenu.close();
        //e.preventDefault();
        var $this = this;
        var currLocation = window.location.pathname.replace('/', ''); //for ie9
        var clickedPage = $this.pathname.replace('/', ''); //for ie9
        //setLocation();
      });

      // Closes the menu if the user scrolls over the content or clicks it
      $navOverlay.on('click mousewheel DOMMouseScroll', function() {
        if (!(slideMenu.isClosed())) {
          slideMenu.close();
        }
      });
    },

    init: function() {
      slideMenu.bindActions();
    }
      
  },*/

  /* Plays the intro video on the first visit to the site*/
  intro = {
    $home: $('.header, .home, footer'),
    $video: $('.video-bg'),
    disableVideo:  true,

/*  setCookie: function() {
      
    },*/

    hideHome: function() {
      this.$home.hide();
    },

    loadHome: function() {
      this.$home.fadeIn(1);
      this.$video.fadeOut(2000);
    },

    loadVideo: function() {
      $body.addClass('stop-scrolling');
    },
    
    removeVideo: function(){
      this.$video.remove();
      intro.loadHome();
    },

    init: function() {
      
      if (this.disableVideo){
        intro.removeVideo();
      }
      else {
        //intro.hideHome();
        intro.loadVideo();
        //intro.setCookie();
      }
    }
  };

/* NEW NAV  if (Modernizr.touch) {
    $('.side-nav').touchSwipeRight(function() {
      slideMenu.close();
    });
  }*/

  //Fallback for mobile devices that do not support SVG
  function svgFallback() {
    $('.why-data[data-id=dial1]').addClass('dial1-fallback');
    $('.why-data[data-id=dial1] .data-text .data-text-value').text('86');

    $('.why-data[data-id=dial2]').addClass('dial2-fallback');
    $('.why-data[data-id=dial2] .data-text .data-text-value').text('70');

    $('.why-data[data-id=dial3]').addClass('dial3-fallback');
    $('.why-data[data-id=dial3] .data-text .data-text-value').text('92');

    $('.why-data[data-id=dial4]').addClass('dial4-fallback');
    $('.why-data[data-id=dial4] .data-text .data-text-value').text('62');
  }

  if (!Modernizr.svg) {
    svgFallback();
  }


  $('.button-cs').waypoint(function() {
    $(this).find('.button-text').addClass('button-text-show');
  }, {
    offset: '75%',
    triggerOnce: true
  });

  // Leadership
  var leadership = $('#leadership');
  // var count = $('.leader-wrap').length;
  // for(var c = 0; c<=count;c+=2) {
  //   $('#leadership .leader-wrap').slice(c, c+2).wrapAll('<div class="leader-panel" />');
  // }

  leadership.owlCarousel({
    items: 5,
    margin: 10,
    loop: false,
    nav:true,
    dots: false,
    navText: '',
    slideBy: 5,
    navSpeed: 150,
    dotsSpeed: 150,
    dragEndSpeed: 150,
    responsive: {
      0: {
        items: 2,
        stagePadding: 20,
        center: true,
        loop: true
      },
      480: {
        items: 3,
        stagePadding: 50,
        center: true,
        loop: true
      },
      768: { 
        items: 3,
        slideBy: 3,
        center: false
      },
      1000: {
        items: 5,
        slideBy: 5,
        center: false
      },
      1025: {
        touchDrag: true,
        mouseDrag: false,
        pullDrag: false
      }
    }
  });

  $('#leadership .owl-prev').addClass('nav-hidden');
  leadership.on('translated.owl.carousel', function() {
    var leaderFirst = $('#leadership .owl-item:first-child');
    var leaderLast = $('#leadership .owl-item:last-child');
    var prev = $('.owl-prev');
    var next = $('.owl-next');
    if (leaderFirst.hasClass('active')) {
      prev.addClass('nav-hidden');
    }
    else {
      prev.removeClass('nav-hidden');
    }
    if (leaderLast.hasClass('active')) {
      next.addClass('nav-hidden');
    }
    else {
      next.removeClass('nav-hidden');
    }
  });

  var quotes = $('.quotes');
  quotes.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav:true,
    navText: '',
    autoplayTimeout: 10000,
    autoplaySpeed: 750,
    navSpeed: 750,
    dragEndSpeed: 300,
    dotsSpeed: 1000,
    autoplayHoverPause: true
  });

  //var  curSecNavItem = $('.section-nav .owl-item').not('.cloned').find('.section-nav-current').parent().index();
  var sectionNav = $('.section-nav ul');
  sectionNav.owlCarousel({
    items: 4,
    autoplay: false,
    nav: false,
    navText: '',
    navSpeed: 500,
    dragEndSpeed: 300,
    stagePadding: 0,
    margin: 1,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        center: true,
        loop: true
      },
      480: {
        items: 2,
        stagePadding: 0,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        center: true,
        loop: true
      },
      768: {
        items: 4,
        stagePadding: 0,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false,
        loop: false
      }
    }
  });
  var secNavCloned = $('.section-nav .cloned').length/2;
  var secNavCurItem = $('.section-nav .owl-item').not('.cloned').find('.section-nav-current').parent().index()-secNavCloned;
  sectionNav.trigger('to.owl.carousel',[secNavCurItem]);

  var caseStudyNav = $('.section-subnav ul');
  caseStudyNav.owlCarousel({
    items: 6,
    autoplay: false,
    nav: false,
    navText: '',
    navSpeed: 500,
    dragEndSpeed: 300,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 80,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        center: true,
        loop: true
      },
      400: {
        items: 2,
        stagePadding: 0,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        center: true,
        loop: true
      },
      480: {
        items: 2,
        stagePadding: 20,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        center: true,
        loop: true
      },
      600: {
        items: 3,
        stagePadding: 80,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        center: true,
        loop: true
      },
      768: {
        items: 6,
        stagePadding: 0,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false,
        loop: false
      }
    }
  });
  var caseNavCloned = $('.section-subnav .cloned').length/2;
  var caseNavCurItem = $('.section-subnav .owl-item').not('.cloned').find('.section-subnav-current').parent().index()-caseNavCloned;
  caseStudyNav.trigger('to.owl.carousel',[caseNavCurItem]);


  // Scroll to anchor global
  function scrollToAnchor(aid){
    var anchor = $('[rel="'+ aid +'"]');
    $('html,body').animate({scrollTop: anchor.offset().top-80}, 400);
  }

  // Scroll to anchor on click
  $('[href^="#"][href!="#"]').click(function() {
    var link = $(this).attr('href').replace('#','');
    scrollToAnchor(link);
    return false;
  });

  // Scroll to anchor on page load
  var myLink = document.location.toString();
  if (myLink.match('#')) {
    var link = location.hash.replace('#','');
    setTimeout(function() {
      scrollToAnchor(link);
    },500);
  }

  // Overlay
  //$.ajaxSetup({cache:false});
  
  var overlay = $('.overlay'),
  ovContent = $('.overlay-content'),
  ovLightbox = $('.overlay-lightbox');

  $.fn.image = function(src, f) {
    return this.each(function() {
      var i = new Image();
      i.src = src;
      i.onload = f;
      this.appendChild(i);
    });
  };

  // Bio Overlay
  $('.overlay-link').click(function() {
    var ovTarget = $(this).next('.overlay-target').html();
    //console.log(ovTarget);
    if ($(this).hasClass('overlay-slideshow')) {
      $(this).addClass('overlay-slideshow-current');
      $('.overlay-nextprev').show();
    }
    ovContent.show().html(ovTarget);
      ovLoad();
      $('.overlay-content').addClass('overlay-content-show').fitVids();
    return false;
  });

  // Overlay Slideshow
  $('.overlay-nextprev').click(function() {
    if ($('.overlay-content').hasClass('overlay-content-anim')===false) {
      var curItem = $('.overlay-slideshow-current'),
      curOrder = parseInt(curItem.attr('data-order')),
      next = curOrder + 1,
      prev = curOrder - 1,
      totalItems = curItem.closest('.slideshow').find('.owl-item').not('.cloned').find('.overlay-slideshow').length;
      
      curItem.removeClass('overlay-slideshow-current');
      $('.overlay-content').addClass('overlay-content-anim');
      $('.overlay-nextprev').css({ 'z-index' : '-1' });

      setTimeout(function() {
        $('.overlay-content').removeClass('overlay-content-anim overlay-content-anim-rl overlay-content-anim-lr overlay-content-show');
        $('.overlay-nextprev').css({ 'z-index' : '1' });
      },200);
      
      if ($(this).hasClass('overlay-next')) {
        setTimeout(function() {
          if (curOrder===totalItems) {
            $('.overlay-slideshow[data-order="1"]').trigger('click');
          }
          else {
            $('.overlay-slideshow[data-order="'+next+'"]').trigger('click');
          }
        },201);
      }
      if ($(this).hasClass('overlay-prev')) {
        setTimeout(function() {
          if (curOrder===1) {
            $('.overlay-slideshow[data-order="'+totalItems+'"]').trigger('click');
          }
          else {
            $('.overlay-slideshow[data-order="'+prev+'"]').trigger('click');
          }
        },201);
      }
    }
  });

  if (Modernizr.touch) {
    $('.overlay-content').touchSwipeLeft(function() {
      $('.overlay-content').addClass('overlay-content-anim-rl');
      $('.overlay-next').trigger('click');
    });

    $('.overlay-content').touchSwipeRight(function() {
      $('.overlay-content').addClass('overlay-content-anim-lr');
      $('.overlay-prev').trigger('click');
    });
  }

  // Overlay Gallery - Grid Layout
  $('.overlay-gallery').click(function() {
    ovLoad();
    ovContent.show().addClass('overlay-gallery-content');
    ovFlickr($(this));
    return false;
  });

  function ovFlickr(ovTag) {
    var tag = $(ovTag).attr('rel');
    $('.overlay-gallery-content').prepend('<div class="overlay-gallery-column"></div>');
    $('.overlay-gallery-content').jflickrfeed({
      qstrings: {
        limit: 20,
        id: '69406908@N06',
        tags: ''+tag+''
      },
      itemTemplate: '<div class="overlay-gallery-item" style="background-image: url({{image_b}});"></div>'
    }, function() {
      animGallery();
      ovGalleryMasonry();
    });
  }

  function animGallery() {
    var count = 0;
    var value = 21;
    function showGallery() {
      count++;
      $('.overlay-gallery-content div:eq('+(count-1)+')').css({ 'opacity' : '1' });
      if (count==value) {
        clearInterval(setGallery);
      }
    }
    var setGallery = setInterval(showGallery, 100);
  }

  function ovLoad() {
    overlay.css({ 'display' : 'block' });
    setTimeout(function() {
      $('.top-nav').css({ 'display' : 'none' });
      overlay.addClass('overlay-open');
    },100);
  }

  function ovGalleryMasonry() {
    var ovMasonry = $('.overlay-gallery-content').masonry({
      transitionDuration: '0.75s',
      itemSelector: '.overlay-gallery-item',
      columnWidth: '.overlay-gallery-column'
      });
    $('.overlay-gallery-content div').click(function() {
      $(this).toggleClass('overlay-gallery-lg-img');
      setTimeout(function(){
        ovMasonry.masonry();
      },350);
    });
  }

  $('.overlay-close, .overlay-close *, .overlay, .overlay-content, .overlay-inner, .overlay-lightbox').click(function(e) {
    if (e.target === this) {
      overlay.removeClass('overlay-open');
      $('.top-nav').css({ 'display' : 'block' });
      setTimeout(function() {
        overlay.css({ 'display' : 'none' });
        /***** Used for Tech page
        $('.overlay-gallery-content').masonry('destroy');
        *****/
        ovContent.html('').hide().removeClass('overlay-gallery-content').removeAttr('style');
        ovLightbox.html('').hide();
        $('.overlay-nextprev').hide();
        $('.overlay-slideshow-current').removeClass('overlay-slideshow-current');
      },500);
    }
  });

  // Tiny URL Select
  $('.tinyurl').click(function() {
    $(this).children('input').select();
  });

  // Footer toggle
  $('.footer-toggle').click(function() {
    var footerToggle = $(this),
    toggleIcon = footerToggle.find('.icon'),
    footerFeeds = $('.footer-feeds'),
    feedWrap = $('.footer-feeds .footer-wrap'),
    footerHt = feedWrap.height(),
    scrollPos = $(window).scrollTop();
    TweenMax.to(toggleIcon, 0.5, {opacity: '0', ease:Power3.easeOut});
    if (footerToggle.hasClass('footer-toggle-close')) {
      TweenMax.to(feedWrap, 0.5, {opacity: 0, ease:Power3.easeOut, onComplete: function() {
        TweenMax.to(footerFeeds, 0.75, {height: '0px', ease:Power3.easeOut, onComplete: function() {
          footerToggle.removeClass('footer-toggle-close');
          footerToggle.find('.icon').removeClass('icon-down');
          footerToggle.find('.icon').addClass('icon-up');
          TweenMax.to(toggleIcon, 0.5, {opacity: '1', ease:Power3.easeOut});
        }});
      }});
    }
    else {
      $('html, body').animate({scrollTop: scrollPos+footerHt},750);
      TweenMax.to(footerFeeds, 0.75, {height: footerHt, ease:Power3.easeOut, onComplete: function() {
        TweenMax.to(feedWrap, 1, {opacity: 1, ease:Power3.easeOut});
        footerToggle.addClass('footer-toggle-close');
        footerToggle.find('.icon').removeClass('icon-up');
        footerToggle.find('.icon').addClass('icon-down');
          TweenMax.to(toggleIcon, 0.5, {opacity: '1', ease:Power3.easeOut});
      }});
    }
  });

  //CASE STUDY HOME PAGE
  $('.why-data .data-dial svg:first-child path:first-child').attr('stroke-dasharray','2,3');

  $window.scroll(function() {
    
    var vans = $('.cta-panel-case-study');
    if ($window.scrollTop() > 930) {
      vans.removeClass('hidden');
    }

    else {
      vans.addClass('hidden');
    }
  });

  var $error = $('.error-hero');
  //var $profile = $('.profile-content');
  $error.height($(window).height());
  //$profile.height($(window).height());

  $('article, .video-container').fitVids();

  // Data Count Up
  /*$('.data-count-up').waypoint(function() {
    var dataItem = $(this),
    n = dataItem.attr('data-target-value'),
    m = 1,
    i = 1000/n;

    var dataCountText = setInterval(function() {
      dataInterval();
    }, i);

    function dataInterval() {
      m += 1;
      dataItem.find('span').html(m);
      if(m==n) {            
        window.clearInterval(dataCountText);
      }
    }
  }, {
    offset: '75%',
    triggerOnce: true
  });
*/

  $('.data-count-up').waypoint(function() {
    var dataItem = $(this).find('.odometer'),
    n = dataItem.attr('data-target-value');

    window.odometerOptions = {
      theme: 'default',
      value: n,
      duration: 500
    };
    dataItem.html(n);
  }, {
    offset: '75%',
    triggerOnce: true
  });



  // $('.careers-list').load('/careers/getCriteria.php #latest-posts');

  function ice() {
    $('.ice-node').each(function() {
      var num = $(this).index();
      $(this).addClass('ice-node'+num);
      $('.ice-item .ice-line').addClass('ice-line-show');
    });
  }

  $('.ice-stage').waypoint(function() {
    ice();
  }, {
    offset: '50%',
    triggerOnce: true
  });

  function iceExp() {
    $('.exp-item-open li').each(function() {
      var num = $(this).index();
      var time = num*100;
      var item = $(this);
      setTimeout(function(){
        item.addClass('exp-item-open-show');
      }, time);
    });
    setTimeout(function() {
      $('.exp-list-highlight').addClass('exp-list-highlight-show');
      $('.exp-list-ice').addClass('exp-list-ice-show');
    }, 1000);
  }
  
  $('#exp-stage').waypoint(function() {
    iceExp();
  }, {
    offset: '50%',
    triggerOnce: true
  });



// Browser Update
var $buoop = {vs:{i:8,f:15,o:12.1,s:5.1}};
$buoop.ol = window.onload;
window.onload=function() {
  try {if ($buoop.ol) $buoop.ol();}catch (e) {}
  var e = document.createElement('script');
  e.setAttribute('type', 'text/javascript');
  e.setAttribute('src', '//browser-update.org/update.js');
  document.body.appendChild(e);
};


// End Document Ready
})(window, document, jQuery);

