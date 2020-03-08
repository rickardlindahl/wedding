import React from "react"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import Parallax from "../components/parallax/parallax"
import ParallaxGroup from "../components/parallax/parallax-group"
import ParallaxLayer from "../components/parallax/parallax-layer"
import Header from "../components/header"
import ImageRings from "../components/images/image-rings"
import Hamburger from "../components/hamburger"
import { useInView } from "react-intersection-observer"
import ImageBaggbole from "../components/images/image-baggbole"
import ImageFood from "../components/images/image-food"
import ImageChampagne from "../components/images/image-champagne"
import ImageTransportation from "../components/images/image-transportation"
import ImageGifts from "../components/images/image-gifts"
import ImageAccomodations from "../components/images/image-accomodations"
import ImageRSVP from "../components/images/image-rsvp"
import ContentBlock from "../components/content-block"
import Ceremony from "../components/content/ceremony"
import Party from "../components/content/party"
import SpeechAndSpex from "../components/content/speech-and-spex"
import Food from "../components/content/food"
import CoverChargeAndGifts from "../components/content/cover-charge-and-gifts"
import Transportation from "../components/content/transportation"
import Accomodations from "../components/content/accomodations"
import RSVP from "../components/content/rsvp"

const IndexPage: React.FC = () => {
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
    <Layout>
      <SEO title="Home" />
      <div
        // className="header"
        style={{
          width: "100%",
          height: "46px",
          backgroundColor: "green",
          display: "flex",
          position: "fixed",
          top: "-46px",
          zIndex: 9999,
          flexDirection: "column-reverse",
          ...(inView
            ? {}
            : {
                top: 0,
                left: 0,
                backgroundColor: "orange",
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
      <Parallax>
        <ParallaxGroup>
          <ParallaxLayer layer="deep">
            <div className="image-filter">
              <Image className="" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer layer="base">
            <div
              style={{ background: "transparent", height: "46px" }}
              ref={ref}
            />
            <div className="sticky-wrapper" style={{ height: "46px" }}>
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
                        backgroundColor: "orange",
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
            </div>
            <Ceremony />
            <Party />
            <SpeechAndSpex />
            <Food />
            <CoverChargeAndGifts />
            <Transportation />
            <Accomodations />
            <RSVP />
          </ParallaxLayer>
        </ParallaxGroup>
      </Parallax>
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
    </Layout>
  )
}

export default IndexPage
