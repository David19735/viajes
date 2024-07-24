'use client'
import React from 'react';
import data from './../data/destinos';
import styled from 'styled-components';
import Link from 'next/link';

function Paises() {

  
  //``

  return (

    <Contenedor>
      <Titulo>Ven y conoce todos estos países</Titulo>
    <ContenedorPaises>
    
      {
        data.map((pais,index)=>(
          <Pais key={index}>

    <Cimagen>
      <Imagen src={pais.img}/>
    </Cimagen>

    <ContenedorInf>
      <Nombre>{pais.nombre}</Nombre>
      <Parrafo>{pais.descripcion}</Parrafo>
      <Enlace href={`/paises/${pais.id}`}>Leer más</Enlace>

    </ContenedorInf>

    </Pais>
        ))
      }
    
    </ContenedorPaises>
    </Contenedor>
  )
}

const Contenedor=styled.div`
  width: 90%;
  margin: 40px auto;
  
`;

const ContenedorPaises=styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
`;

const Pais=styled.div`
  height: 350px;
  position: relative;
  box-shadow: 0px 4px 26px 7px rgba(0,0,0,0.35);
-webkit-box-shadow: 0px 4px 26px 7px rgba(0,0,0,0.35);
-moz-box-shadow: 0px 4px 26px 7px rgba(0,0,0,0.35);
  overflow: hidden;
   
   &:hover div{
    transform: translateX(0);

   }
`;

const Cimagen=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Imagen=styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContenedorInf=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(-400px);
  transition-duration: 0.5s;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  
  
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,0.3);
    z-index: -1;
  }

`;

const Nombre=styled.h2`
  font-size: 40px;
  font-weight: 800;
  font-family: 'Roboto';
`;


const Titulo=styled.div`
  font-size: 40px;
  color: rgba(0,0,0,0.7);
  font-weight: 800;
  font-family: 'Roboto';
  text-transform: uppercase;
  text-align: center;
`;

const Parrafo=styled.p`
  font-size: 17px;
  font-family: 'Sans serif';
  margin: 0 20px;

`;

const Enlace=styled(Link)`
  font-size: 20px;
  color:white;
  text-decoration: none;
  transition: all ease 0.3s;

  &:hover{
    color: #08d5f0;
  }
`;

export default Paises