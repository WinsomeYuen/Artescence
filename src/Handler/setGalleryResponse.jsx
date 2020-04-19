import React from 'react';

export default function setGalleryResponse(response){
   return(
      <div>
          <h1>{response.result.name}</h1>
          <h5>{response.result.description}</h5>
          {(response.image === "Error") &&(
              <p className="text">{response.result.detailedDescription.articleBody}</p>
          )}
          {response.image && (response.image !== "Error") &&(
            <div className="container">
               <div className="left">{response.result.detailedDescription.articleBody}</div>
               <div className="right"><img className="image" alt="object" src={response.image}/></div>
            </div>
          )}
          {response.result.image &&(
            <div className="container">
               <div className="left">{response.result.detailedDescription.articleBody}</div>
               <div className="right"><img className="image" alt="object" src={response.result.image.contentUrl}/></div>
            </div>
          )}
       </div>
   )
}