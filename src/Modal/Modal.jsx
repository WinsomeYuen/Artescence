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
	                <h1>{response.result.name}</h1>
	                <h5>{response.result.description}</h5>
	                {(response.image === "Error") &&(
	                    <p className="text">{response.result.detailedDescription.articleBody}</p>
	                )}
                   {response.image && (response.image !== "Error") &&(
                     <div className="container">
								<div className="left">{response.result.detailedDescription.articleBody}</div>
                        <div className="right"><img className="image" alt="image" src={response.image}/></div>
                     </div>
                   )}
                   {response.result.image &&(
                     <div className="container">
                        <div className="left">{response.result.detailedDescription.articleBody}</div>
                        <div className="right"><img className="image" alt="image" src={response.result.image.contentUrl}/></div>
                     </div>
                   )}
	               <button onClick={ () => { close(false) }}>close me</button>
	            </div>
		      </div>
			)}
		</div>
   );
}

export default Modal;