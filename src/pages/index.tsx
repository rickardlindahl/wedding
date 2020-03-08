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

  const [ref, inView] = useInView({
    threshold: 0,
  })

  return (
    <>
      <SEO title="Home" />
      <CoverImage>
        <div className="sentinel" ref={ref}></div>
      </CoverImage>
      <Header siteTitle={data.site.siteTitle} isSticky={!inView} />
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
