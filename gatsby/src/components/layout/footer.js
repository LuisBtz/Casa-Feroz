import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Footer = () => {
    const data = useStaticQuery(graphql`
query {
    sanitySettingsPage {
        logoBlanco2 {
        alt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
            )
        }
        }
        copyright
        linksFooter {
        _key
        text
        url
        }
        textoAdvertencia
        siguenosTexto
        redesSociales {
        _key
        url
        icon {
            alt
            asset {
            gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: BLURRED
            )
            }
        }
    }
    mail
    }
}
`);

const logoGetDataImage = getImage(data.sanitySettingsPage.logoBlanco2.asset)
const GetLogoDataImageAlt = data.sanitySettingsPage.logoBlanco2.alt

    return (
        <FooterContainer>
            <div className='iz'>
                <div className='logo'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={logoGetDataImage}
                        alt={GetLogoDataImageAlt}
                    />
                </div>
                <div className='texto'>
                    <p>{data.sanitySettingsPage.copyright}</p>
                </div>
            </div>
            <div className='ce'>
                <ul className='linksFooter'>
                    {data.sanitySettingsPage.linksFooter.map(({ _key, text, url }) => {
                        return (
                            <li key={_key} className='link' >
                                <a href={url} target='_blank' rel="noreferrer">{text}</a>  
                            </li>
                        );
                    })}
                </ul>
                <div className='warning'>
                    <p>{data.sanitySettingsPage.textoAdvertencia}</p>
                </div>
            </div>
            <div className='de'>
                    <div className='social'>
                        <p>{data.sanitySettingsPage.siguenosTexto}</p>
                        <div className='redes'>
                            {data.sanitySettingsPage.redesSociales.map(({ _key, url, icon }) => {
                                const getDataImage = getImage(icon.asset);
                                return (
                                        <a key={_key} href={url} target='_blank' rel="noreferrer">
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={getDataImage}
                                                alt={icon.alt}
                                            />
                                        </a>  
                                );
                            })}
                        </div>
                        <div className='mail'>
                            <a href={`mailto:${data.sanitySettingsPage.mail}`} rel="noreferrer">{data.sanitySettingsPage.mail}</a>
                        </div>
                    </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    background-color: var(--black);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    padding: 50px 20px;
    @media (max-width: 780px) {
        flex-direction: column;
        text-align: center;
        padding-bottom: 100px !important;
        .iz {
            height: auto !important;
            .logo {
                margin: 0 auto 50px;
            }
        }
        .ce {
            height: auto !important;
            margin: 50px auto;
            width: 100% !important;
            padding: 0 20px !important;
            .linksFooter  {
                grid-template-columns: repeat(2) !important;
                justify-content: center;
                text-align: center;
            }
            .warning {
                margin-top: 50px;
            }
        }
        .de {
            text-align: center !important;
            .redes {
                justify-content: center !important;
                a {
                    margin: 0 20px !important;
                }
            }
        }
    }
    .iz {
        width: auto;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .logo {
            width: 150px;
        }
    }
    .ce {
        width: 65%;
        padding: 0 50px;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .linksFooter {
            display: grid;
            grid-template-columns: repeat(2, 250px);
            justify-content: center;
            @media (max-width: 880px) {
                grid-template-columns: repeat(2, 180px);
            }
            .link {
                margin-bottom: 10px;
                a, p {
                    text-transform: uppercase;
                    font-family: var(--bold);
                }
            }
        }
        .warning {
            text-align: center;
        }
    }
    .de {
        width: auto;
        text-align: right;
        font-family: var(--bold);
        text-transform: uppercase;
        .social {
            .redes {
                display: flex;
                justify-content: end;
                margin-top: 20px;
                margin-bottom: 85px;
                a {
                    display: block;
                    margin-left: 20px;
                    width: 23px;
                }
            }
        }
    }

`

export default Footer