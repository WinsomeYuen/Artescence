import React from 'react';
import './Button.css';

export default function Button (){
   return(
      <div class="buttonBlock">
         <span class="btn">
            <input class="btn-outline" type="submit" value="Press Me"/>
         </span>
      </div>
   );
}