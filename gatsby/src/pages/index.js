import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import AgeVerification from "../components/home/AgeVerification";
import Hero from "../components/home/Hero";
import Description from "../components/home/Description";
import Mezcales from '../components/home/Mezcales';
import Follow from "../components/home/Follow";
import SliderMezcal from "../components/layout/sliderMezcal";

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
      #hero
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
      #description
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
    #mezcales
    mezcalesTitulo
    mezcalesSubtitulo
    mezcalesImagenFondoo {
      alt
      asset {
        gatsbyImageData(
          layout: FULL_WIDTH
          outputPixelDensities: 1.5
          placeholder: BLURRED
        )
      }
    }
    mezcales {
      mezcalName
      mezcalUrl
      _key
      mezcalImage {
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
      #Follow
      followTitle
      followUrl
      followImagenes {
        alt
        _key
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
`;


const IndexPage = ({data}) => {
  return(
    <Layout>
      <AgeVerification data={data} />
      <Hero data={data} />
      <Description data={data} /> 
      <Mezcales data={data} />
      <Follow data={data} />
      <SliderMezcal />
    </Layout>
  )
}
export default IndexPage
