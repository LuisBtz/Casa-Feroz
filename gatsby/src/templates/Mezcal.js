import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import Hero from "../components/mezcales/Hero";
import BlockContent from '@sanity/block-content-to-react';
import SliderMezcal from "../components/layout/sliderMezcal";
import Newsletter from "../components/layout/newsletter";

// markup
export default function SingleMezcalPage({ data: { mezcal, links } }) {



  return (
    <Layout>
        <Hero />
        <MezcalContainer id='mezcales'>
          <div className="iz">
            <ul className="links">
              {links.nodes.map(({ _key, title, slug}) => {
                  return (
                      <li className='mezcal' key={_key}>
                        <Link   activeStyle={{
                          color: "white",
                          backgroundColor: "var(--blue)"
                        }} 
                        to={`/mezcales/${slug.current}`} >{title}</Link>
                      </li>
                  )
              })}
            </ul>
            <div className="texto">
              <h1>{mezcal.title}</h1>
              <BlockContent
                  blocks={mezcal._rawTexto}
              />
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${mezcal.imageMezcal.asset.url})` }}
          className="de"></div>
        </MezcalContainer>
        <SliderMezcal />
        <Newsletter />
    </Layout>
  );
}


const MezcalContainer = styled.section`
  display: flex;
  @media (max-width: 885px) {
    flex-direction: column;
    .iz, .de {
      width: 100% !important;
    }
    .de {
      height: 100vh !important;
    }
  }
  .iz, .de {
    width: 50%;
    height: 100vh;
  }

  .iz {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1160px) {
      height: auto;
      .links {
        grid-template-columns: repeat(3, 1fr) !important;
      }
        .texto {
          width: 100% !important;
          padding-bottom: 25px !important;
        }
      }
    @media (max-width: 885px) {
      height: auto;
      .links {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      }
    .links {
      padding-top: 20px;
      padding-bottom: 50px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      
      .mezcal {
        a {
          border: solid 2px var(--blue);
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          padding: 5px; 
          font-family: var(--bold);
          height: 50px;
          font-size: 0.75rem;
        }
      }
    }
    .texto {
      align-self: center;
      width: 80%;
      margin: 0 auto;
      padding-bottom: 100px;
      p {
        padding: 10px 0;
      }
      h2 {
        font-family: var(--bold);
      }
      h1 {
        text-align: center;
        margin-bottom: 20px;
      }
    }

  }
  .de {
    background-size: cover;
    background-position: center;
    @media (max-width: 1160px) {
      height: auto;
    }
  }
 `



export const query = graphql`
  query($slug: String!) {
    links:   allSanityMezcalesPage {
      nodes {
        title
        _key
        slug {
          current
        }
      }
    }
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
            url
        }
        }
    }
  }
`;