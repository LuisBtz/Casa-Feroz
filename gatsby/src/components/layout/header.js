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
            <div className="desk">
                <ul className='links'>
                    <li><Link to='/nosotros'>Nosotros</Link></li>
                    <li><Link to='/mezcales'>Mezcales</Link></li>
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
            </div>
            

            <div className="movil">
                <button className={clickHam ? 'ham clicked' : 'ham'} onClick={() => setClickHam(!clickHam)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
                <div className="image">
                    <Link to='/'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={logoGetDataImage}
                            alt={logoGetDataImageAlt}
                        />
                    </Link>
                </div>
                <ul className={clickHam ? 'links show' : 'links'} onClick={() => setClickHam(!clickHam)}>
                    <li><Link to='/nosotros'>Nosotros</Link></li>
                    <li><Link to='/mezcales'>Mezcales</Link></li>
                    <li><Link to='/'>Mixologia</Link></li>
                    <li><Link to='/'>Encuentranos</Link></li>
                </ul>
            </div>

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
@media (max-width: 800px) {
    margin-top: 0;
}
.desk {
    @media (max-width: 800px) {
            display: none;
        }
    ul.links {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @media (max-width: 900px) {
                    width: 95%;
                    padding: 0 20px;
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
                &:hover {
                    border: none;
                }
            }
        }
    }

}
.movil {
    display: none;
    @media (max-width: 800px) {
            display: block;
        }
    .image {
        width: 200px;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
    }
    .links {
        height: 100vh;
        position: absolute;
        top: 0;
        right: -100%;
        background-color: var(--beige);
        width: 85%;
        padding-top: 100px;
        padding-right: 30px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-around;
        box-sizing: border-box;
        transition: right ease-in-out 350ms;
        border-left: solid 5px var(--blue);
        a {
            font-size: 2rem;
            font-family: var(--bold);
        }
    }
    .show {
        right: 0;
    }
    .ham {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 30px;
        height: 30px;
        z-index: 2;
        .line {
            position: relative;
            height: 2px;
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
                top: 6px;
            }
            &:nth-child(2){
                display: none;
            }
            &:nth-child(3){
                transform: rotate(-45deg);
                bottom: 6px;
            }
        }
    }
}
    
`

export default Header