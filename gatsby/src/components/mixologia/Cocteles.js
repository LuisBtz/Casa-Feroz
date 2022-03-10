import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import BlockContent from '@sanity/block-content-to-react';
import "slick-carousel/slick/slick-theme.css"

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} onKeyDown={onClick}>
        <img src='/arrow-r.png' alt='arrow button right' />
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} onKeyDown={onClick}>
        <img src='/arrow-l-b.png' alt='arrow button left'  />
      </button>
    );
  }

const Cocteles = ({data}) => {

    const settings = {
        centerPadding: "0",
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        waitForAnimate: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };



    return(
        <CoctelesContainer {...settings}>
                        {data.cocteles.map(({ _key, _rawTexto, name, imageCoctel }) => {
                            return (
                                <MezcalContainer id='mezcales' key={_key}>
                                    <div className="iz">
                                        <div className="texto">
                                            <div className='preparado'>
                                                <strong>Preparado con:</strong>
                                                <strong>{name}</strong>
                                            </div>
                                            <h1>{name}</h1>
                                            <BlockContent
                                                blocks={_rawTexto}
                                            />
                                        </div>
                                    </div>
                                    <div style={{backgroundImage: `url(${imageCoctel.asset.url})` }} className="de"></div>
                                </MezcalContainer>
                            );
                        })}

        </CoctelesContainer>
    )
}

const CoctelesContainer = styled(Slider)`
.slick-prev:before, .slick-next:before {
    display: none;
}
.slick-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    img {
        width: 25px;
        @media (max-width: 730px) {
          width: 15px;
        }
    }
}
.slick-next {
    right: 20px;
    @media (max-width: 730px) {
      right: 10px;
    }
  }

.slick-prev {
    left: 20px;
    @media (max-width: 730px) {
      left: 10px;
    }
}

`


const MezcalContainer = styled.section`
  display: flex !important;
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
    border-top: solid 1px white;
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
      }
    }
    .texto {
        padding-top: 20px;
        border-top: solid 2px var(--blue);
        align-self: center;
        width: 95%;
        margin: 0 auto;
        padding-bottom: 100px;
        text-align: center;
        .preparado {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 50px;
            strong {
                text-transform: uppercase;
                width: 140px;
                display: block;
                color: var(--blue);
                &:last-child {
                    text-align: right;
                }
            }
        }
      p {
        padding: 10px 0;
      }
      h1 {
          width: 300px;
          margin: 0 auto;
      }
      p {
        width: 80%;
        margin: 0 auto;
        display: block;
        text-align: center;
      }
      h2, b, strong {
        font-family: var(--bold);
        font-weight: normal;
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

export default Cocteles