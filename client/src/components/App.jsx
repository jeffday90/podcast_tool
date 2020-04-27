/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Typography, Card, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import Axios from 'axios';
// import { Howl } from 'howler';
import ReactHowler from 'react-howler';

import Podcast from './Podcast.jsx';
import Title from './Title.jsx';
import withRoot from '../withRoot.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [{
        title: 'Yeah, But Still',
        episodes: [],
        thumbnail: '',
      },
      {
        title: 'TrueAnon',
        episodes: [],
        thumbnail: '',
      },
      {
        title: 'Chapo Trap House',
        episodes: [],
        thumbnail: '',
      }],
      loaded: false,
      isPlaying: false,
      podcastURL: '',
    };
    this.player = this.player.bind(this);
  }

  async componentDidMount() {
    // bug: does the podcast.data array always organize in this order?
    // maybe need to figure out a method that properly matches
    Axios.get('/podcasts')
      .then((podcast) => {
        const newState = [{
          title: 'TrueAnon',
          episodes: podcast.data[0],
          thumbnail: '',
          id: 1,
        },
        {
          title: 'Chapo Trap House',
          episodes: podcast.data[1],
          thumbnail: '',
          id: 2,
        },
        {
          title: 'Yeah, But Still',
          episodes: podcast.data[2],
          thumbnail: '',
          id: 3,
        }];
        this.setState({
          podcasts: newState,
          loaded: true,
        });
      });
  }

  player(url) {
    const { isPlaying, podcastURL } = this.state;

    // create proxy url => maybe need to rework as HTML5 doesn't work with this
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const concatenatedURL = CORS_PROXY + url;

    // check if the passed in URL is the same as the current (so this would be play)
    const alreadyPlaying = (podcastURL === concatenatedURL);

    if (!isPlaying && podcastURL === '') {
      // nothing has played yet and there is no link
      this.setState({
        isPlaying: true,
        podcastURL: concatenatedURL,
      });
    } else if (isPlaying && alreadyPlaying) {
      // playing and already been clicked (pause)
      this.setState({
        isPlaying: false,
      });
    } else if (!isPlaying && alreadyPlaying) {
      // isn't playing and same url
      this.setState({
        isPlaying: true,
      });
    } else if (!isPlaying && !alreadyPlaying) {
      // isn't playing and new URL
      this.setState({
        isPlaying: false,
        podcastURL: concatenatedURL,
      });
    }
  }


  render() {
    const {
      podcasts, loaded, podcastURL, isPlaying,
    } = this.state;
    return (
      <div>
        <ReactHowler
          src={[podcastURL]}
          playing={isPlaying}
          // html5
        />
        { !loaded
          && (
            <OpenCard>
              <Typography>
                shhh... don&apos;t tell anyone....
              </Typography>
              <Loading />
            </OpenCard>
          )}
        { loaded
          && (
            <Podcast podcasts={podcasts} player={this.player} isPlaying={isPlaying} />
          )}
      </div>
    );
  }
}

const OpenCard = styled(Card)`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 20vh;
  text-align: center;
  padding-top: 5vh;
  font-size: 1.5em;
  padding-bottom: 10vh;
`;

const Loading = styled(CircularProgress)`
  margin-top: 20vh;
  color: black;
`;

// title: "Episode 63: Exiled on Main Street"
// link: "https://www.patreon.com/posts/episode-63-on-36359715"
// pubDate: "Fri, 24 Apr 2020 19:05:28 GMT"
// enclosure: {url: "https://c10.patreonusercontent.com/3/eyJhIjoxLCJwI…sh=B1APP72M_ZzWg6u_OOKaLqdjS5pP6w3mLAuNoYOihMQ%3D", length: "85665776", type: "audio/mpeg"}
// content: "<p>TrueAnon is joined by Mark Ames of the War Nerd and Exiled to talk social collapse,
// Russiagate, Shock Therapy and Comrade Putin</p>"
// contentSnippet: "TrueAnon is joined by Mark Ames of the War
// Nerd and Exiled to talk social collapse, Russiagate, Shock Therapy and Comrade Putin"
// guid: "36359715"
// isoDate: "2020-04-24T19:05:28.000Z"
// itunes:

// TODO LIST:
// create UI
// format on page with header and
// other details that make it look good :)
// each podcast
// picture
// title
// list
// player

// DONE
// figure out how to attach RSS feed that updates
// fetch RSS feed whenever app opens, this will always have
// RSS
// figure out the data model that organizes podcast by release date
// can't use ID, use the release date
// keep the player in this layer?

export default withRoot(App);
