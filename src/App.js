import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Item from './components/Item';

const Header = styled.h1`
font-size: 2em;
color: #11CCF2;
text-align: center;
`;

const Subtitle = styled.p`
color: #C3C5C6;
text-align: center;
margin-top: 20px;
`;



function App() {

 const [inputValue, setInputValue] = useState("");
 const [cityName, setCityName] = useState("Warsaw")
 const [result, setResult] = useState("")
 const [error, setError] = useState("")

 const apiKey = "42baf1d928735e6a2c74c63a786a2984"

 useEffect(()=>{
   if(cityName !==""){
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
.then(res=> res.json())
.then(result =>{
setResult(result)
},
error =>{
  setError(error)
})
 }},[cityName])



  return (
    <div className="App">
     <Header>Weather app</Header>
     <Subtitle>This is a simple weather app. Just enter the city name and get its weather information.</Subtitle>
     <Form inputValue={inputValue} setInputValue={setInputValue} cityName={cityName} setCityName={setCityName} setResult={setResult}></Form>
     <Item result = {result}></Item>
     {error.length >0 ?console.log(error) : ''}
    </div>
  );
}

export default App;
