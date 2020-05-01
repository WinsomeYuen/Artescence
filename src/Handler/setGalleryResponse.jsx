import React from 'react';
import '../Button/Button.css';

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
	              <div className="buttonCentre">
                    <span className="btn">
                        <a href={response.result.detailedDescription.url} target="_blank" rel="noopener noreferrer"><button className="btn-outline">More About Artwork</button></a>
                    </span>
                    {response.tateLink &&(
                       <span className="btn">
                          <a href={response.tateLink} target="_blank" rel="noopener noreferrer"><button className="btn-outline">More About Artist</button></a>
                       </span>
                    )}
                 </div>
	             </div>
	          )}
	          {response.image && response.image !== "Error" &&(
	            <div className="modal-body">
	               <div className="left">
	                  <span className="modal-text">{response.result.detailedDescription.articleBody}</span>
	                  <div className="buttonCentre">
                        <span className="btn">
                           <a href={response.result.detailedDescription.url} target="_blank" rel="noopener noreferrer"><button className="btn-outline">More About Artwork</button></a>
                        </span>
                        {response.tateLink &&(
                           <span className="btn">
                              <a href={response.tateLink} target="_blank" rel="noopener noreferrer"><button className="btn-outline">More About Artist</button></a>
                           </span>
                        )}
                     </div>
	               </div>
	               <div className="right"><img className="image" alt="object" src={response.image}/></div>
	            </div>
	          )}
	          {response.result.image &&(
	            <div className="modal-body">
	               <div className="left">
	                  <span className="modal-text">{response.result.detailedDescription.articleBody}</span>
	                  <div className="buttonCentre">
                        <span className="btn">
                           <a href={response.result.detailedDescription.url} target="_blank" rel="noopener noreferrer"><button className="btn-outline">More About Artwork</button></a>
                        </span>
                        {response.tateLink &&(
                           <span className="btn">
                              <a href={response.tateLink} target="_blank" rel="noopener noreferrer"><button className="btn-outline">More About Artist</button></a>
                           </span>
                        )}
                     </div>
	               </div>
	               <div className="right"><img className="image" alt="object" src={response.result.image.contentUrl}/></div>
	            </div>
	          )}
          </div>
       </div>
   )
}