import React, {Component} from 'react';

import './TackList.css';

import Track from '../Track/Track';




class TrackList extends Component {
  render(){
    return(
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track key={track.id}
                          track={track}
                          onAdd={this.props.addTrack}
                          onRemove={this.props.onRemove}
                          isRemoval={true}
            />
          })
        }
      </div>
    );
  }
}

export default TrackList;