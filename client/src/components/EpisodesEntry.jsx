/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
// import { Typography } from '@material-ui/core';

class EpisodesEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(link) {
    const { player } = this.props;
    player(link);
    this.setState({
      isPlaying: true,
    });
  }


  render() {
    const { title, link } = this.props;
    const { isPlaying } = this.state;
    return (
      <div>
        {title}
        {/* on click play link
    this method will be passed down from the app, where the play will be handled */}
        <Button>
          { !isPlaying && <PlayArrowIcon onClick={() => this.handleClick(link)} />}
          { isPlaying && <PauseIcon />}
        </Button>
      </div>
    );
  }
}

export default EpisodesEntry;
