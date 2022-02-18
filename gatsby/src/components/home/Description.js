import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { Link } from "gatsby";


const Description = ({data}) => {

    const bgGetDataImage = getImage(data.sanityHomePage.descripcionImagen.asset)
    const bgGetDataImageAlt = data.sanityHomePage.descripcionImagen.alt

    const title = data.sanityHomePage.descripcionTitulo


    return(
        <DescriptionContainer>
            <div className="image">
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
            <div className="text">
                <h2>{title}</h2>
                <BlockContent
                    blocks={data.sanityHomePage._rawDescripcionTexto}
                />
                <Link className="button">NUESTRA HISTORIA →</Link>
            </div>
        </DescriptionContainer>
    )
}

const DescriptionContainer = styled.section`
    height: 100vh;
    position: relative;
    border: solid 20px var(--blue);
    .image {
        height: 100%;
    }
    .text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 50px;
        background-color: var(--beige);
        width: 40%;
        padding: 50px;
        display: flex;
        flex-direction: column;
        @media (max-width: 1000px) {
            width: 400px;
        }
        @media (max-width: 680px) {
            width: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px 20px;
        }
        p {
            text-transform: uppercase;
            line-height: 1.5;
        }
        h2 {
            text-align: center;
        }
        .button {
            border: solid 3px var(--blue);
            padding: 5px 10px;
            text-align: center;
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
            display: inline-block;
            font-family: var(--bold);
            font-size: 1rem;
        }
    }
`

export default Description