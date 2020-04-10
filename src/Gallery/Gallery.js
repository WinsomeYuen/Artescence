import React, { useState } from 'react';
import painting from '../assets/painting.svg';
import '../Container/Container.css';
import './Gallery.css';
import { ItemTypes } from '../Constants.js';
import { useDrag } from 'react-dnd';

export default function Gallery (props) {
  const [gallery, setGallery] = useState(painting);
  const [{isDragging}, drag] = useDrag({
      item: { type: ItemTypes.GALLERY },
  		collect: monitor => ({
  			isDragging: !!monitor.isDragging(),
  		}),
    })

    return(
       <div class="artGallery" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
          <img class="painting box" alt="gallery" src={gallery} />
       </div>
    );

}