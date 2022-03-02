import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const Hero = ({data}) => {


    const bgGetDataImage = getImage(data.sanityAboutPage.principalImagenDeFondo.asset)
    const bgGetDataImageAlt = data.sanityAboutPage.principalImagenDeFondo.alt

    return(
        <HeroContainer>
            <div className="image">
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
            <div className="text">
                <BlockContent
                    blocks={data.sanityAboutPage._rawPrincipalTexto}
                />
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    height: 100vh;
    position: relative;
    .image {
        height: 100%;
    }
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
            display: block;
            width: 100%;
            font-size: 7vw;
            color: var(--beige);
            text-align: center;
            @media (max-width: 680px){
                font-size: 2rem;
            }
        }
    }
`

export default Hero


