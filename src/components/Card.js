import React from 'react'


const Card = ({data}) => {

  if(JSON.stringify(data) !== '{}') {
    return (
      <div className='d-flex text-center my-3 flex-column'>
          <small> Nov 10, 10:30pm </small>
          <h1> {data.name}, {data.sys.country}  </h1>
          <div className='d-flex justify-content-center align-items-center'> 
         <h1> </h1>
          </div>
          <div className='d-flex justify-content-center align-items-center'> 
              <img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`} alt='weathericon'/>
             <h1>  {data.weather[0].main}</h1>
          </div>
          <p> Humididy: {data.main.humidity} % </p>
          <p> Visibility : {data.visibility /1000} km</p>
      </div>
    )
  } else {
    return (
      <h2> is loading ..... </h2>
    )
  }
}

export default Card
