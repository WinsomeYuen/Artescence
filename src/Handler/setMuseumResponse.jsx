import React from 'react';

export default function setMuseumResponse(response){
	return(
		<div>
			<h1>{response.title}</h1>
	      <div className="left">
	         <h5>{response.description}</h5>
	      </div>
	      <div className="right">
	         <img className="image" alt="object" src={response.image}/>
	      </div>
	   </div>
	)
}