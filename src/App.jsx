import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './Logo' 
import { AiFillAlipayCircle } from "react-icons/ai";
import Button from './Button';
import { MdLocationOn } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Parque from './Parque1';
import SocialButton from './SocialMedia';
import Trochita from './Trochita1';

function App(){
  const lista=["Inicio",   "¿Como llegar?",    "¿Que hacer?",   "Guia de alojamiento"]
  const listItems=lista.map(item => <Button text={item} />)

  return(
    <>
  
    <header className='flex items-center bg-amber-200'>
           <Logo /> 
        <ul className='flex gap-5 justify-center w-2/3'>

      {listItems}
          
              <MdLocationOn className='h-12 w-13 hover:text-amber-700'/>
          
            <TiWeatherPartlySunny className='h-12 w-13 hover:text-amber-700'/>
          </ul>
    </header>
  
    
      <h1 className='text-center text-pink-500 text-3xl p-5 m-5'>LA TROCHITA </h1>

       <p className='justify-baseline'>Sentí lo épico de viajar por nuestra historia, nuestra cultura y nuestros paisajes, en un recorriendo de más de 40 kilómetros.</p>

      <Trochita />

     

        <h1 className='text-center text-pink-500 text-3xl p-1'>PARQUE NACIONAL LOS ALERCES</h1>

        <Parque />


   <SocialButton  />

     </>
)

}


export default App;