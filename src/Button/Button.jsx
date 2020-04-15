import React, { useState } from 'react';
import getResponse from '../Handler/getResponse.jsx';
import './Button.css';
import Modal from '../Modal/Modal.jsx';

const Button = ({selectedIcon}) => {
	const selected = selectedIcon;
	const [popup, setPopup] = useState(false);

	if(popup){
		getResponse(selected);
	}

   return(
      <div className="buttonBlock">
         <span className="btn">
            <input className="btn-outline" type="button" value="Press Me" onClick={ () => setPopup(true) }/>
         </span>
         {popup ? <Modal/> : ''}
      </div>
   );
}

export default Button