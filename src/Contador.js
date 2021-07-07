import {userState, useState} from 'react';

const Contador =()=> {


  const [numero,setNumero] = useState(0);


  
const handleClick=()=>{
console.log('me clickiaste');
setNumero(numero+1);
console.log(numero)
  



}; 
  
  
  
  return(

    <>
    <h1>0</h1>
    <button onClick={handleClick}>Clickeame</button>





    </>



  )



}


export default Contador;