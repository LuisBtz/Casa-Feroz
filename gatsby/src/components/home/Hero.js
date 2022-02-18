import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({data}) => {


    const bgGetDataImage = getImage(data.sanityHomePage.principalImagenDeFondo.asset)
    const bgGetDataImageAlt = data.sanityHomePage.principalImagenDeFondo.alt

    const title = data.sanityHomePage.principalTexto
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
                <h1>{title}</h1>
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
            color: white;
            text-align: center;
            @media (max-width: 680px){
                font-size: 2rem;
            }
        }
    }
`

export default Hero


