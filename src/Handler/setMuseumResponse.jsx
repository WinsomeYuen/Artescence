import React from 'react';

export default function setMuseumResponse(response, close){
	return(
		<div>
			<div className="modal-header">
				<div className="close-modal" onClick={ () => { close(false) }} >&#10006;</div>
				<h1>{response.title}</h1>
			</div>
			<div className="modal-body">
		      <div className="left">
		         <span className="modal-text"><h5>{response.description}</h5></span>
		         <div className="buttonCentre">
                 <span className="btn">
                    <a href={response.url} target="_blank" rel="noopener noreferrer"><button className="btn-outline">Learn More</button></a>
                 </span>
	            </div>
		      </div>
		      <div className="right">
		         <img className="image" alt="object" src={response.image}/>
		      </div>
	      </div>
	   </div>
	)
}