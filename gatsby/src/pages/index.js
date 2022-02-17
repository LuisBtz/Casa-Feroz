import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import AgeVerification from "../components/home/AgeVerification";

export const data = graphql`
  query {
    sanityAgeVerification {
      backgroundImage {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      textoPrincipal
      title
      textoSecundario {
        _rawChildren
      }
    }
    sanitySettingsPage {
      iconoBlanco {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      logoBlanco {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
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
    </Layout>
  )
}
export default IndexPage
