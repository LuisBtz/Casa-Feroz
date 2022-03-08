import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Hero from "../components/mezcales/Hero";

// markup
export default function SingleMezcalPage({ data: { mezcal } }) {

  const heroImage = getImage(mezcal.imageMezcal.asset);


  return (
    <Layout>
        <Hero />

        <GatsbyImage image={heroImage} alt={mezcal.imageMezcal.alt} />
        <p>{mezcal.title}</p>
    </Layout>
  );
}



export const query = graphql`
  query($slug: String!) {
    mezcal: sanityMezcalesPage(slug: { current: { eq: $slug } }) {
        title
        _rawTexto
        imageMezcal {
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