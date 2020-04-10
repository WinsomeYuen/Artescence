import React, { Component } from 'react';
import './Container.css';
import pictureFrame from '../assets/picture-frame.png'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: pictureFrame
    };
  }

  render(){
    return(
        <div class="content">
            <img class="frame" src={this.state.frame} />
        </div>
    );
  }
}

export default Container;
