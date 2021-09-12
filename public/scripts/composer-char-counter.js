$(document).ready(function() {
  // $("#tweet-text").text(maxChar);
  // console.log(maxChar);
  $('#tweet-text').on('keyup', function() {
    const maxChar = 140;
    // const tweet = $('#tweet-text').val();
    const tweet = $(this).val().length;
    console.log($(this).parent().get(0));

    // const textCounter = tweet.length;
    // if(maxChar - textCounter < 0) {
      if(maxChar - tweet < 0) {
        $(this).parent().find('.counter').css("color", "red");
      // $('.counter').css("color", "red");
      }
      else {
        $(this).parent().find('.counter').css("color", "#545149");
        // $('.counter').css("color", "#545149");
      }
      // $(this).parent().get().counter.value = (maxChar-tweet);
      $(this).parent().find('.counter').text(maxChar-tweet);
    // $('.counter').text(maxChar-textCounter);
  });
});