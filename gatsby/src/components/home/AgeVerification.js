import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AgeVerification = ({data}) => {

    const backgroundImageAlt = data.sanityAgeVerification.backgroundImage.alt
    const getDataImage = getImage(data.sanityAgeVerification.backgroundImage.asset)

    const logoGetDataImage = getImage(data.sanitySettingsPage.logoBlanco.asset)
    const logoGetDataImageAlt = data.sanitySettingsPage.logoBlanco.alt

    const iconGetDataImage = getImage(data.sanitySettingsPage.iconoBlanco.asset)
    const iconGetDataImageAlt = data.sanitySettingsPage.iconoBlanco.alt

    return(
        <AgeVerificationContainer>
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
                </div>
            </div>
        </AgeVerificationContainer>
    )
}

const AgeVerificationContainer = styled.section`
    width: 100vw;
    height: 100vh;
    .overlay {
        position: absolute;
        z-index: 2;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        background-image: url('/blueBackground.svg');
        width: 500px;
        text-align: center;
        color: white;
        .icon {
            width: 100px;
            margin: 20px auto;
        }
    }
    .logo {
            width: 300px;
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
        }
`

export default AgeVerification