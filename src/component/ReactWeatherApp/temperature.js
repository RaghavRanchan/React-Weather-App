//https://api.openweathermap.org/data/2.5/weather?q=Shimla&appid=a4c45fcdfc93165e8daf9080e86e7998
import React, { useEffect, useState } from "react";
import Weathercard from "./weathercard";
import "./style.css"

const Temperature = () => {
    const [SearchValue,setSearchValue]=useState("Shimla");
    const [TempInfo, setTempInfo]=useState({});
    const getWeatherInfo= async() => { 
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=a4c45fcdfc93165e8daf9080e86e7998`;
            let response = await fetch(url);
            const {status}=response.status;
            const {statusText}=response.statusText;
           

            let data = await response.json();
           

            const {temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data; 
           
            const {speed}=data.wind;
            const {country, sunset}=data.sys;
            

            const myNewWeatherInfo = {
                temp,humidity,pressure,weathermood,name,speed, country, sunset

            };
            setTempInfo(myNewWeatherInfo);

            // console.log(weathermood);
           // console.log(temp,humidity,pressure);
 
            console.log(data);
        }
        catch(error){
            console.log(error);
            alert("City Not Found");
        }
    };
    useEffect(() =>{
        getWeatherInfo();
    },[]);



  return(<>
    
   <div className="wrap">
    <div className="search">
        <input type="search" placeholder="Search..."
        autoFocus id="search"
        className="searchTerm"
        value={SearchValue}
        onChange={(e) => setSearchValue(e.target.value)}/>
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
      
    </div>
   </div>
    
   
<Weathercard TempInfo={TempInfo}/>
  
  </>    
  )
}

export default Temperature