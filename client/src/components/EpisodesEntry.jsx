/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import { Typography } from '@material-ui/core';

const EpisodesEntry = ({ title, link, playPlease }) => (
  <div>
    {title}
    {/* on click play link
    this method will be passed down from the app, where the play will be handled */}
    <Button>
      <PlayArrowIcon onClick={() => playPlease(link)} />
    </Button>
  </div>
);

export default EpisodesEntry;
