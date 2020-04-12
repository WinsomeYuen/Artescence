import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import  ItemTypes from '../ItemTypes.js';
import setIcon from './setIcon';
import '../Container/Container.css';
import './Option.css';

const Option = ({name, type, isDropped }) => {
  const [option, setOption] = useState(setIcon(name));
  const [{isDragging}, drag] = useDrag({
      item: { type: type },
  		collect: monitor => ({
  			isDragging: !!monitor.isDragging(),
  		}),
    })

    return(
       <div class="option">
          { isDropped ? <s>{name}</s> :
          <img class="icon box" alt={name + " icon"} src={option} ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}/> }
       </div>
    );

}

export default Option;