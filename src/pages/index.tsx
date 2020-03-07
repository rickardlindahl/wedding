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
            <div className="content-container">
              <div className="image-container">
                <ImageRings />
              </div>
              <h2 className="subtitle">Vigsel</h2>
              <div className="separator" />
              <p>14:00</p>
              <p>Baggböle Herrgård</p>
              <p>905 92, Umeå</p>
              <br />
              <p>Era barn är varmt välkomna till vigseln.</p>
            </div>
            <div className="content-container">
              <div className="image-container">
                <ImageBaggbole />
              </div>
              <h2 className="subtitle">Bröllopsfest</h2>
              <div className="separator" />
              <p>17:00 - 03:00</p>
              <p>Baggböle Herrgård</p>
              <br />
              <p>
                Vi älskar era barn men under bröllopsfesten
                <br />
                älskar vi era barnvakter.
              </p>
            </div>
            <div className="content-container">
              <div className="image-container">
                <ImageChampagne />
              </div>
              <h2 className="subtitle">Tal &amp; Spex</h2>
              <div className="separator" />
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
            </div>
            <div className="content-container">
              <div className="image-container">
                <ImageFood />
              </div>
              <h2 className="subtitle">Mat</h2>
              <div className="separator" />
              <p>
                All specialkost meddelas till toastparet på{" "}
                <a href="mailto:linneaochrickard@gmail.com">
                  linneaochrickard@gmail.com
                </a>
                .
              </p>
            </div>
            <div className="content-container">
              <div className="image-container">
                <ImageGifts />
              </div>
              <h2 className="subtitle">Kuvertavgift &amp; Presenter</h2>
              <div className="separator" />
              <p>Shizzz</p>
            </div>
            <div className="content-container">
              <div className="image-container">
                <ImageTransportation />
              </div>
              <h2 className="subtitle">Transport</h2>
              <div className="separator" />
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
            </div>
            <div className="content-container">
              <div className="image-container">
                <ImageAccomodations />
              </div>
              <h2 className="subtitle">Boende</h2>
              <div className="separator" />
              <p>Shizzzleeee</p>
            </div>
            <div className="content-container">
              <div className="image-container">
                <ImageRSVP />
              </div>
              <h2 className="subtitle">O.S.A.</h2>
              <div className="separator" />
              <p>Svara oss ffs!!</p>
            </div>
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
