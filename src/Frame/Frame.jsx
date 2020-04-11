import React, { useState } from 'react';
import './Frame.css';
import pictureFrame from '../assets/picture-frame.png';
import { useDrop } from 'react-dnd';


const Frame = ({ accept, lastDroppedItem, onDrop }) =>  {
  const [frame, setFrame] = useState(pictureFrame);
  const [{ isOver, canDrop }, drop] = useDrop({
      accept,
      drop: onDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  })

    return(
        <div class="content"  ref={drop} >
          <img class="frame" alt="main frame" src={frame} />
          {lastDroppedItem && (
             <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
          )}
        </div>
    );

}

export default Frame;