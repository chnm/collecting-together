(function($) {
  $(document).ready(function() {
    var collectingForm = $('#collecting-together-form');
    if (collectingForm.length > 0) {
      var mobileToggle = $('<button class="toggle-form button" type="button" >Toggle filters</button>');
      collectingForm.before(mobileToggle);
      collectingForm.addClass('show');
      
      mobileToggle.click(function() {
        collectingForm.toggleClass('show');
      })
    }
  });
})(jQuery)