import React from 'react';
import classes from './Conditions.module.css';
// link to css style in div

const Conditions = (props) => {
   return (
       <div className={classes.Wrapper}> 
           {props.error && <small>Please enter a valid city.</small>}
           {/* // Error handling entered per "Error Handling and Loading" step6 */}
            {props.loading && <div>Loading...</div>}

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

