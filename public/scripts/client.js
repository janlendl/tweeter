/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // renders the tweet and add it to the element to be created
  const renderTweets = function(data) {
    data.forEach((tweet) => {
      const $tempData = createTweetElement(tweet);
      $('#tweets-container').prepend($tempData);
    });
    $('#tweet-text').val('');
    $('.counter').val('140');
  };

  const createTweetElement = function(tweet) {
    const timeFormat = timeago.format(tweet.created_at);
    let $tweet =
  `
  <article class="tweets-post">
  <header class="feed-header">
  <div class="profile-pic">
    <img src="${tweet.user.avatars}"/>
    <p class="profile-name">${tweet.user.name}</p>
  </div>
  <p class="profile-handle">${tweet.user.handle}</p>
  </header>
  <p class="post">${escape(tweet.content.text)}</p>
  <footer class="feed-footer">
    <p class="feed-age">${timeFormat}</p>
    <div class="footer-icons">
      <i class="fas fa-flag"></i>  
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
  </article>
  `;
    return $tweet;
  };

  $(".submit-tweet").submit(function(event) {
    if (!$.trim($('#tweet-text').val())) {
      $('.error').attr('style', 'visibility: visible');
      $('.error-message').text('Your tweet shouldn\'t be empty!');
      return false;
    }
    if ($('#tweet-text').val().length > 140) {
      $('.error').attr('style', 'visibility: visible');
      $('.error-message').text('Your tweet shouldn\'t exceed 140 characters!');
      return false;
    }

    $('.error').attr('style', 'visibility: hidden');
    event.preventDefault();

    const form = $(this);

    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: form.serialize(),
    }).then((res) => {
      loadTweets(res);
    });
  });

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'JSON',
      success: (res) => {
        renderTweets(res);
      },
      error: (error) => {
        alert("Error on tweet!", error);
      }
    });
  };
  loadTweets();
});