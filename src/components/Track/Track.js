import React, {Component} from 'react';

import './Track.css'




class Track extends Component {

  renderAction(){
    if(isRemoval) {

    }
  }

  render(){
    return (
      <div className="Tracl">
        <div className="Track-information">
          <h3>rack name here</h3>
          <p>Track artist here | Track album here</p>
        </div>
        <a className="Track-action"> + or - here</a>
      </div>
    )
  }
}