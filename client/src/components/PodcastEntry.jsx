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

const PodcastEntry = ({ podcast, player }) => {
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
            <Button onClick={() => player(podcast.episodes[0].enclosure.url)}>
              <PlayArrowIcon />
            </Button>
          </Typography>
          <Episodes episodes={podcast.episodes} player={player} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PodcastEntry;
