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
import PauseIcon from '@material-ui/icons/Pause';
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

class PodcastEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(link) {
    const { player } = this.props;
    const { isPlaying } = this.state;

    player(link);

    if (!isPlaying) {
      this.setState({
        isPlaying: true,
      });
    } else {
      this.setState({
        isPlaying: false,
      });
    }
  }

  render() {
    const { isPlaying } = this.state;
    const { podcast, player } = this.props;
    // const classes = useStyles();
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Card>
          {/* // className={classes.root}> */}
          <CardContent>
            <Typography>
              {/* </Typography> color="primary" className={classes.title} variant="h5"> */}
              {podcast.title}
              <Button onClick={() => this.handleClick(podcast.episodes[0].enclosure.url)}>
                {!isPlaying
              && <PlayArrowIcon />}
                {isPlaying && <PauseIcon />}
              </Button>
            </Typography>
            <Episodes episodes={podcast.episodes} player={player} />
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default PodcastEntry;
