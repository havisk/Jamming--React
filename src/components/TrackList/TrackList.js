import React, {Component} from 'react';

import './TackList.css';

import Track from '../Track/Track';




class TrackList extends Component {
  render(){
    return(
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return (
            <Track key={track.id}
                   name={track.name}
                   track={track}
                   artist={track.artist}
                   album={track.album}
                   onAdd={this.props.onAdd}
                   onRemove={this.props.onRemove}
                   isRemoval ={this.props.isRemoval}
            />
            )})
        }
      </div>
    );
  }
}

export default TrackList;