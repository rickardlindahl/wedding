import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CoverImage from "../components/cover-image"
import SEO from "../components/seo"
import Header from "../components/header"
import * as Ceremony from "../components/content/ceremony"
import * as Party from "../components/content/party"
import * as SpeechAndSpex from "../components/content/speech-and-spex"
import * as Food from "../components/content/food"
import * as Timeline from "../components/content/timeline"
import * as Toasters from "../components/content/toasters"
import Modal from "../components/modal"
import Hamburger from "../components/hamburger"
import Footer from "../components/footer"
import { createLinkFromId } from "../lib/link"

const blocks = [
  Ceremony,
  Food,
  SpeechAndSpex,
  Party,
  Toasters,
  Timeline,
]

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

  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("modal-active")
    } else {
      document.body.classList.remove("modal-active")
    }
  }, [isMenuOpen])

  const renderHamburger = () => (
    <Hamburger
      onToggle={() => {
        setMenuOpen(!isMenuOpen)
      }}
      isActive={isMenuOpen}
    />
  )

  return (
    <>
      <SEO title="Bröllopsfest 9/8 2025" />
      <Modal
        isVisible={isMenuOpen}
        onItemClick={() => {
          setMenuOpen(!isMenuOpen)
        }}
        renderHamburger={renderHamburger}
        menuItems={blocks.map(({ id, title }) => ({
          to: createLinkFromId(id),
          title,
        }))}
      />
      <CoverImage scrollToUrl="#info" />
      <Header
        title={data.site.siteMetadata.title}
        renderHamburger={renderHamburger}
      />
      <div>
        {blocks.map(({ id, default: Component }) => (
          <Component key={id} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
