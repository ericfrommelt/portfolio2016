// Toggle mobile nav
  var $menuBtn = $('#menu-button');
  var $menuWrap = $('#menu-wrapper');
  var $burgerTop = $('div.burger-top');
  var $burgerMiddle = $('div.burger-middle');
  var $burgerBottom = $('div.burger-bottom');
  var $menuItem = $('#navlist-mobile a');
  var menuOpen = false;

  function toggleMenu() {
    if (menuOpen === false) {
      $menuWrap.addClass('menu-open').removeClass('menu-closed');
      $burgerTop.addClass('burger-open').removeClass('burger-closed');
      $burgerMiddle.addClass('burger-open').removeClass('burger-closed');
      $burgerBottom.addClass('burger-open').removeClass('burger-closed');
      menuOpen = true;
    } else if (menuOpen === true) {
      $menuWrap.addClass('menu-closed').removeClass('menu-open');
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
