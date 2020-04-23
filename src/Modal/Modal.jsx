import React from 'react';
import getResponse from '../Handler/getResponse.jsx';
import setGalleryResponse from '../Handler/setGalleryResponse.jsx';
import setMuseumResponse from '../Handler/setMuseumResponse.jsx';
import setExploreResponse from '../Handler/setExploreResponse.jsx';
import image from '../assets/scrolling-background.png';
import Spinner from '../Spinner/Spinner.jsx';

import './Modal.css';

 const Modal = ({close, item}) => {
	const response = getResponse(item);

	return (
		<div>
		   {response === null &&(<Spinner/>)}
			{response &&(
				<div className='modal' style={{backgroundImage: `url(${image})`}}>
					<div className="modal-sandbox"></div>
	            <div className='modal-box'>
	                {item === "gallery" && (setGalleryResponse(response, close) )}
	                {item === "museum" && (setMuseumResponse(response) )}
	                {item === "explore" && (setExploreResponse(response) )}
	            </div>
		      </div>
			)}
		</div>
   );
}

export default Modal;