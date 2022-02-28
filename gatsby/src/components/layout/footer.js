import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';


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
    }
}
`);
    return (
        <FooterContainer>
            <div className='iz'>

            </div>
            <div className='ce'>

            </div>
            <div className='de'>

            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`

`

export default Footer