import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import classNames from "classnames"

import CoverImage from "../components/images/cover-image"
import SEO from "../components/seo"
import Header from "../components/header"
import { useInView } from "react-intersection-observer"
import Ceremony, {
  id as ceremonyId,
  title as ceremonyTitle,
} from "../components/content/ceremony"
import Party, {
  id as partyId,
  title as partyTitle,
} from "../components/content/party"
import SpeechAndSpex, {
  id as speechAndSpexId,
  title as speechAndSpexTitle,
} from "../components/content/speech-and-spex"
import Food, {
  id as foodId,
  title as foodTitle,
} from "../components/content/food"
import CoverChargeAndGifts, {
  id as coverChargeAndGiftsId,
  title as coverChargeAndGiftsTitle,
} from "../components/content/cover-charge-and-gifts"
import Transportation, {
  id as transportationId,
  title as transportationTitle,
} from "../components/content/transportation"
import Accomodations, {
  id as accomodationsId,
  title as accomodationsTitle,
} from "../components/content/accomodations"
import RSVP, {
  id as rsvpId,
  title as rsvpTitle,
} from "../components/content/rsvp"
import Modal from "../components/modal"
import Hamburger from "../components/hamburger"

const content = [
  {
    to: `/#${ceremonyId}`,
    title: ceremonyTitle,
    Component: Ceremony,
  },
  {
    to: `/#${partyId}`,
    title: partyTitle,
    Component: Party,
  },
  {
    to: `/#${speechAndSpexId}`,
    title: speechAndSpexTitle,
    Component: SpeechAndSpex,
  },
  {
    to: `/#${foodId}`,
    title: foodTitle,
    Component: Food,
  },
  {
    to: `/#${coverChargeAndGiftsId}`,
    title: coverChargeAndGiftsTitle,
    Component: CoverChargeAndGifts,
  },
  {
    to: `/#${transportationId}`,
    title: transportationTitle,
    Component: Transportation,
  },
  {
    to: `/#${accomodationsId}`,
    title: accomodationsTitle,
    Component: Accomodations,
  },
  {
    to: `/#${rsvpId}`,
    title: rsvpTitle,
    Component: RSVP,
  },
  {
    to: `/#schema`,
    title: "Schema",
    Component: () => <div id="schema">Schema</div>,
  },
]

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          email
        }
      }
    }
  `)

  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("modal-active")
    } else {
      document.body.classList.remove("modal-active")
    }
  }, [isMenuOpen])

  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  const isSticky = !!entry && !inView

  const renderHamburger = () => (
    console.log("renderHamburger"),
    (
      <Hamburger
        onToggle={() => {
          console.log("onToggle")
          setMenuOpen(!isMenuOpen)
        }}
        isActive={isMenuOpen}
      />
    )
  )

  return (
    <>
      <Modal
        isVisible={isMenuOpen}
        onItemClick={() => {
          setMenuOpen(!isMenuOpen)
        }}
        renderHamburger={renderHamburger}
        menuItems={content.map(({ to, title }) => ({ to, title }))}
      />
      <CoverImage>
        <div className="wedding-date">
          08/08
          <br />
          2020
        </div>
        <div id="section05" className="demo">
          <Link to={content[0].to}>
            <span></span>
          </Link>
        </div>
        <div className="sentinel" ref={ref} />
      </CoverImage>
      <Header
        title={data.site.siteMetadata.title}
        renderHamburger={renderHamburger}
        isSticky={isSticky}
      />
      <div className={classNames({ "sticky-wrapper": isSticky })} />
      <div>
        {content.map(({ Component, to }) => (
          <Component key={to} />
        ))}
      </div>
      <footer className="footer">
        <a href={`mailto:${data.site.siteMetadata.email}}`}>
          {data.site.siteMetadata.email}
        </a>
      </footer>
    </>
  )
}

export default IndexPage
