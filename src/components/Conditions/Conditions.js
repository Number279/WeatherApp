import React from 'react';


/* Added conditions component, be mindful of capitilization as 
the tutorial had it lowercased in some instances

Conditions.module.css is also included in the conditions folder

*/

const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}


// conversion to fahrenheit is located on Forecast

export default Conditions;

