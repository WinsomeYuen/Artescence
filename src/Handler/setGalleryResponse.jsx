import React from 'react';

export default function setGalleryResponse(response, close){
   return(
      <div>
         <div className="modal-header">
	          <div className="close-modal" onClick={ () => { close(false) }} >&#10006;</div>
	          <h1>{response.result.name}</h1>
	          <h5>{response.result.description}</h5>
         </div>
         <div>
	          {response.image === "Error" &&(
	            <div className="modal-body">
	              <p className="text">{response.result.detailedDescription.articleBody}</p>
	             </div>
	          )}
	          {response.image && response.image !== "Error" &&(
	            <div className="modal-body">
	               <div className="left"><span className="modal-text">{response.result.detailedDescription.articleBody}</span></div>
	               <div className="right"><img className="image" alt="object" src={response.image}/></div>
	            </div>
	          )}
	          {response.result.image &&(
	            <div className="modal-body">
	               <div className="left"><span className="modal-text">{response.result.detailedDescription.articleBody}</span></div>
	               <div className="right"><img className="image" alt="object" src={response.result.image.contentUrl}/></div>
	            </div>
	          )}
          </div>
       </div>
   )
}