import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Hero from "../components/nosotros/Hero";
import Iconos from "../components/nosotros/Iconos";
import Description from "../components/nosotros/Descripcion";
import SliderMezcal from "../components/layout/sliderMezcal";
import Newsletter from "../components/layout/newsletter";

export const data = graphql`
  query {
    sanityAboutPage {
      _rawPrincipalTexto
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
      iconosImagenFondo {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
      iconosIconos {
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
      descripcionTitulo
      _rawDescripcionTexto
      descripcionIcono {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
      descripcionImagenes {
        _key
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
`;


const IndexPage = ({data}) => {
  return(
    <Layout>
      <Hero data={data} />
      <Iconos data={data} />
      <Description data={data} />
      <SliderMezcal />
      <Newsletter />
    </Layout>
  )
}
export default IndexPage
