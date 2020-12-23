import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Conditions from '../components/Conditions/Conditions';

const Forecast = () =>{
    //fetch weather data
    //send response to setResponseObj function
    let [responseObj, setResponseObj] = useState([]);
    let [error, setError] = useState("");
        useEffect(() => {
            axios.get( "https://community-open-weather-map.p.rapidapi.com/weather%22")
                .then(res => {
                    setResponseObj(res);
                    //setLoad(true);
                    console.log("apicall", res);
                })
                .catch(err => {
                    setError(err.message);
                //     setLoad(true)
                })
        }, []);


function getForecast(){

return(
    <div>
        <h2>Find Current Weather Conditions</h2>
        <div>{JSON.stringify(responseObj)}</div>
        <Conditions responseObj = {this.state.responseObj}/>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
)
}//end getForecast

} //end Forecast function


export default Forecast;
