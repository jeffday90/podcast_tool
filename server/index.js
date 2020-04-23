const express = require('express');
const path = require('path');
const Parser = require('rss-parser');
const RSSfeeds = require('./rssFeeds')
const model = require('./models/podcastReducer')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.listen(PORT, () => console.log('Listening on port: ' + PORT));

const url = [];
const parser = new Parser();

const grabPodcasts = (podcasts) => {
  podcasts.forEach((podcast) => {
    let links = [];
    let episodes = [];
    let totalEpisodes = [];

    let patreon = podcast.patreon_RSS
    let free = podcast.free_RSS
    links.push(patreon);
    links.push(free);

    links.forEach((link) => {
      (async () => {
        parser.parseURL(link, (err, feed) => {
          if (err) throw err;
          feed.items.forEach((entry) => {
            episodes.push(entry);
          });
          // TODO: refactor
          totalEpisodes.push(episodes)
          if (totalEpisodes.length === 2) {
              model.combinePodcasts(episodes);
          }
        });
      })();
    })
  })
};


grabPodcasts(RSSfeeds.RSSFeeds);
