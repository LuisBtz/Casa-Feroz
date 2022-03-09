import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({data}) => {

    const bgGetDataImage = getImage(data.imagenPrincipal.asset)
    const bgGetDataImageAlt = data.imagenPrincipal.alt

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
                <h1>NUESTROS CÓCTELES</h1>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    height: 100%;
    position: relative;
    .image {
        height: 100vh;
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


