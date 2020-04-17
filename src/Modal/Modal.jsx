import React from 'react';
import getResponse from '../Handler/getResponse.jsx';
import Spinner from '../Spinner/Spinner.jsx';

import './Modal.css';

 const Modal = ({close, item}) => {
	const response = getResponse(item);
	console.log(response);

	return (
		<div>
		   {response === null &&(<Spinner/>)}
			{response &&(
				<div className='modal'>
		            <div className='popup'>
		                <h1>{response.title}</h1>
		                <h5>{response.artistDisplayName}</h5>
		                <img className="image" alt="image" src={response.primaryImage}/>
		               <button onClick={ () => { close(false) }}>close me</button>
		            </div>
		      </div>
			)}
		</div>
   );
}

export default Modal;