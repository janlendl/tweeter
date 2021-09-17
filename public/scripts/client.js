/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {


  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const createTweetElement = () => {
    const timeFormat = timeago.format(tweetData.created_at);

    const markup = `
  <article class="tweets-post">
  <header class="feed-header">
  <div class="profile-pic">
    <img src="${tweetData.user.avatars}"/>
    <p class="profile-name">${tweetData.user.name}</p>
  </div>
  <p class="profile-handle">${tweetData.user.handle}</p>
  </header>
  <p class="post">${tweetData.content.text}</p>
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

    return markup;
  };


  const $tweet = createTweetElement(tweetData);




  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});