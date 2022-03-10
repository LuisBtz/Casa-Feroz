import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import Hero from "../components/mixologia/Hero.js";
import SliderMezcal from "../components/layout/sliderMezcal";
import Newsletter from "../components/layout/newsletter";
import Cocteles from "../components/mixologia/Cocteles";

// markup
export default function SingleMezcalPage({ data: { coctel, links } }) {



  return (
    <Layout>
        <Hero data={coctel}/>
        <MixologiaContainer id='mixologia'>
          <div className="texto">
            <h2>{coctel.subtitle}</h2>
            <p>{coctel.subtitleDescription}</p>
          </div>
            <ul className="links">
              {links.nodes.map(({ _key, title, slug}) => {
                  return (
                      <li className='coctel' key={_key}>
                        <Link
                        activeClassName="active"
                        to={`/mixologia/${slug.current}`} ><p>{title}<span></span></p></Link>
                      </li>
                  )
              })}
            </ul>
        </MixologiaContainer>
        <Cocteles data={coctel} />
        <SliderMezcal />
        <Newsletter />
    </Layout>
  );
}


const MixologiaContainer = styled.section`
  background-color: var(--blue);
  color: white;
  text-align: center;
  padding: 50px 20px 150px;
  @media (max-width: 650px) {
    padding: 50px 20px 50px;
  }
  .texto {
    margin-bottom: 50px;
  }
  .links {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
    height: 1px;
    background-color: white;
    justify-content: space-around;
    @media (max-width: 650px) {
      flex-direction: column;
      margin: 0 50px !important;
      width: 1px;
      height: 500px;
      a {
        width: 350px !important;
        text-align: left;
        p {
          margin: 0 30px !important;
          padding-top: 0 !important;
        }
        span {
          left: -7px !important;
          transform: none !important;
        }
      }
    }
    .active {
      span {
        background-color: white !important;
      }
    }
    a {
      display: block;
      width: 147px;
      position: relative;
      &:hover {
        span {
          background-color: white;
        }
        }
      span {
        position: absolute;
        left: 50%;
        top: -7px;
        transform: translateX(-50%);
        width: 14px;
        height: 14px;
        background-color: var(--blue);
        border: solid 1px white;
        border-radius: 50%;
        transition: all ease-in-out 250ms;
      }
      p {
        font-family: var(--bold);
        text-transform: uppercase;
        padding-top: 30px;
        @media (max-width: 800px) {
          font-size: 0.7rem;
        }
      }
    }
  }
 `



export const query = graphql`
  query($slug: String!) {
    links:   allSanityMixologiaPage {
      nodes {
        slug {
          current
        }
        _key
        title
      }
    }
    coctel: sanityMixologiaPage(slug: { current: { eq: $slug } }) {
      title
      subtitle
      subtitleDescription
      imagenPrincipal {
        alt
        asset {
          url
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
      cocteles {
        _key
        _rawTexto
        name
        imageCoctel {
          asset {
            url
          }
        }
      }
    }
  }
`;