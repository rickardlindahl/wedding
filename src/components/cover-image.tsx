import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useStaticQuery, graphql } from "gatsby"
import Div100vh from "react-div-100vh"
import Img from "gatsby-image"
import ScrollDown from "./scroll-down"
import "./cover-image.css"

interface CoverImageProps {
  scrollToUrl: string
  onSentinelChange(inView: boolean): void
}

const CoverImage: React.FC<CoverImageProps> = ({
  scrollToUrl,
  onSentinelChange,
}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "rickard-linnea.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!entry) {
      return
    }

    onSentinelChange(inView)
  }, [inView, entry])

  return (
    <Div100vh className="cover-image">
      <Img
        className="cover-image__image"
        fluid={data.desktop.childImageSharp.fluid}
        critical
        loading="eager"
        fadeIn={false}
        imgStyle={{ pointerEvents: "none" }}
      ></Img>
      <div className="cover-image__wedding-date">
        08/08
        <br />
        2020
      </div>
      <ScrollDown scrollToUrl={scrollToUrl} />
      <div className="cover-image__sentinel" ref={ref} />
    </Div100vh>
  )
}

export default CoverImage
