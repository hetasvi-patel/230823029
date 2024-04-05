import React,{useRef,useState,useEffect} from 'react';

function Refrence2()
{
    
    const inputNameRef = useRef("");
    const inputCityRef = useRef("");
    const inputEmail = useRef("");
    const inputMobileNo = useRef("");

    const [name,setName] =useState("Hetasvi ");
    const [city,setCity] =useState("Rajkot");
    const [email,setEmail] =useState("@gmail.com ");
    const [mobileNo,setMobileNo] =useState("1234567890");

    function handlingInput(e)
    {
     if(e.target.name==="name")  
     {
        setName(e.target.value);
     } 
     if(e.target.name==="city")
    {
        setCity(e.target.value);
    }      
    if(e.target.name==="email")  
    {
       setEmail(e.target.value);
    } 
    if(e.target.name==="mobileNO")
   {
       setMobileNo(e.target.value);
   }      
        

    }
    function handleSubmit()
    {
        alert(`${inputNameRef.current.value} - ${inputCityRef.current.value}-${inputEmail.current.value}-${inputMobileNo.current.value}`)
    }
   function click()
   {
    console.log(`${inputNameRef.current.value} - ${inputCityRef.current.value}-${inputEmail.current.value}-${inputMobileNo.current.value}`)
   }
    return(
        <>
            <h1>{`${name}  ,${city}  ,${email}  ,${mobileNo}`}</h1>
            <form onSubmit={handleSubmit}>
            name:<input type="text" name='name' onChange={(e)=>{handlingInput(e)}} ref={inputNameRef}/><br/>
            city:   <input type="text" name='city' onChange={(e)=>{handlingInput(e)}} ref={inputCityRef}/><br/>
            email:    <input type="text" name='email' onChange={(e)=>{handlingInput(e)}} ref={inputEmail}/><br/>
            mobileNo:    <input type="text" name='mobileNo' onChange={(e)=>{handlingInput(e)}} ref={inputMobileNo}/><br/>
                <button type="submit" onClick={click}>Submit</button>
                
            </form>
        </>
    );
}

export default Refrence2;