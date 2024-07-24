'use client'
import React from 'react'
import data from './../../data/destinos';
import styled from 'styled-components';

function ObtenerDatos(id){

    console.log(id);

  const resultado= data.filter((pais)=>{
        if(pais.id===id){
        
            return pais;
        }
    })

    return resultado[0];
}


function Pais({params}) {

        
            const pais=ObtenerDatos(params.pais);
            console.log(pais); 
        //``

  return (
        <Contenedor>
            <Titulo>{pais.nombre}</Titulo>

            <ContenedorInf>

            <ContenedorImg>
                <Imagen src={pais.img}/>
            </ContenedorImg>
            <ContenedorParrafo>
                
                <Parrafo>{pais.descripcionL}</Parrafo>
                </ContenedorParrafo>        
            </ContenedorInf>

            <ContenedorInf>

                
                <ContenedorParrafo>
                    
                    <Parrafo>{pais.descripcionM}</Parrafo>
                    </ContenedorParrafo>        
                <ContenedorImg>
                    <Imagen src={pais.img1}/>
                </ContenedorImg>
                </ContenedorInf>

        <ContenedorImgG>
            <ImagenG src={pais.img2}/>
        </ContenedorImgG>

        </Contenedor>
  )
}

const Contenedor=styled.div`
    width: 90%;
    height: auto;
    
    margin: 40px auto;
`;

const Titulo=styled.h2`
    font-size: 60px;
    font-weight: 500;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    text-align: center;
`;

const ContenedorInf=styled.div`
    width: 100%;
    margin: 20px auto;
    height: 500px;
    display: flex;
    gap: 25px;
`;

const ContenedorImg=styled.div`
    width: 60%;
    height: 80%;
    margin: auto 0;
`;

const Imagen=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all ease 0.6s;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`;

const ContenedorParrafo=styled.div`
    width: 40%;
    height: 80%;
    margin:auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Parrafo=styled.p`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    font-family: sans-serif;
    color: rgba(0,0,0,0.8);

`;

const ContenedorImgG=styled.div`
    width: 100%;
    height: 400px;
`;

const ImagenG=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export default Pais