
// Dark Theme Cookie //

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


$(document).ready(function () {

  var theme;
  var sysDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

  // console.log(sysDarkTheme.matches);
  if (sysDarkTheme.matches) {
    if ( getCookie('theme') ) {
      var theme = getCookie('theme');
      $('body').attr('class',theme + '-theme');
    } else {
      $('body').attr('class','dark-theme');
    }
  }

  $('.dark-mode-toggle').click(function() {

    if ($('body').hasClass('dark-theme')) {
      theme = 'light';
    } else {
      theme = 'dark';
    }
    setCookie('theme', theme, 30);
    // document.cookie = 'theme=' + theme + ';path=/';
    location.reload();
  })

  if ($(window).width() > 991) {
    $('.navbar .d-menu').hover(function() {
      $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
      $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
    });
  }

  var lastSection = $('section:last-of-type');

  if ($(lastSection).hasClass('testimonial-section')) {
    $(lastSection).addClass('mb-0');
  }

  if ($('.testimonial-section').next().hasClass('callToAction-section')) {
    $('.testimonial-section').addClass('mb-0');
  }
});
