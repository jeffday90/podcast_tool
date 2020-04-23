/* eslint-disable react/prop-types */
import React from 'react';
import PodcastEntry from './PodcastEntry.jsx';

const Podcast = ({ podcasts }) => (
  <div>
    {podcasts.map((podcast) => <PodcastEntry podcast={podcast} />)}
  </div>
);

export default Podcast;
