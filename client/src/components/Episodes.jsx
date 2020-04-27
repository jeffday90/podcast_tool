/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Button } from '@material-ui/core';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EpisodeEntry from './EpisodesEntry.jsx';

const Episodes = ({ episodes, player }) => (
  <div>
    {episodes.map((episode) => (
      <EpisodeEntry
        key={episode.guid}
        title={episode.title}
        link={episode.enclosure.url}
        // curious whether i need to pass down below func
        player={player}
      />
    ))}
  </div>
);

export default Episodes;
