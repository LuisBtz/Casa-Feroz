import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AgeVerification = ({data}) => {

    const session = "test";
    const [showModal, setShowModal] = useState(false);
    const hideModal = () => {
      console.log("hideModal");
      const modalKey = "modalSession";
      localStorage.setItem(modalKey, session);
      setShowModal(false);
    };

    useEffect(() => {
      const modalKey = "modalSession";
      const modalSession = localStorage.getItem(modalKey);
      setShowModal(modalSession !== session);
    },[showModal, hideModal]);




    const backgroundImageAlt = data.sanityAgeVerification.backgroundImage.alt
    const getDataImage = getImage(data.sanityAgeVerification.backgroundImage.asset)

    const logoGetDataImage = getImage(data.sanitySettingsPage.logoBlanco.asset)
    const logoGetDataImageAlt = data.sanitySettingsPage.logoBlanco.alt

    const iconGetDataImage = getImage(data.sanitySettingsPage.iconoBlanco.asset)
    const iconGetDataImageAlt = data.sanitySettingsPage.iconoBlanco.alt

    return(
        <div>
            {showModal ? 
            <AgeVerificationContainer >
            <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                image={getDataImage}
                alt={backgroundImageAlt}
            />
            <div className="logo">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={logoGetDataImage}
                        alt={logoGetDataImageAlt}
                    />
            </div>
            <div className="overlay">
                <div className="container">
                    <div className="icon">
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={iconGetDataImage}
                            alt={iconGetDataImageAlt}
                        />
                    </div>
                    <p className="title">{data.sanityAgeVerification.textoPrincipal}</p>
                    <div className="buttons">
                        <button onClick={hideModal}>Si</button>
                        <button>No</button>
                    </div>
                    <div className="texto">
                        <BlockContent
                            blocks={data.sanityAgeVerification._rawTextoSecundario}
                        />
                    </div>
                </div>
            </div>
        </AgeVerificationContainer>
            : ""}
            
        </div>
        
    )
}

const AgeVerificationContainer = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    .overlay {
        position: absolute;
        z-index: 9;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        background-image: url('/blueBackground.svg');
        width: 500px;
        text-align: center;
        color: white;
        @media (max-width: 680px) {
            width: 85%;
        }
        
        .icon {
            width: 100px;
            margin: 20px auto;
            @media (max-width: 680px) {
                width: 90px;
            }
        }
        .buttons {
            button {
                color: white;
                font-size: 2vw;
                font-family: var(--bold);
                padding-top: 20px;
                border-bottom: solid 1px white;
                margin-left: 10px;
                margin-right: 10px;
                text-transform: uppercase;
                @media (max-width: 680px) {
                    font-size: 25px;
                }
                @media (min-width: 1500px) {
                    font-size: 30px
                }
            }
        }
        .texto {
            padding-bottom: 20px;
            padding-top: 20px;
            p {
                margin-bottom: 20px;
                line-height: 1.5;
            }
            a {
                text-decoration: underline
            }
        }
    }
    .logo {
            width: 300px;
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            @media (max-width: 680px) {
                width: 250px;
            }
        }
`

export default AgeVerification