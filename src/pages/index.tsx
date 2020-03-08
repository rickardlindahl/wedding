import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CoverImage from "../components/images/cover-image"
import SEO from "../components/seo"
import Header from "../components/header"
import { useInView } from "react-intersection-observer"
import Ceremony from "../components/content/ceremony"
import Party from "../components/content/party"
import SpeechAndSpex from "../components/content/speech-and-spex"
import Food from "../components/content/food"
import CoverChargeAndGifts from "../components/content/cover-charge-and-gifts"
import Transportation from "../components/content/transportation"
import Accomodations from "../components/content/accomodations"
import RSVP from "../components/content/rsvp"

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  })

  console.log(
    "inView",
    inView,
    "entry.intersectionRatio",
    entry && entry.intersectionRatio
  )

  return (
    <>
      <SEO title="Home" />
      <CoverImage>
        <div className="sentinel" ref={ref}></div>
      </CoverImage>
      <Header
        siteTitle={data.site.siteTitle}
        isSticky={!inView}
      />
      {/* <div className="sticky-wrapper" style={{ height: "46px" }}>
        <div
          // className="header"
          style={{
            width: "100%",
            height: "46px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column-reverse",
            ...(inView
              ? {}
              : {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 9999,
                  boxShadow: "0 6px 30px rgba(0,0,0,0.05)"
                }),
            // position: !inView ? "fixed" : undefined,
          }}
        >
          <div className="header__hamburger-container">
            <Hamburger
              onToggle={() => {
                // console.log("toggle active", isActive)
                // setActive(!isActive)
              }}
              isActive={false}
            />
          </div>
        </div>
      </div> */}
      <Ceremony />
      <Party />
      <SpeechAndSpex />
      <Food />
      <CoverChargeAndGifts />
      <Transportation />
      <Accomodations />
      <RSVP />
      <footer>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </footer>
      </>
  )
}

export default IndexPage
