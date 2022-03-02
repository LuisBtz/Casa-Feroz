import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const Header = () => {
    const data = useStaticQuery(graphql`
query {
    sanitySettingsPage {
        logoNegro {
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
`);

const logoGetDataImage = getImage(data.sanitySettingsPage.logoNegro.asset)
const logoGetDataImageAlt = data.sanitySettingsPage.logoNegro.alt


const [clickHam, setClickHam] = useState(false);


    return(
        <HeroContainer>
            <button className={clickHam ? 'ham clicked' : 'ham'} onClick={() => setClickHam(!clickHam)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <ul className={clickHam ? 'links show' : 'links'}>
                <li><Link to='nosotros'>Nosotros</Link></li>
                <li><Link to='/'>Mezcales</Link></li>
                <li className="image">
                    <Link to='/'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={logoGetDataImage}
                            alt={logoGetDataImageAlt}
                        />
                    </Link>
                </li>
                <li><Link to='/'>Mixologia</Link></li>
                <li><Link to='/'>Encuentranos</Link></li>
            </ul>

        </HeroContainer>
    )
}

const HeroContainer = styled.nav`
width: 100%;
margin: 20px auto;
position: absolute;
top: 0;
left: 0;
z-index: 1;
    ul.links {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @media (max-width: 900px) {
                    width: 95%;
                    padding: 0 20px;
                }
        @media (max-width: 800px) {
            overflow: hidden;
            height: 80px;
            justify-content: flex-start;
            flex-direction: column;
            transition: all ease-in-out 350ms;
            li {
                a {
                    font-size: 1.2rem;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                &:nth-child(1) {
                order: 2;
                }
                &:nth-child(2) {
                    order: 3;
                }
                &:nth-child(3) {
                    order: 1;
                    margin-bottom: 30px;
                }
                &:nth-child(4) {
                    order: 4;
                }
                &:nth-child(5) {
                    order: 5;
                }
            }
        }
        li {
            align-self: center;
            padding-left: 10px;
                padding-right: 10px;
            a {
                font-family: var(--bold);
                text-transform: uppercase;
                display: inline-block;
                &:hover {
                    border-bottom: solid 1px black;
                }
                
            }
        }
        li.image {
            a {
                width: 250px;
                @media (max-width: 800px) {
                    width: 200px;
                }
                &:hover {
                    border: none;
                }
            }
        }
    }
    ul.show {
        @media (max-width: 800px) {
            height: 280px;
        }
    }
    .ham {
        position: absolute;
        top: 20px;
        right: 30px;
        width: 30px;
        height: 30px;
        display: none;
        @media (max-width: 800px) {
            display: block;
        }
        .line {
            position: relative;
            height: 1px;
            width: 100%;
            background-color: var(--black);
            margin-bottom: 10px;
            transition: all 200ms ease-in-out;
        }
    }
    .clicked {
        .line {
            &:nth-child(1){
                transform: rotate(45deg);
                top: 5px;
            }
            &:nth-child(2){
                display: none;
            }
            &:nth-child(3){
                transform: rotate(-45deg);
                bottom: 5px;
            }
        }
    }
`

export default Header