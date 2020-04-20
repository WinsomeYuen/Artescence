import React from 'react';

export default function getExploreResponse(response){
	return(
		<div>
			<h1>{response.title}</h1>
			<h5>{response.subtitle}</h5>
			<iframe title="map" width="500" height="450"  frameBorder="0" src={response.url} allowFullScreen>
	      </iframe>
      </div>
	)
}