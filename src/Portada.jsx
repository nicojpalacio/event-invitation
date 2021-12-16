import React from 'react'
import { Button, Image } from 'react-bootstrap'
import imgportada from './Img/sofy-guillo.png'
// import anillos from './Img/rings.png'
// import logofiesta from './Img/champagne.png'
// import logoregalo from './Img/giftbox.png'
import "./App.css";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";


export default function Portada() {
    return (
        <>
            
            <Image src={imgportada} fluid />
            <div className='text-center m-2'>
                
                <GiBigDiamondRing color='white' size='6em'/>
                <h4>CEREMONIA</h4>
                <p>La ceremonia se realizará el 12 de Noviembre a las 19:00 horas en la Parroquia San Juan Bosco, San Miguel de Tucumán. Tocá el botón de abajo para recibir las indicaciones para llegar.</p>

                <Button variant="secondary">Llegar a la ceremonia</Button>
            </div>
            <div className='text-center m-4'>
                <GiPartyPopper color='white' size='6em' />
                <h4>FIESTA</h4>
                <p>Después de la ceremonia festejaremos en Espacio Tafí Eventos 1, Tafí Viejo de 20:30 a 4:00 AM. Tocá el botón de abajo y encontrá las indicaciones para llegar, te esperamos!</p>

                <Button variant="secondary">Llegar a la fiesta</Button>
            </div>
            <div className='text-center m-2'>
            <AiOutlineGift color='white' size='6em' />
                
                <p>Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...</p>

                <Button variant="secondary">Ver datos bancarios</Button>
            </div>
            
        </>
    )
}