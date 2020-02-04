import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`

width: 100%;
height: 60vh;
background-color: #F3F2F2;
color: #11CCF2;
margin-top: 10px;
border-radius: 10px;
animation: ${rotate} 1s linear forwards;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10%;

@media(min-width: 768px){
    height: 30vh;
    margin-top: 150px;
   
}
`;

const Stats = styled.div`
width: 50%;
display: flex;
flex-direction:column;
`;

const City = styled.h2`
color: #11ccf2;
font-size: 1.3em;
font-weight: bold;
`;

const Info = styled.p`
font-size: .8em;
margin-block-start: 0em;
    margin-block-end: 0em;
    margin-top: 10px;
`;

const Temp = styled.div `
display: flex;
flex-direction: column;

`;

const Cels = styled.p`
font-size: 1.5em;
font-weight: bold;
`;

const Img = styled.img`
width: 100%;
`;

const Error = styled.p`
color:#11ccf2
`;

function Item({result, cityName}){

    if(result !== "" && result.cod === 200){
        let icon = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;
        return(
            <Wrapper >
            <Stats>
             <City>{result.name}</City>
        <Info>Wind: {result.wind.speed} m/s</Info>
        <Info>Pressure: {result.main.pressure} hpa </Info>
        <Info>Cloudiness: {result.weather[0].description} </Info>
        <Info>Humidity: {result.main.humidity}% </Info>
            </Stats>
<Temp>
        <Cels>{Math.round(result.main.temp - 273.15)}°C</Cels>
        <Img src={icon} />

</Temp>
            </Wrapper>
        )
    }
    else if(result !=="" && result.cod !==200){
        return(
            <Error>Sorry, we can't find this city: {cityName}</Error>
        )
    }
    else{return(
        <React.Fragment></React.Fragment>)
    }
}

export default Item;