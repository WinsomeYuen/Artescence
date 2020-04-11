import React, { useState, useCallback } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import './Container.css';
import Frame from '../Frame/Frame.jsx';
import Option from '../Option/Option.jsx';
import ItemTypes from '../ItemTypes.js';
import update from 'immutability-helper';

function Container (props){
   const [main, setMain] = useState([
       { accepts: [ItemTypes.GALLERY, ItemTypes.MUSEUM, ItemTypes.EXPLORE], lastDroppedItem: null }
   ])

	const [boxes] = useState([
	   { name: 'Gallery', type: ItemTypes.GALLERY },
	   { name: 'Museum', type: ItemTypes.MUSEUM },
	   { name: 'Explore', type: ItemTypes.EXPLORE }
	 ])

	const [droppedBoxNames, setDroppedBoxNames] = useState([])

	function isDropped(boxName) {
       return droppedBoxNames.indexOf(boxName) > -1
   }

	const handleDrop = useCallback(
       (index, item) => {
         const { name } = item
         setDroppedBoxNames(
           update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
         )
         setMain(
           update(main, {
             [index]: {
               lastDroppedItem: {
                 $set: item,
               },
             },
           }),
         )
       },
       [droppedBoxNames, main],
     )

    return(
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            {main.map(({ accepts, lastDroppedItem }, index) => (
              <Frame
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item) => handleDrop(index, item)}
                key={index}
              />
            ))}
          </div>

          <div style={{ overflow: 'hidden', clear: 'both' }}>
            {boxes.map(({ name, type }, index) => (
              <Option
                name={name}
                type={type}
                isDropped={isDropped(name)}
                key={index}
              />
            ))}
           </div>
        </div>
    );

}

export default Container;
