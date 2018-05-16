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
          name: 'jammin',
          artist: 'Kool',
          album: 'Studio  Tracks',
          id: 8
        },
        {
          name: 'When We are alone',
          artist: 'Kool',
          album: 'Studio  Tracks',
          id: 7
        }
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    // this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack = (track) => {
    // making copy of array
    let cPlayListTracks =[...this.state.playlistTracks];
     if(cPlayListTracks.find(savedTrack => savedTrack.id === track.id))  {
        return cPlayListTracks;
      } else {
       cPlayListTracks.push(track);

       this.setState({
            playlistTracks: cPlayListTracks
        });
     }
  };

  removeTrack = (track)=> {
    // making copy of array
    let cPlaylistTracks = [...this.state.playlistTracks];
    this.setState({playlistTracks: cPlaylistTracks.filter(element => element.id !== track.id)})
  }


  updatePlaylistName = (name) => this.setState({playlistName: name});

  // savePlaylist = () => {
  //   let trackURIs = [];
  // };

  search =(term) =>{
    console.log(term)
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />

            <Playlist
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
