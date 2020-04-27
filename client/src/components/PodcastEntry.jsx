/* eslint-disable prefer-destructuring */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Button, Card, CardContent, makeStyles, Typography, Grid,
} from '@material-ui/core';
import styled from 'styled-components';
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
    // <Grid
    //   container
    //   spacing={0}
    //   direction="row"
    //   alignItems="center"
    //   style={{ minHeight: '100vh' }}
    // >
      <PodcastCard>
        {/* // className={classes.root}> */}
        <CardContent>
          <TitleContainer>
            {/* </Typography> color="primary" className={classes.title} variant="h5"> */}
            {podcast.title}
            <PlayPauseButton onClick={() => this.handleClick(podcast.episodes[0].enclosure.url)}>
              {!isPlaying
              && <PlayArrowIcon />}
              {isPlaying && <PauseIcon />}
            </PlayPauseButton>
          </TitleContainer>
          <EpisodesContainer style={{ maxHeight: 500, overflow: 'auto' }}>
            <Episodes episodes={podcast.episodes} player={player} />
          </EpisodesContainer>
        </CardContent>
      </PodcastCard>
    // </Grid>
    );
  }
}

const PodcastCard = styled(Card)`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 2em;
`;

// need space between border and title/button
const TitleContainer = styled.div`
  border-bottom: 2px solid black;
`;

const EpisodesContainer = styled.div`
  margin-top: 1em;
  /* overflow: 'auto'; */
`;

const PlayPauseButton = styled(Button)`
  text-align: right;
`;

export default PodcastEntry;
