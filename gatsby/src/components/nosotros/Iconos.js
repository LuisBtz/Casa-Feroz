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
.iconos {
    position: absolute;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    .icon {
        width: 250px;
    }
}

`
export default Iconos