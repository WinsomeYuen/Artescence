import React, { useState } from 'react';
import './Container.css';
import pictureFrame from '../assets/picture-frame.png';
import ArtGallery from '../Gallery/Gallery.js';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

function Container (props){
  const [frame, setFrame] = useState(pictureFrame);

    return(
       <DndProvider backend={Backend}>
           <div class="content">
             <img class="frame" alt="main frame" src={frame} />
           </div>
           <ArtGallery/>
       </DndProvider>
    );

}

export default Container;
