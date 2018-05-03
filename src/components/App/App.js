import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Desire',
          artist: 'Kool',
          album: 'Studio  Tracks',
          id: 3
        },
        {
          name: 'When We are alone',
          artist: 'Kool',
          album: 'Studio  Tracks',
          id: 7
        }
      ],
      playlistName: 'HipHop',
      playlistTracks: [
        {
          name: 'When We are alone',
          artist: 'Kool',
          album: 'Studio  Tracks',
          id: 7
        }
      ],
      isRemoval: false
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({
        playlistTracks: this.state.playlistTracks.push(track)
      })
    }
  }

  removeTrack(track) {
    this.state.playlistTracks.find(track.id);
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(track)
    })
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
