import React, { Component } from 'react';
import painting from '../assets/painting.svg';
import '../Container/Container.css';
import './ArtGallery.css';

class ArtGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: painting
    };
  }

  render(){
    return(
       <div class="artGallery">
        <img class="painting box" src={this.state.gallery} />
       </div>
    );
  }
}

export default ArtGallery;