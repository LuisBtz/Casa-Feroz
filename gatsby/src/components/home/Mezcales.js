import React from 'react'
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Mezcales = ({data}) => {

    const bgGetDataImage = getImage(data.sanityHomePage.mezcalesImagenFondoo.asset)
    const bgGetDataImageAlt = data.sanityHomePage.mezcalesImagenFondoo.alt

    const title = data.sanityHomePage.mezcalesTitulo
    const subtitle = data.sanityHomePage.mezcalesSubtitulo

    return(
        <MezcalesContainer>
            <div className="image">
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>

            <div className="text">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
            </div>
            <div className='mezcales'>
                {data.sanityHomePage.mezcales.map(({ _key, mezcalName, mezcalUrl, mezcalImage}) => {
                    const getDataImage = getImage(mezcalImage.asset);
                    return (
                        <div className='mezcal' key={_key} data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={getDataImage}
                                alt={mezcalImage.alt}
                            />
                            <a className='buttoon' href={mezcalUrl} target='_blank' rel="noreferrer">{mezcalName}</a>
                        </div>
                    )
                })}
            </div>
        </MezcalesContainer>
    )
}

const MezcalesContainer = styled.section`
    position: relative;
    .image {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .text {
        text-align: center;
        color: white;
        padding-top: 50px;
        padding-bottom: 50px;
        h2 {
            font-size: 7vw;
            @media (max-width: 680px){
                padding: 20px 20px 20px;
                font-size: 3rem;
            }
        }
        h3 {
            font-size: 1.5vw;
            @media (max-width: 680px){
                font-size: 1.2rem;
                padding: 0px 20px 20px;
            }
        }
    }
    .mezcales {
        display: flex;
        width: 80%;
        margin: 0 auto;
        padding-bottom: 50px;
        @media (max-width: 975px) {
            width: 90%;
        }
        @media (max-width: 860px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 50px;
            .mezcal {
                margin: 0 !important;
            }
        }
        @media (max-width: 500px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 50px;
            width: 80%;
        }
        .mezcal {
            width: 100%;
            margin-left: 20px;
            margin-right: 20px;
            .buttoon {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                text-align: center;
                padding: 5px;
                background-color: var(--beige);
                height: 45px;
                border: solid 2px var(--blue);
                font-size: .8rem;
                font-family: var(--bold);
            }
        }
    }
`

export default Mezcales