import React, { Component } from 'react';
import './App.css';
import Container from './Container/Container.js';
import landscape from './assets/landscape.svg';
import landscapeEvening from './assets/landscape-evening.svg';
import landscapeSunrise from './assets/landscape-sunrise.svg';
import landscapeMorning from './assets/landscape-morning.svg';
import landscapeSunset from './assets/landscape-sunset.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: landscape
    };
  }

  backgroundImage(){
      var time = new Date().getHours();
      if(time >= 4 && time < 8){
          this.setState({ image: landscapeSunrise });
      } else if (time >= 8 && time < 12){
          this.setState({ image: landscapeMorning });
      }  else if(time >= 17 && time <= 19){
          this.setState({ image: landscapeSunset });
       } else if (time > 19 || time <= 3){
          this.setState({ image: landscapeEvening });
      }
  }

  componentDidMount(){
      this.backgroundImage();
  }

  render(){
    return(
        <div class="backgroundImage" alt="background image" style={{backgroundImage: `url(${this.state.image})`}}>
            <Container/>
        </div>
    );
  }
}

export default App;
