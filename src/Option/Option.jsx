import React, { useState } from 'react';
import gallery from '../assets/gallery.svg';
import museum from '../assets/museum.svg';
import explore from '../assets/explore.svg';
import '../Container/Container.css';
import './Option.css';
import  ItemTypes from '../ItemTypes.js';
import { useDrag } from 'react-dnd';

function setIcon(name){
   switch(name){
      case "Gallery":
         return gallery;
      case "Museum":
         return museum;
      case "Explore":
         return explore;

   }
}

const Option = ({name, type, isDropped }) => {
  const [option, setOption] = useState(setIcon(name));
  const [{isDragging}, drag] = useDrag({
      item: { type: ItemTypes.GALLERY },
  		collect: monitor => ({
  			isDragging: !!monitor.isDragging(),
  		}),
    })

    return(
       <div class="option">
          {isDropped ? "" : <img class="icon box" alt={name + " icon"} src={option} ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}/> }
       </div>
    );

}

export default Option;