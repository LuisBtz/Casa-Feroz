import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Footer from "./footer"



function Layout({ children, whiteHeader }) {

  
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <Header whiteHeader={whiteHeader} />
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout