import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
        <img src='/arrow-l.png' alt='arrow button left'  />
      </button>
    );
  }



const SliderMezcal = () => {

    const data = useStaticQuery(graphql`
query {
    sanityCarrusel {
    title
    carouselSubtitle
    carousel {
      _key
      _rawSlideText
      slideImage {
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
}
`);

    const settings = {
        centerPadding: "0",
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        waitForAnimate: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: function(i) {
          return (
              <button><span>{i + 1}.</span></button>
          );
        },
      };


    return(
        <Container>
            <div className='heroText'>
                <h2>{data.sanityCarrusel.title}</h2>
                <h3>{data.sanityCarrusel.carouselSubtitle}</h3>
            </div>
            <SliderContainer  {...settings}>
            {data.sanityCarrusel.carousel.map(({ _key, _rawSlideText, slideImage }) => {
                    const bgGetDataImage = getImage(slideImage.asset)
                    const bgGetDataImageAlt = slideImage.alt
              return (
                <Slide
                    key={_key}
                    className='slide'
                >
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                    <div className='texto'>
                        <BlockContent
                            blocks={_rawSlideText}
                        />
                    </div>
                    
                </Slide>
              );
            })}
            </SliderContainer>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    .heroText {
        position: absolute;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        top: 50px;
        z-index: 1;
        color: var(--beige);
        width: 100%;
        h2 {
            font-size: 6vw;
        }
        h3 {
            font-size: 1.5vw;
        }
        @media (max-width: 862px) {
          top: 20px;
          width: 90%;
          h2 {
            font-size: 2rem;
          }
          h3 {
            font-size: .85rem;
          }
        }
    }
`

const SliderContainer = styled(Slider)`
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

.slick-dots {
    position: absolute;
    bottom: 80px;
    display: flex !important;
    justify-content: space-around;
    align-items: center;
    height: 2px;
    background-color: var(--beige);
    width: 50%;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 862px) {
      bottom: 30px;
    }
    @media (max-width: 730px) {
      width: 80%;
    }
}

.slick-dots li button:before {
    display: none;
}

.slick-dots li {
    width: 10px;
    height: 14px;
}

.slick-dots li button {
    background-color: var(--black);
    border-radius: 50%;
    border: solid 2px var(--beige);
    width: 10px;
    height: 10px;
}

.slick-dots li button span {
  position: absolute;
  font-size: 15px;
  color: var(--beige);
  left: 3px;
  top: -15px;
  font-family: var(--bold);
}

.slick-dots li.slick-active button {
    background-color: var(--beige);
}

`;

const Slide = styled.div`
position: relative;
height: auto;
.texto {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('/backgroundGray.jpg');
    background-size: cover;
    text-align: center;
    padding: 50px 20px;
    border: solid 5px var(--blue);
    width: 600px;
    p {
        text-transform: uppercase;
    }
    @media (max-width: 730px) {
      padding: 20px 20px;
    }
}
@media (max-width: 730px) {
  height: 550px;
  .texto {
    width: 80%;
  }
}
`;



export default SliderMezcal;