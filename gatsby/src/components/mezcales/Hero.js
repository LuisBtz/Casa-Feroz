import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return(
        <HeroContainer>
            <div className="image">
                <StaticImage 
                   style={{ height: '100%' }}
                    src="mezcales.jpg" 
                    alt="Mezcales Casa Feroz" 
                />
            </div>
            <div className="text">
                <h1>NUESTROS MEZCALES</h1>
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


