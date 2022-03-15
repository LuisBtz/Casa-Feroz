import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Description = ({data}) => {
    const title = data.sanityAboutPage.descripcionTitulo
    const bgGetDataImage = getImage(data.sanityAboutPage.descripcionIcono.asset)
    const bgGetDataImageAlt = data.sanityAboutPage.descripcionIcono.alt
    return(
        <DescriptionContainer>
            <div className='text'>
                <h1>{title}</h1>
                <BlockContent
                    blocks={data.sanityAboutPage._rawDescripcionTexto}
                />
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </div>
            </div>
            <div className='images'>
                {data.sanityAboutPage.descripcionImagenes.map(( icon ) => {
                    const getDataImage = getImage(icon.asset);
                    return (
                        <div key={icon._key} className='icon'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImage}
                                alt={icon.alt}
                            />
                        </div>
                    )
                })}
            </div>
        </DescriptionContainer>
    )
}

const DescriptionContainer = styled.section`
padding-bottom: 50px;
.text {
    width: 80%;
    margin: 0 auto;
    padding: 50px 0 0;
    h1 {
        text-align: center;
        display: block;
        width: 100%;
        font-size: 7rem;
        margin-bottom: 50px;
        @media (max-width: 1250px){
            font-size: 6.5vw;
        }
        @media (max-width: 680px){
            font-size: 2rem;
        }
    }
    p {
        width: 50%;
        margin: 0 auto;
        text-transform: uppercase;
        @media (max-width: 800px){
            width: 80%;
        }
        @media (max-width: 680px){
            width: 90%;
        }
    }
    .image {
        margin: 50px auto;
        width: 150px;
        @media (max-width: 680px){
            width: 100px;
        }
    }
}
.images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    padding: 0 100px;
    margin: 0 auto;
    @media (max-width: 680px){
        grid-template-columns: repeat(2, 1fr);
    }
}
`

export default Description