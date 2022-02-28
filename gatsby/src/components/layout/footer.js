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
`

export default Footer