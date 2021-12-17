import React from 'react'
import { Button, Image } from 'react-bootstrap'
import imgportada from './Img/sofy-guillo.png'
import imgportada2 from './Img/editada2.jpeg'
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
                <p>La ceremonia se realizará el 14 de Enero a las 19:00 horas en la Parroquia San Roque, San Miguel de Tucumán. Tocá el botón de abajo para recibir las indicaciones para llegar.</p>

                <Button variant="secondary">Llegar a la ceremonia</Button>
            </div>
            <div className='text-center m-5'>
                <GiPartyPopper color='white' size='6em' />
                <h4>FIESTA</h4>
                <p>Después de la ceremonia festejaremos en Kaké Eventos, Tafí Viejo de 20:00 a 4:00 AM. Tocá el botón de abajo y encontrá las indicaciones para llegar, te esperamos!</p>

                <Button variant="secondary">Llegar a la fiesta</Button>
            </div>

            <div className='text-center img-text img-height'>
                {/* <Image className='rounded' src={imgportada2} fluid /> */}
                <h1 className=' pt-3'>Confirmacion de asistencia</h1>
                <p className='mb-0'>Esperamos que seas parte de esta gran celebracion</p><br />
                <p className='mb-0 pb-3'>La fiesta esta preparada para que los adultos la pasen genial y los mas chicos se queden en casa</p>
                <Button variant="outline-secondary">Confirmar Asistencia</Button>{' '}
            </div>
            <div className='text-center m-5'>
            <AiOutlineGift color='white' size='6em' />
                
                <p>Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...</p>

                <Button variant="secondary">Ver datos bancarios</Button>
            </div>
            
        </>
    )
}
