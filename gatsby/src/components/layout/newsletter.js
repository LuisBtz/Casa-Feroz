import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Form from './form';

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
          <div className='contenedor'>
            <div className='imagen'>
              <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                image={iconGetDataImage}
                alt={iconGetDataImageAlt}
              />
            </div>
            <Form />
          </div> 
        </NewsletterContainer>
    )
}

const NewsletterContainer = styled.section`
    background-color: var(--blue);
    margin-top: -7px;
    padding-top: 150px;
    padding-bottom: 150px;
    @media (max-width: 750px) {
        padding-top: 50px;
        padding-bottom: 50px;
      }
    .contenedor {
      width: 50%;
      margin: 0 auto;
      text-align: center;
      @media (min-width: 1500px) {
        width: 750px !important;
      }
      @media (max-width: 750px) {
        width: 80%;
      }
      .imagen {
        width: 120px;
        margin: 0 auto;
      }
    }
`


export default Newsletter