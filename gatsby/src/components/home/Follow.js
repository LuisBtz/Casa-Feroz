import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Follow = ({data}) => {

    const title = data.sanityHomePage.followTitle
    const url = data.sanityHomePage.followUrl

    return(
        <FollowContainer>

            <div className='texto'>
                <h2>{title}</h2>
                <a className='buttoon' href={url} target='_blank' rel="noreferrer">SÍGUENOS →</a>
            </div>

            <div className='imagenes'>
                {data.sanityHomePage.followImagenes.map(( followImagen ) => {
                    const getDataImage = getImage(followImagen.asset);
                    return (
                        <div className='imagen' key={followImagen._key}>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImage}
                                alt={followImagen.alt}
                            />
                        </div>
                    )
                })}
            </div>

        </FollowContainer>
    )
}

const FollowContainer = styled.section`
    background-color: var(--black);
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    height: calc(1020px + 100px);
    position: relative;
    @media (max-width: 680px) {
                height: auto;
            }
    .imagenes {
        width: 80%;
        margin: 0 auto;
        position: relative;
        top: 0;
        left: 0;
        @media (max-width: 825px) {
            width: 90%;
        }
        @media (max-width: 680px) {
                width: 80%;
            }
        .imagen {
            position: absolute;
            width: 33.33%;
            height: 340px;
            @media (max-width: 680px) {
                position: static;
                transform: none !important;
                width: 100%;
            }
            &:nth-child(1) {
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }
            &:nth-child(2) {
                top: 170px;
                right: 0;
            }
            &:nth-child(3) {
                top: 510px;
                right: 0;
            }
            &:nth-child(4) {
                top: 680px;
                left: 50%;
                transform: translateX(-50%);
            }
            &:nth-child(5) {
                top: 510px;
                left: 0;
            }
            &:nth-child(6) {
                top: 170px;
                left: 0;
            }
        }
    }
    .texto {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        @media (max-width: 680px) {
                position: static;
                transform: none !important;
                margin-bottom: 50px;
            }
        h2 {
            width: 80%;
            margin: 0 auto 20px;
            padding: 10px;
            display: block;
        }
        a {
            display: inline-block;
            font-family: var(--bold);
            border: solid 2px var(--blue);
            padding: 10px 50px;
            @media (max-width: 825px) {
                padding: 10px 20px;
            }
        }
    }
`

export default Follow