import React from 'react';
import getResponse from '../Handler/getResponse.jsx';

import './Modal.css';

 const Modal = ({close, item}) => {
	const response = getResponse(item);

	return (
		<div>
			{response &&(
				<div className='modal'>
		            <div className='popup'>
		                <h1>{response.title}</h1>
		               <button onClick={ () => { close(false) }}>close me</button>
		            </div>
		      </div>
			)}
		</div>
   );
}

export default Modal;