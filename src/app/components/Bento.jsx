'use client'
import React from 'react'
import styled from 'styled-components'

function Bento() {
  return (

    <>
    
    <Parrafo>Centros vacacionales más famosos</Parrafo>
    <ContenedorBento>

        <ContenedorImagen>
            <Imagen src='/imagenes/bento1.jpg'/>
        </ContenedorImagen>

        <ContenedorImagen2>
            <Imagen src='/imagenes/bento2.jpg'/>
        </ContenedorImagen2>

        <ContenedorImagen3>
            <Imagen src='/imagenes/bento3.jpg'/>
        </ContenedorImagen3>

        <ContenedorImagen4>
            <Imagen src='/imagenes/bento4.jpg'/>
        </ContenedorImagen4>

        <ContenedorImagen5>
            <Imagen src='/imagenes/bento5.jpg'/>
        </ContenedorImagen5>

        <ContenedorImagen6>
            <Imagen src='/imagenes/bento6.jpg'/>
        </ContenedorImagen6>

    </ContenedorBento>
    </>
  )
}


const ContenedorBento=styled.div`
    width: 85%;
    
    margin: 0 auto;
    display: grid;
    grid-template-areas:
    "item1 item1 item2 item2"
    "item1 item1 item5 item5"
    "item3 item4 item5 item5"
    "item3 item4 item5 item5"
    "item6 item6 item6 item6"
    "item6 item6 item6 item6"
    ;
    gap: 5px;
    margin-bottom: 20px;

`;

const ContenedorImagen=styled.div`    
    height: 250px;
    grid-area: item1;
    border-radius: 5px;
`;

const ContenedorImagen2=styled.div`
    height: 180px;
    grid-area: item2;
    border-radius: 5px;
`;

const ContenedorImagen3=styled.div`
    height: 250px;
    grid-area: item3;
    border-radius: 5px;
`;

const ContenedorImagen4=styled.div`
    height: 250px;
    grid-area: item4;
    border-radius: 5px;
`;

const ContenedorImagen5=styled.div`
    height: 330px;
    grid-area: item5;
    border-radius: 5px;
`;

const ContenedorImagen6=styled.div`
    height: 400px;
    grid-area: item6;
    border-radius: 5px;
`;

const Imagen=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all ease 0.4s;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        transform: scale(1.1);
    }
`;

const Parrafo=styled.p`
    font-size: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    font-weight: 400;
    margin: 60px 0;
    color: #393e42;
`;

export default Bento