import React, { useState } from 'react';
import './App.css';
import Container from './Container/Container.jsx';
import landscape from './assets/landscape.svg';
import landscapeEvening from './assets/landscape-evening.svg';
import landscapeSunrise from './assets/landscape-sunrise.svg';
import landscapeMorning from './assets/landscape-morning.svg';
import landscapeSunset from './assets/landscape-sunset.svg';

function backgroundImage(){
   var time = new Date().getHours();
   if(time >= 4 && time < 8){
       return landscapeSunrise;
   } else if (time >= 8 && time < 12){
       return landscapeMorning;
   }  else if(time >= 17 && time <= 19){
       return landscapeSunset;
    } else if (time > 19 || time <= 3){
       return landscapeEvening;
   }
   return landscape;
}

function App (props) {
  const [image] = useState(backgroundImage);

  return(
     <div className="backgroundImage" alt="background image" style={{backgroundImage: `url(${image})`}}>
         <Container/>
     </div>
  );
}

export default App;
