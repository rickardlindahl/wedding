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
            <ContentBlock renderImage={() => <ImageRings />} title="Vigsel">
              <p>14:00</p>
              <p>Baggböle Herrgård</p>
              <p>905 92, Umeå</p>
              <br />
              <p>Era barn är varmt välkomna till vigseln.</p>
            </ContentBlock>
            <ContentBlock renderImage={() => <ImageBaggbole />} title="Bröllopsfest">
              <p>17:00 - 03:00</p>
              <p>Baggböle Herrgård</p>
              <br />
              <p>
                Vi älskar era barn men under bröllopsfesten
                <br />
                älskar vi era barnvakter.
              </p>
            </ContentBlock>
            <ContentBlock renderImage={() => <ImageChampagne />} title="Tal &amp; spex">
              <p>Vill du göra något särskilt för brudparet?</p>
              <br />
              <p>
                Alla tal och spex meddelas till toastparet på{" "}
                <a href="mailto:linneaochrickard@gmail.com">
                  linneaochrickard@gmail.com
                </a>
                .
              </p>
              <br />
              <p>
                Toastparet har även koll på lokal, logistik och tekniska
                förutsättningar.
              </p>
            </ContentBlock>
            <ContentBlock renderImage={() => <ImageFood />} title="Mat">
              <p>
                All specialkost meddelas till toastparet på{" "}
                <a href="mailto:linneaochrickard@gmail.com">
                  linneaochrickard@gmail.com
                </a>
                .
              </p>
            </ContentBlock>
            <ContentBlock renderImage={() => <ImageGifts />} title="Kuvertavgift &amp; Presenter">
              <p>Shizzz</p>
            </ContentBlock>
            <ContentBlock renderImage={() => <ImageTransportation />} title="Transport">
            <p>
                Busstransport mellan Scandic Hotel Plaza och Baggböle Herrgård.
              </p>
              <br />
              <ul>
                <li>
                  <p>kl 13:30 - Plaza &#8594; Baggböle Herrgård</p>
                </li>
                <li>
                  <p>kl 01:00 - Baggböle Herrgård &#8594; Plaza</p>
                </li>
                <li>
                  <p>kl 03:15 - Baggböle Herrgård &#8594; Plaza</p>
                </li>
              </ul>
              <br />
              <p>
                Anmäl plats till toastparet på{" "}
                <a href="mailto:linneaochrickard@gmail.com">
                  linneaochrickard@gmail.com
                </a>
                .
              </p>
            </ContentBlock>
            <ContentBlock renderImage={() => <ImageAccomodations />} title="Boende">
              <p>Shizzzleeee</p>
            </ContentBlock>
            <ContentBlock renderImage={() => <ImageRSVP />} title="O.S.A.">
              <p>Svara oss ffs!!</p>
            </ContentBlock>
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
