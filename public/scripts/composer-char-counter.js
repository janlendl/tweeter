$(document).ready(function() {
  $('#tweet-text').on('keyup', function() {
    const maxChar = 140;
    const tweet = $(this).val().length;

      if(maxChar - tweet < 0) {
        $(this).parent().find('.counter').css("color", "red");
      }
      else {
        $(this).parent().find('.counter').css("color", "#545149");
      }
      $(this).parent().find('.counter').text(maxChar-tweet);
  });
});