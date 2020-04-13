import React, { useState, useEffect } from 'react';
import getResponse from '../Handler/getResponse.jsx'
import getToken from '../Handler/getToken.jsx'
import './Button.css';

const Button = ({selectedIcon}) => {
	const [selected] = selectedIcon;
   const [xappToken, setXappToken] = useState(null);
   useEffect(() => {
     getToken().then(token => setXappToken(token))
   }, [])

   return(
      <div className="buttonBlock">
         <span className="btn">
            <input className="btn-outline" type="button" value="Press Me" onClick={ () => getResponse(xappToken) }/>
         </span>
      </div>
   );
}

export default Button