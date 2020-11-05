$(document).ready(function(){

  $('.resource-gallery').each( function() {
    var pic = $(this);

    getItems = function() {
      var items = [];

      pic.find('.gallery-item').each(function() {
        var href   = $(this).attr('href'),
            size   = $(this).data('size').split('x'),
            width  = size[0],
            height = size[1];

            var item = {
              src : href,
              w   : width,
              h   : height
            };

            items.push(item);
      });
      return items;
    };
    // build items array
    var items = getItems();

    var pswpElement = document.querySelectorAll('.pswp')[0];

    pic.find('.gallery-item').on('click', function(event) {
      event.preventDefault();

      var index = $(this).index();
      var options = {
        index: index,
        bgOpacity: 0.85,
        showHideOpacity: true // start at first slide
      };

      // Initializes and opens PhotoSwipe
      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    });
  });

});
