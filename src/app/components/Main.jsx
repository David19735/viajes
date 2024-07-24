'use client';
import styled from 'styled-components'
import Link from 'next/link';

function Main() {
      //``

  return (
    <ContenedorBanner>

        <ContenedorInformacion>
            <Titulo>Ven y conocenos</Titulo>
            <Contenido>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sunt sit, a omnis nobis beatae, blanditiis pariatur tenetur minima explicabo facilis! Exercitationem voluptates consectetur velit, perferendis vel facere eos harum saepe officiis debitis blanditiis, veniam non iste beatae optio qui.</Contenido>
           <Boton href='/destinos'>Destinos</Boton> 

        </ContenedorInformacion>

        <ContendorImagen>
                <Imagen src='/imagenes/viajes1.jpg'/>
        </ContendorImagen>

    </ContenedorBanner>
  )
}

const ContenedorBanner=styled.div`
    width: 90%;
    height: 60vh;
    margin: 40px auto;
    display: flex;
    align-items: center;
`;


const ContendorImagen=styled.div`
    width: 50%;
    height: 90%;
    `;

const Imagen=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
`;

const ContenedorInformacion=styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Titulo=styled.h2`
    font-size: 28px;
    font-weight: 800;
    font-family: sans-serif;
    color:rgba(0,0,0,0.7);
    text-transform: uppercase;
`;

const Contenido=styled.p`
    font-size: 18px;
    font-family:'Roboto';
    color: black;
    padding: 0 20px;
`;

const Boton=styled(Link)`
    border: solid 0.2px black;
    padding: 14px 40px;
    border-radius: 5px;
    text-decoration: none;
    background: black;
    color:white;
    font-family: 'Roboto';
    font-weight: 500;
    letter-spacing: 1px;
    transition: all ease 0.3s;
    text-transform: uppercase;
    &:hover{
        background: rgba(0,0,0,0.85);
    }
`;

export default Main;