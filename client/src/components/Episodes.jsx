/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import EpisodeEntry from './EpisodesEntry.jsx';

const Episodes = ({ episodes, playPlease }) => (
  <div>
    {episodes.map((episode) => (
      <EpisodeEntry
        key={episode.guid}
        title={episode.title}
        link={episode.enclosure.url}
        playPlease={playPlease}
      />
    ))}
  </div>
);

export default Episodes;
