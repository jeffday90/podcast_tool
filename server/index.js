const express = require('express');
const path = require('path');
const Parser = require('rss-parser');
const RSSfeeds = require('./rssFeeds');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const sortedStreamsPodcasts = [];
const parser = new Parser();

const grabPodcasts = (podcasts) => {
  podcasts.forEach((podcast) => {
    const links = [];
    const episodes = [];
    let totalEpisodes = 0;

    const patreon = podcast.patreon_RSS;
    const free = podcast.free_RSS;
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
          totalEpisodes += 1;
          if (totalEpisodes === 2) {
            episodes.sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate));
            const podcastInfo = {
              id: podcast.id,
              title: podcast.title,
              episodes,
            };
            sortedStreamsPodcasts.push(podcastInfo);
          }
        });
      })();
    });
  });
};

app.get('/podcasts', (req, res) => {
  res.send(sortedStreamsPodcasts);
});

grabPodcasts(RSSfeeds.RSSFeeds);
