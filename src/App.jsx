import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './Logo' 
import { AiFillAlipayCircle } from "react-icons/ai";
import Button from './Button';
import { MdDescription, MdLocationOn } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Parque from './Parque1';
import SocialButton from './SocialMedia';
import Trochita from './Trochita1';
import Evento from './Evento';
import Fondo from './Fondo';
import SplitText from "./assets/SplitText";
import CircularGallery from './CircularGallery'



function App(){
  const lista=["Inicio",   "¿Como llegar?",    "¿Que hacer?",   "Guia de alojamiento"]
  const listItems=lista.map(item => <Button text={item} />)
  const listEventos = [
{
fecha: "22/9",
hora: "15:00hs",
lugar: "Esquel",
descripcion: "banda de musica",
},
{
fecha: "22/9",
hora: "15:00hs",
lugar: "Esquel",
descripcion: "banda de musica",
},
{
fecha: "22/9",
hora: "15:00hs",
lugar: "Esquel",
descripcion: "banda de musica",
},
{
fecha: "22/9",
hora: "15:00hs",
lugar: "Esquel",
descripcion: "banda de musica",
}
]
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const eventosMap = listEventos.map(evento =>
    <Evento evento={evento} />
)

  return(
    <div className='bg-[url(./assets/zeta3.png)] bg-no-repeat bg-cover bg-blue-950/50'>


    <header className='flex items-center justify-center'>
           <Logo /> 
        <ul className='flex gap-5 justify-center w-2/3'>

      {listItems}
          
              <MdLocationOn className='h-12 w-13 hover:text-amber-700'/>
          
            <TiWeatherPartlySunny className='h-12 w-13 hover:text-amber-700'/>
          </ul>
    </header>
  
    
  
  <SplitText className='justify-center'
  text="LA TROCHITA"
  className="text-5xl text-white text-center"
  delay={200}
  duration={1.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>

<br/>
      <SplitText className='mt-5 p-4 m-10'
  text="Sentí lo épico de viajar por nuestra historia, nuestra cultura y nuestros paisajes, en un recorrido de más de 40 kilómetros"
  className="text-1xl text-red-600 text-center"
  delay={10}
  duration={1.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>

<div style={{ height: '500px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>



<SplitText
  text="BIENVENIDOS A ESQUEL"
  className="text-8xl text-white font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>




<h1 className='text-center text-pink-500 text-3xl p-1'>PARQUE NACIONAL LOS ALERCES</h1>

   <Parque />

 <div>

  {eventosMap}

 </div>
   <SocialButton  />

     </div>
  ) 

  }


export default App;