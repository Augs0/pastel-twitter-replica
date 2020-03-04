const tweetsContainer = document.getElementById("tweets");

const initialTweets = [
  {
    avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    name: "Cyprian DeSouza",
    handle: "cypdz",
    date: Date.now() - 60000000,
    text: "Can't wait to see Arijit Singh tonight! #travel #india #concert"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    name: "Helene Lettisoir",
    handle: "helene-45",
    date: Date.now() - 20000000,
    text: "J'adore la cuisine du Japon! #tokyo #japan #travel"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Tristan Capola",
    handle: "capitantri",
    date: Date.now() - 9000000,
    text:
      "FIVE more days until I set off on my Interrail trip #travel #europe #interrail #france #spain #belgium #netherlands"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    name: "Jordan Gardener",
    handle: "jordi901",
    date: Date.now(),
    text: "In need of #travel ! When's my next holiday?"
  }
];

function showTweets() {
  for (let key of Object.keys(initialTweets)) {
    let tweet = initialTweets[key];
    createTweet(tweet);
  }
}

function createTweet(tweet) {
  //create a new list item
  const newTweet = document.createElement("li");
  //give it a class for styling
  newTweet.classList.add("tweet");
  //set the innerHTML for content
  // the wrapping of moment here is a super nice way to achieve the effect you wan - thanks to Florin for this tidbit!
  const newTweetinnerHTML = `<div class='imageContainer'>
<img class="image" src="${tweet.avatar}" alt="user profile picture"/>
</div>
<div class="userTweetInfo">
<span class="userName">${tweet.name}</span>
<span class="handle">${tweet.handle} ·</span>
<span class="date">${moment(tweet.date).fromNow()}
</span>
<p class="text">${tweet.text}</p>
</div>
`;
  // Set the above to fill each new tweet
  newTweet.innerHTML = newTweetinnerHTML;
  // attach the tweets to the container - prepend as we don't want them to appear AFTER the container
  tweetsContainer.prepend(newTweet);
}

showTweets();
