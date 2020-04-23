import React from 'react';
import Podcast from './Podcast.jsx';
import Title from './Title.jsx'
import withRoot from '../withRoot.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    };
  }

  // method that fetches every RSS feed (both patreon and free)
    // model the data in the server



  render() {
    return (
      <div>
        <Title />
        <Podcast />
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
