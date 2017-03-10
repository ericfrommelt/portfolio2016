// Toggle mobile nav
  var $menuBtn = $('#menu-button');
  var $menuWrap = $('#menu-wrapper');
  var $burgerTop = $('div.burger-top');
  var $burgerMiddle = $('div.burger-middle');
  var $burgerBottom = $('div.burger-bottom');
  var $menuItem = $('#navlist-mobile a');
  var $navsmall = $('#navigation-small');
  var menuOpen = false;

  function toggleMenu() {
    if (menuOpen === false) {
      $menuWrap.addClass('menu-open').removeClass('menu-closed');
      $navsmall.addClass('navsmall-open').removeClass('navsmall-closed');
      $burgerTop.addClass('burger-open').removeClass('burger-closed');
      $burgerMiddle.addClass('burger-open').removeClass('burger-closed');
      $burgerBottom.addClass('burger-open').removeClass('burger-closed');
      menuOpen = true;
    } else if (menuOpen === true) {
      $menuWrap.addClass('menu-closed').removeClass('menu-open');
      $navsmall.addClass('navsmall-closed').removeClass('navsmall-open');
      $burgerTop.addClass('burger-closed').removeClass('burger-open');
      $burgerMiddle.addClass('burger-closed').removeClass('burger-open');
      $burgerBottom.addClass('burger-closed').removeClass('burger-open');
      menuOpen = false;
    }
  }

  $menuBtn.on('click', function() {
    toggleMenu();
  });

  $menuItem.on('click', function() {
    toggleMenu();
  });

  // Scrolltop
  var pageFooterOffsetTop;
  var rightColumnHeight;
  var leftColumnHeight;
  var leftOffsetTop;
  var scrollheight;
  var leftRightOffset;

  $(window).on('load resize', function(e) {
    pageFooterOffsetTop = $('.site-footer').offset().top;
    rightColumnHeight = $('.work-info').outerHeight();
    leftColumnHeight = $('.images').outerHeight();
    leftOffsetTop = $('.images').offset().top;
    scrollheight = $('.site-footer').offset().top - $('.work-info').outerHeight() - $('.work-info').offset().top;
    leftRightOffset = leftOffsetTop + leftColumnHeight - rightColumnHeight;
    rightOffsetTop = $('.work-info').offset().top;
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() >= scrollheight) {
      $('.work-info').css({
        'position': 'absolute',
        'top': leftRightOffset
      });
    } else {
      $('.work-info').css({
        'position': 'fixed',
        'top': '18em'
      });
    }
  });

  // 1000
