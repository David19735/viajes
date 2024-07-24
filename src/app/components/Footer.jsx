'use client'
import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faXTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <ContenedorFooter>
        <Enlaces>
            <Titulo>Nostros</Titulo>

            <Parrafo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias minima fugit cum velit deleniti labore ipsam iure odio facere amet, accusamus perspiciatis. Nisi, esse perspiciatis.</Parrafo>

            <ContenedorEnlaces>
                <Enlace><FontAwesomeIcon icon={faFacebook}/></Enlace>
                <Enlace><FontAwesomeIcon icon={faXTwitter}/></Enlace>
                <Enlace><FontAwesomeIcon icon={faInstagram}/></Enlace>
                <Enlace><FontAwesomeIcon icon={faYoutube}/></Enlace>
            </ContenedorEnlaces>
        </Enlaces>

        <Sugerencias>
                <Titulop>Enlaces sugeridos</Titulop>
                <Ap>Nosotros</Ap>
                <Ap>FAQ</Ap>
                <Ap>Políticas</Ap>
                <Ap>Ayuda</Ap>
                <Ap>Términos y condiciones</Ap>
        </Sugerencias>

        <Compras>
        <Titulop>Tienda</Titulop>
                <Ap>Hoteles</Ap>
                <Ap>Transporte</Ap>
                <Ap>Alimentos</Ap>
                <Ap>Club's nocturnos</Ap>
                <Ap>Parques acuáticos</Ap>
        </Compras>

        <Contactos>
            <Titulo>Contactos</Titulo>

            <Direccion>
                <Enlace>
                <FontAwesomeIcon icon={faMap}/>
                </Enlace>
                <Parrafo>Av.Jardines de San Mateo s/n, Sta Cruz Acatlán, 53150 Naucalpan de Juárez, Mex.</Parrafo>
            </Direccion>

            <Telefonos>
                <Enlace>
                <FontAwesomeIcon icon={faPhone}/>
                </Enlace>
                <Flex>
                <Phone>+52 55 5623 1715</Phone>
                <Phone>+52 55 1236 4568</Phone>
                </Flex>
            </Telefonos>
            <Correo>
                <Enlace>
                <FontAwesomeIcon icon={faEnvelope}/>
                </Enlace>
                <Phone>correo@unam.acatlan.mx</Phone>
            </Correo>
        </Contactos>

    </ContenedorFooter>
  )
}
const Phone=styled.a`
    text-decoration: none;
    font-size: 16px;
    color:white;
    transition: all ease 0.4s;
    cursor: pointer;
    font-family: 'Poppins';
    font-weight: 800;
    &:hover{
        color: #1bbad6;
    }

`;

const Flex=styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 140px;
`;

const ContenedorFooter=styled.div`
    width: 100%;
    height: 200px;
    background: rgba(0,0,0,0.8);
    display: flex;
    
`;

const Enlaces=styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    padding: 10px;
`;

const Sugerencias=styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

const Compras=styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

const Contactos=styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
`;


const Direccion=styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    gap: 15px;
`;

const Telefonos=styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
`;

const Correo=styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    padding-right: 100px;
`;

const Titulo=styled.h2`
    font-size: 40px;
    font-weight: 300;
    font-family: 'Roboto';
    color: white;
`;

const Titulop=styled.h2`
    font-size: 25px;
    font-weight: 200;
    font-family: 'Sans Serif';
    color:white;
`;

const Ap=styled.a`
    font-size: 16px;
    text-decoration: none;
    color:white;
    transition: all ease 0.4s;
    cursor: pointer;
    font-family: 'Poppins';
    font-weight: 800;
    &:hover{
        color: #1bbad6;
    }
`;

const Parrafo=styled.p`
    font-size: 15px;
    color: white;
    font: 'Sans Serif';
    font-weight: 400;
`;

const ContenedorEnlaces=styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Enlace=styled.a`
    text-decoration: none;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #444;
    font-size: 25px;
    transition: all ease 0.5s;

    &:hover{
        transform: scale(1.2);
        background: #666;
        transform: rotateX(360deg);
        cursor: pointer;
        color: #22b6a2;
    }

`;

export default Footer