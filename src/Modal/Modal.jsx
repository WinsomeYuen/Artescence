import React from 'react';
import getResponse from '../Handler/getResponse.jsx';
import setGalleryResponse from '../Handler/setGalleryResponse.jsx';
import setMuseumResponse from '../Handler/setMuseumResponse.jsx';
import setExploreResponse from '../Handler/setExploreResponse.jsx';
import Spinner from '../Spinner/Spinner.jsx';

import './Modal.css';

 const Modal = ({close, item}) => {
	const response = getResponse(item);
	//console.log(response);

	return (
		<div>
		   {response === null &&(<Spinner/>)}
			{response &&(
				<div className='modal'>
	            <div className='popup'>
	            	 <button onClick={ () => { close(false) }}>close me</button>
	                {item === "gallery" && (setGalleryResponse(response) )}
	                {item === "museum" && (setMuseumResponse(response) )}
	                {item === "explore" && (setExploreResponse(response) )}
	            </div>
		      </div>
			)}
		</div>
   );
}

export default Modal;