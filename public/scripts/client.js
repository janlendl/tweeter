/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
  tweets.forEach((tweet) => {
    const $tempData = createTweetElement(tweet);
    $('#tweets-container').append($tempData);
  });
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  }

  const createTweetElement = function(tweet) {
  const timeFormat = timeago.format(tweet.created_at);
  let $tweet = /* Your code for creating the tweet element */
  `
  <article class="tweets-post">
  <header class="feed-header">
  <div class="profile-pic">
    <img src="${tweet.user.avatars}"/>
    <p class="profile-name">${tweet.user.name}</p>
  </div>
  <p class="profile-handle">${tweet.user.handle}</p>
  </header>
  <p class="post">${tweet.content.text}</p>
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

  renderTweets(data);

  const form = $(".submit-tweet");
  form.on('submit', function (event) {
    event.preventDefault();

    const serializeData = $(this).serialize();
    console.log('serialized data: ',serializeData);

    $.post('/tweets', serializeData)
    .then((resp) => {
     console.log(resp);
    });
  });

  // $(".submit-tweet").submit(function (event) {
  //   event.preventDefault();

  //   const form = $(this);

  //   $.ajax({
  //     url: '/tweets',
  //     type: 'POST',
  //     data: form.serialize(),
  //   }).then((data) => {
  //       console.log(data);
  //   });
  // });


});