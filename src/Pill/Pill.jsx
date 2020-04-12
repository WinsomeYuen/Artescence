import React from 'react';
import './Pill.css';

const Pill = ({text}) => {
   return(
        <div class="block">
		     <div class="blockContainer ">
		       <p>{text}</p>
		     </div>
	     </div>
   );
}

export default Pill;