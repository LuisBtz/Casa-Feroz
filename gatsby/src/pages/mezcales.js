import React from 'react'
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import Hero from "../components/mezcales/Hero";
import BlockContent from '@sanity/block-content-to-react';
import SliderMezcal from "../components/layout/sliderMezcal";
import Newsletter from "../components/layout/newsletter";


export const data = graphql`
  query {
    allSanityMezcalesPage {
        nodes {
        title
        slug {
            current
        }
        _key
        imageMezcal {
            alt
            asset {
            gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
            url
            }
        }
        _rawTexto
        }
    }
  }
`;


const MezcalesPage = ({data}) => {
    return(
        <Layout>
        <Hero />
        <MezcalContainer id='mezcales'>
          <div className="iz">
            <ul className="links">
              {data.allSanityMezcalesPage.nodes.map(({ _key, title, slug}) => {
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
              <h1>{data.allSanityMezcalesPage.nodes[0].title}</h1>
              <BlockContent
                  blocks={data.allSanityMezcalesPage.nodes[0]._rawTexto}
              />
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${data.allSanityMezcalesPage.nodes[0].imageMezcal.asset.url})` }}
          className="de"></div>
        </MezcalContainer>
        <SliderMezcal />
        <Newsletter />
    </Layout>
    )
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
          transition: all 200ms ease-in-out;
          &:hover {
            background-color: var(--blue);
            color: white;
          }
        }
        &:first-child {
            a {
                background-color: var(--blue);
                color: white;
            }
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
        text-transform: uppercase;
      }
      h2 {
        font-family: var(--bold);
        text-transform: uppercase;
      }
      h1 {
        text-align: center;
        margin-bottom: 20px;
        text-transform: uppercase;
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


export default MezcalesPage