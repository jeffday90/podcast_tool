/* eslint-disable react/no-unused-state */
import React from 'react';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import Podcast from './Podcast.jsx';
import Title from './Title.jsx';
import withRoot from '../withRoot.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [{
        title: 'TrueAnon',
        episodes: [],
        thumbnail: '',
      },
      {
        title: 'Chapo Trap House',
        episodes: [],
        thumbnail: '',
      },
      {
        title: 'Yeah, But Still',
        episodes: [],
        thumbnail: '',
      }],
    };
    this.getPodcasts = this.getPodcasts.bind(this);
  }

  getPodcasts() {
    Axios.get('/podcasts')
      .then((podcast) => {
        const newState = [{
          title: 'TrueAnon',
          episodes: podcast.data[0],
          thumbnail: '',
        },
        {
          title: 'Chapo Trap House',
          episodes: podcast.data[1],
          thumbnail: '',
        },
        {
          title: 'Yeah, But Still',
          episodes: podcast.data[2],
          thumbnail: '',
        }];
        this.setState({
          podcasts: newState,
        });
      });
  }


  render() {
    const { podcasts } = this.state;
    return (
      <div>
        <Title />
        <Button onClick={this.getPodcasts}>
          {/* hide the load of the page here */}
          shhh... don&apos;t tell anyone....
        </Button>
        <Podcast podcasts={podcasts} />
      </div>
    );
  }
}

// TODO LIST:
// create UI
// format on page with header and
// other details that make it look good :)
// each podcast
// picture
// title
// list
// player

// RSS
// figure out the data model that organizes podcast by release date
// can't use ID, use the release date

// DONE
// figure out how to attach RSS feed that updates
// fetch RSS feed whenever app opens, this will always have


export default withRoot(App);
