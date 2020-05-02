/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/alt-text */
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
            <img style={imageStyle} src={podcast.image} />
            <Title>{podcast.title}</Title>
            {/* </Typography> color="primary" className={classes.title} variant="h5"> */}
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

const imageStyle = {
  height: '12vh',
  width: '12vh',
  display: 'inline-block',
};

const PodcastCard = styled(Card)`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 2em;
`;

// need space between border and title/button
const TitleContainer = styled.div`
  margin-left: 2vh;
  margin-right: 2vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Typography)`
  font-size: 1.7em;
  justify-content: center;
  align-items: center;
  display: inline-block;
`;

const EpisodesContainer = styled.div`
  margin-top: 1em;
  /* overflow: 'auto'; */
  border: 2px solid black;
`;

const PlayPauseButton = styled(Button)`
  /* float: right; */
  /* margin-top: 10vh; */
  display: inline-block;
`;

export default PodcastEntry;
