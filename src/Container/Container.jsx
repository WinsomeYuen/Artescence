import React, { useState, useCallback } from 'react';
import './Container.css';
import Frame from '../Frame/Frame.jsx';
import Option from '../Option/Option.jsx';
import ItemTypes from '../ItemTypes.js';
import update from 'immutability-helper';

function Container (){
   const [main, setMain] = useState([
       { accepts: [ItemTypes.GALLERY, ItemTypes.MUSEUM, ItemTypes.EXPLORE], lastDroppedItem: null }
   ])

	const [boxes] = useState([
	   { name: 'gallery', type: ItemTypes.GALLERY },
	   { name: 'museum', type: ItemTypes.MUSEUM },
	   { name: 'explore', type: ItemTypes.EXPLORE },
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

          <div className="options" style={{ overflow: 'hidden', clear: 'both' }}>
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
