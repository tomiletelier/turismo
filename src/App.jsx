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
import CircularGallery2 from './CircularGallery2';
  import {Link, Route, Routes} from 'react-router'



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
  
    
<div className='text-center bg-amber-500'>

  
  <SplitText
  text="LA TROCHITA"
  className="text-5xl text-red-800 text-center"
  delay={300}
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

</div>

<br/>
<div className='text-center bg-amber-700'>

      <SplitText className='mt-1 p-1 m-1 text-center'
  text="Sentí lo épico de viajar por nuestra historia, nuestra cultura y nuestros paisajes, en un recorrido de más de 40 kilómetros."
  className="text-2xl text-black text-center"
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
</div>

<div style={{ height: '500px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.02} scrollEase={0.02}/>
</div>


<div className='text-center bg-amber-200'>

  <SplitText
  text="PARQUE NACIONAL LOS ALERCES"
  className="text-5xl text-blue-900 text-center text"
  delay={100}
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
</div>

<div className='text-center bg-amber-700'>

  <SplitText
  text="En sus 259.822 hectáreas encierra algunos de los paisajes más bellos de la región."
  className="text-2xl text-black text-center"
  delay={70}
  duration={1.1}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
</div>






<div style={{ height: '500px', position: 'relative' }}>
  <CircularGallery2 bend={0} textColor="#ffffff" borderRadius={0.02} scrollEase={0.02}/>
</div>


 <div>

  {eventosMap}

 </div>
   <SocialButton  />

     </div>
  ) 

  }

export default App;