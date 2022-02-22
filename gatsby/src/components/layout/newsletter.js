import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Newsletter = () => {


    const data = useStaticQuery(graphql`
query {
    sanitySettingsPage {
      iconoBlanco {
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

const iconGetDataImage = getImage(data.sanitySettingsPage.iconoBlanco.asset)
const iconGetDataImageAlt = data.sanitySettingsPage.iconoBlanco.alt


    return(
        <NewsletterContainer>
            <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                image={iconGetDataImage}
                alt={iconGetDataImageAlt}
            />
        </NewsletterContainer>
    )
}

const NewsletterContainer = styled.section`
    background-color: var(--blue);
    margin-top: -5px;
`

export default Newsletter