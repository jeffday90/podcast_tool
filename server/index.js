const express = require('express');
const path = require('path');
const Parser = require('rss-parser');
const RSSfeeds = require('./rssFeeds')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.listen(PORT, () => console.log('Listening on port: ' + PORT));


const url = [];
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const parser = new Parser();

const grabPodcasts = (podcasts) => {
  // maybe break it up by podcast here
  let links = [];

  podcasts.forEach((podcast) => {
      links.push(podcast.patreon_RSS);
      links.push(podcast.free_RSS);
  })

  console.log(links);
  // (async () => {
  //   parser.parseURL(`${CORS_PROXY}http://feeds.soundcloud.com/users/soundcloud:users:211911700/sounds.rss`, (err, feed) => {
  //     if (err) throw err;
  //     feed.items.forEach((entry) => {
  //       console.log(entry);
  //     });
  //   });
  // })();
};

grabPodcasts(RSSfeeds.RSSFeeds);
