/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Button, Card, CardContent, makeStyles, Typography, Grid,
} from '@material-ui/core';
import { Howl } from 'howler';

const useStyles = makeStyles({
  root: {
    midWidth: 500,
    maxWidth: 800,
  },
  pos: {
    marginBottom: 12,
  },
});

// needs to be attached to this file, play function
const play = () => {
  const sound = new Howl({
    // src: [url[0]],
    autoplay: true,
    // there is an issue with html5 and cors that doesn't let it play without fully loading
    // html5: true,
    onload() {
      // do something to the UI when this fires to signify that it's done
      console.log('done loading');
    },
  });
  //   Sounds.play();
  console.log('sound');
};

// move to another server file

const PodcastEntry = () => {
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
            Title: 'something dynamic'
          </Typography>
          <Button onClick={play}>
            Play item
          </Button>
          {/* here goes the stream for episodes for each podcast */}
        </CardContent>
      </Card>
    </Grid>
  );
};


export default PodcastEntry;
