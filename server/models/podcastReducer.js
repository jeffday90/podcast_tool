const modelledPodcasts = [];
let podcasts = [];

const combinePodcasts = (podcast) => {
  podcast.sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate));
  modelledPodcasts.push(podcast);
  if (modelledPodcasts.length === 3) {
    podcasts = modelledPodcasts;
  }
};


module.exports = {
  combinePodcasts, podcasts,
};
