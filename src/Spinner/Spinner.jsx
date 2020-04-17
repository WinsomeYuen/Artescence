import React from 'react';
import './Spinner.css'
import spinner from '../assets/spinner.png';

const Spinner = () => {
	return(
		<div className="center">
         <div className="crystal-spinner" alt="spinner" style={{backgroundImage: `url(${spinner})`}}/>
      </div>
	)
}

export default Spinner;