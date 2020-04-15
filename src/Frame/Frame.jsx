import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import setIcon from '../Option/setIcon.jsx';
import Pill from '../Pill/Pill.jsx';
import getResponse from '../Handler/getResponse.jsx';
import Modal from '../Modal/Modal.jsx';
import pictureFrame from '../assets/picture-frame.png';
import './Button.css';
import './Frame.css';

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
  const [popup, setPopup] = useState(false);

  const isActive = isOver && canDrop

  if(popup){
  		getResponse(lastDroppedItem.type);
  }

  return(
     <div className="content" ref={drop} >
       {lastDroppedItem && (
         <div className="animatedBox">
	         <div className="buttonBlock">
	            <span className="btn">
	               <input className="btn-outline" type="button" value="Press Me" onClick={ () => setPopup(true) }/>
	            </span>
	            {popup ? <Modal/> : ''}
	         </div>
         </div>
       )}
       <img className="frame" alt="main frame" src={frame} />
       {lastDroppedItem && popup === false && (
         <img className="selectedIcon content" alt={ lastDroppedItem.type + " icon"} src={setIcon(lastDroppedItem.type)} />
       )}
       <div className="animatedBox">{isActive ? <Pill text={"Drop icon into picture frame!"}/>:
         <Pill text={"Drag icons on the left into picture frame!"}/> }</div>
     </div>
  );

}

export default Frame;