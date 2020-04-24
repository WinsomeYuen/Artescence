import React from 'react';
import getResponse from '../Handler/getResponse.jsx';
import setGalleryResponse from '../Handler/setGalleryResponse.jsx';
import setMuseumResponse from '../Handler/setMuseumResponse.jsx';
import setExploreResponse from '../Handler/setExploreResponse.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import explore from '../assets/explore-scrolling.png';
import museum from '../assets/museum-scrolling.png';
import gallery from '../assets/gallery-scrolling.png';
import './Modal.css';

function backgroundImage(item){
   if(item === "gallery"){
       return gallery;
   } else if (item === "museum"){
       return museum;
    } else {
       return explore;
   }
}


 const Modal = ({close, item}) => {
	const response = getResponse(item);
	const image = backgroundImage(item);

	return (
		<div>
		   {response === null &&(<Spinner/>)}
			{response &&(
				<div className='modal' style={{backgroundImage: `url(${image})`}}>
					<div className="modal-sandbox"></div>
	            <div className='modal-box'>
	                {item === "gallery" && (setGalleryResponse(response, close) )}
	                {item === "museum" && (setMuseumResponse(response, close) )}
	                {item === "explore" && (setExploreResponse(response, close) )}
	            </div>
		      </div>
			)}
		</div>
   );
}

export default Modal;