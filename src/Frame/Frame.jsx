import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import setIcon from '../Option/setIcon.jsx';
import Pill from '../Pill/Pill.jsx';
import Button from '../Button/Button.jsx';
import './Frame.css';
import pictureFrame from '../assets/picture-frame.png';

const Frame = ({ accept, lastDroppedItem, onDrop }) =>  {
  const [frame] = useState(pictureFrame);
  const [{ isOver, canDrop }, drop] = useDrop({
      accept,
      drop: onDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      })
  })

   const isActive = isOver && canDrop

   return(
        <div class="content"  ref={drop} >
          {lastDroppedItem && ( <div class="animatedBox"><Button/></div> )}
          <img class="frame" alt="main frame" src={frame} />
          {lastDroppedItem && (
            <img class="selectedIcon content" alt={ lastDroppedItem.type + " icon"} src={setIcon(lastDroppedItem.type)} />
          )}
          <div class="animatedBox">{isActive ? <Pill text={"Drop icon into picture frame!"}/>:
            <Pill text={"Drag icons on the left into picture from!"}/> }</div>
        </div>
    );

}

export default Frame;