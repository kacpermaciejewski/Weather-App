import React from 'react';
import styled from 'styled-components'

const Fields = styled.form`
display: flex;
position: relative;
`;

const Input = styled.input`
color: #11CCF2;
border-radius: 10px;
border: none;
border: 1px solid #C3C5C6;
width: 100%;
height: 30px;
padding-left: 10px;
padding-right: 35%;
`;

const Button = styled.button`
    color: #fff;
border-radius: 10px;
border: none;
background-color: #11CCF2;
height: 35px;
position: absolute;
width: 30%;
right: 0px;
`;

function Form({inputValue, setInputValue,setCityName, setResult}) {

const handleSubmit = e =>{
e.preventDefault()
if(inputValue.length>=3){
setResult("")
setCityName(inputValue);
setInputValue("");
}
}



    return(
        <Fields onSubmit={e =>handleSubmit(e)}>
            <Input name='city' value={inputValue} onChange={e => setInputValue(e.target.value)}></Input>
            <Button type='submit'>Check!</Button>
        </Fields>
    )
}
 
export default Form;