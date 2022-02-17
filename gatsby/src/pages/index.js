import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import AgeVerification from "../components/home/AgeVerification";
import Hero from "../components/home/Hero";

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
  }
`;


const IndexPage = ({data}) => {
  return(
    <Layout>
      <AgeVerification data={data} />
      <Hero />
    </Layout>
  )
}
export default IndexPage
