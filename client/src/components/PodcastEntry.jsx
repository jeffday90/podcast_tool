/* eslint-disable prefer-destructuring */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Button, Card, CardContent, makeStyles, Typography, Grid,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Episodes from './Episodes.jsx';

const useStyles = makeStyles({
  root: {
    midWidth: 500,
    maxWidth: 800,
  },
  pos: {
    marginBottom: 12,
  },
});

const checkArray = (item) => Array.isArray(item);

// needs to be attached to this file, play function
// const play = (url) => {
//   const sound = new Howl({
//     src: [url],
//     autoplay: true,
//     // there is an issue with html5 and cors that doesn't let it play without fully loading
//     html5: true,
//     onload() {
//       // do something to the UI when this fires to signify that it's done
//       console.log('done loading');
//     },
//   });
//   //   Sounds.play();
//   console.log('sound');
// };

// move to another server file

const PodcastEntry = ({ podcast, play }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Card className={classes.root}>
        <CardContent>
          <Typography color="primary" className={classes.title} variant="h5">
            {podcast.title}
            {/* most recent episode */}
            <Button onClick={() => play(podcast.episodes[0].enclosure.url)}>
              <PlayArrowIcon />
            </Button>
          </Typography>
          {/* renders the title properly */}
          <Episodes episodes={podcast.episodes} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PodcastEntry;
