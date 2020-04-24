/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import PodcastEntry from './PodcastEntry.jsx';

const Podcast = ({ podcasts, play }) => (
  <div>
    {podcasts.map((podcast) => <PodcastEntry key={podcast.id} podcast={podcast} play={play} />)}
  </div>
);

export default Podcast;
