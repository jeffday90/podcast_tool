/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button, ListItem } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
// import { Typography } from '@material-ui/core';

class EpisodesEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isDisplayingEpisodeInfo: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showEpisodeInfo = this.showEpisodeInfo.bind(this);
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

  showEpisodeInfo() {
    const { isDisplayingEpisodeInfo } = this.state;
    this.setState({
      isDisplayingEpisodeInfo: !isDisplayingEpisodeInfo,
    });
  }

  render() {
    const { title, link, content } = this.props;
    const { isPlaying, isDisplayingEpisodeInfo } = this.state;
    return (
      <EpisodeListItem onClick={() => this.showEpisodeInfo()}>
        {title}
        {/* on click play link
    this method will be passed down from the app, where the play will be handled */}
        <PlayPauseButton onClick={() => this.handleClick(link)}>
          { !isPlaying && <PlayArrowIcon />}
          { isPlaying && <PauseIcon />}
        </PlayPauseButton>
        {/* modal show the episode info as a pop up card
        also need to write a method to detect whether content has html */}
        { isDisplayingEpisodeInfo
          && <div>{content}</div>}
      </EpisodeListItem>
    );
  }
}

const EpisodeListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  margin-right: 2em;
`;

const PlayPauseButton = styled(Button)`
  /* align-content: right; */
`;


export default EpisodesEntry;
