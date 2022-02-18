import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import AgeVerification from "../components/home/AgeVerification";
import Hero from "../components/home/Hero";
import Description from "../components/home/Description";

export const data = graphql`
  query {
    sanityAgeVerification {
      backgroundImage {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
      textoPrincipal
      title
      _rawTextoSecundario
    }
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
      logoBlanco {
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
    sanityHomePage {
      principalImagenDeFondo {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
      principalTexto
      descripcionImagen {
      alt
      asset {
        gatsbyImageData(
          layout: FULL_WIDTH
          outputPixelDensities: 1.5
          placeholder: DOMINANT_COLOR
        )
      }
    }
    descripcionTitulo
    _rawDescripcionTexto
    }
  }
`;


const IndexPage = ({data}) => {
  return(
    <Layout>
      <AgeVerification data={data} />
      <Hero data={data} />
      <Description data={data} /> 
    </Layout>
  )
}
export default IndexPage
