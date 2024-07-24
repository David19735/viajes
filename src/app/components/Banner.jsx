'use client';
import React from 'react';
import styled from 'styled-components';

function Banner() {
  return (
    <Contenedor>
        <ContenedorContenido>
        <Titulo>AirMac</Titulo>
        <Contenido>Encontramos tu destino ideal</Contenido>
        </ContenedorContenido>
    </Contenedor>
  )
}

const Contenedor=styled.div`
    width: 100%;
    height: 80vh;
    background: url('imagenes/lugares-turisticos-los-cabos.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    z-index: -1;
`;

const Titulo=styled.h2`
    font-size: 100px;
    color:white;
    font-weight: 100;
`;

const Contenido=styled.p`
    font-size: 40px;
    color: white;
    font-weight: 300;
`;

const ContenedorContenido=styled.div`
    display: flex;  
    flex-direction: column;
    margin-left: 40px;
    font-family: 'Roboto';
    z-index: 1;
`;

export default Banner