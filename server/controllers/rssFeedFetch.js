import '@babel/polyfill';
import Parser from 'rss-parser';
import RSSfeeds from '../rssFeeds';
import podcastReducer from 

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const parser = new Parser();

const grabPodcasts = (podcastInfo) => {
  console.log(podcastInfo);
  // (async () => {
  //   parser.parseURL(`${CORS_PROXY}http://feeds.soundcloud.com/users/soundcloud:users:211911700/sounds.rss`, (err, feed) => {
  //     if (err) throw err;
  //     feed.items.forEach((entry) => {
  //       console.log(entry);
  //     });
  //   });
  // })();
};

grabPodcasts(RSSfeeds);

