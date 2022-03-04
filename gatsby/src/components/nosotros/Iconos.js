import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Iconos = ({data}) => {

    const bgGetDataImage = getImage(data.sanityAboutPage.iconosImagenFondo.asset)
    const bgGetDataImageAlt = data.sanityAboutPage.iconosImagenFondo.alt

    return(
        <IconosContainer>
            <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                image={bgGetDataImage}
                alt={bgGetDataImageAlt}
            />
            <div className='iconos'>
                {data.sanityAboutPage.iconosIconos.map(( icon ) => {
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
        </IconosContainer>
    )
}

const IconosContainer = styled.section`
position: relative;
display: flex;
justify-content: center;
align-content: center;
height: 100%;
.iconos {
    align-self: center;
    position: absolute;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 120px;
    justify-content: center;
    align-items: center;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    @media (max-width: 800px) {
        grid-gap: 30px;
        width: 90%;
    }
    .icon {
        align-self: center;
        width: 100%;
        margin: 0 auto;
    }
}

`
export default Iconos