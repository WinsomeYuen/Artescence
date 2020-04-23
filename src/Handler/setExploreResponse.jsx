import React from 'react';

export default function getExploreResponse(response, close){
	return(
		<div>
			<div className="modal-header">
      	   <div className="close-modal" onClick={ () => { close(false) }} >&#10006;</div>
				<h1>{response.title}</h1>
				<h5>{response.subtitle}</h5>
			</div>
			<div className="modal-body">
				<div className="left"><iframe title="map" width="100%" height="400"  frameBorder="0" src={response.url} allowFullScreen>
		      </iframe></div>
		      <div className="right"><p>{response.description}</p></div>
	      </div>
      </div>
	)
}