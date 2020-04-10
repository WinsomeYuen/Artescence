import React, { Component } from 'react';
import './Container.css';
import pictureFrame from '../assets/picture-frame.png';
import ArtGallery from '../ArtGallery/ArtGallery.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: pictureFrame
    };
  }

  render(){
    return(
        <div>
            <div class="content">
                <img class="frame" src={this.state.frame} />
            </div>
            <ArtGallery/>
        </div>
    );
  }
}

export default Container;
