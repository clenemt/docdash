$(document).ready(function() {
  var filterInput = $(this).find('#filter input');
  var categoryLabel = $(this).find('.label.label-category');

  filterInput.on('input', function() {
     var val = $(this).val().toLowerCase();

     $('nav > ul:nth-of-type(2) ul li').each(function(index, el) {
       var li = $(el);
       var liText = li.text().toLowerCase();

       if (liText.indexOf(val) === -1) {
        li.hide();
       } else {
        li.show();
       }
    });
  });

  categoryLabel.on('click', function(event) {
    event.preventDefault();

    var category = $(this).text();
    filterInput.val(category).trigger('input');
  });
});