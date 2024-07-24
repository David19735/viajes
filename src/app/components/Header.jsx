'use client'
import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';


function Header() {
  return (
    <Head>
        
        <Link href='/'>
    <ContenedorLogo>
        <Logo src='/imagenes/Logotipo.jpg'/>
    </ContenedorLogo>
        </Link>

    <ContenedorEnlaces>
        <Enlace href='/'>Playas</Enlace>
        <Enlace href='/paises'>Países</Enlace>
        <Enlace href='/'>Cuestionario</Enlace>
    </ContenedorEnlaces>

    <ContenedorBotones>
    <Input/>
    <Label>Search</Label>
    <Boton>Busqueda</Boton>
    </ContenedorBotones>

    </Head>
  )
}

const Head=styled.header`
    width: 100%;
    height: 80px;
    background: #333636;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;

`;

const ContenedorLogo=styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const Logo=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`;

const ContenedorEnlaces=styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 180px;
`;

const Enlace=styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 17px;
    font-family:'Roboto';
    transition: all ease 0.3s;

    &:hover{
        color: #3facb4;
    }
   
`;

const ContenedorBotones=styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    align-items: center;
    gap:50px;
    position: relative;
    margin-left: 20px;
`;

const Input=styled.input`
    width: 250px;
    height: 50%;
    outline: none;
    border: 2px solid #21c4ae;
    border-radius: 5px;
    background: transparent;
    color: #9e959d;
    padding: 0 20px;
    font-size: 17px;
    font-weight: 700;
    font-family: 'Roboto';
    position: relative;
    transition: all 0.5s;

    &:focus~p{
        transform: translate(0px,20px);
        transition-duration:0.5s;
        background: #333636;
        width: 60px;
        height: 24px;
        border-radius: 2px solid #333636;
        font-size: 18px;
    }
`;

const Label=styled.p`
    width: 100px;
    height: 100px;
    font-size: 20px;
    color:white;
    position: absolute;
    top: -15px;
    left: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;

const Boton=styled.button`
    background: #21c4ae;
    border: none;
    padding: 10px 50px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-family: 'Apple';
    letter-spacing: 1px;
    font-weight: 700;
    transition: all ease 0.3s;

    &:hover{
        transform: scale(1.1);
        background: #056155;
        color:#21c4ae;
    }
`;

export default Header