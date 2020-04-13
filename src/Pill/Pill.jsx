import React from 'react';
import './Pill.css';

const Pill = ({text}) => {
   return(
        <div className="block">
		     <div className="blockContainer">
		       <p>{text}</p>
		     </div>
	     </div>
   );
}

export default Pill;