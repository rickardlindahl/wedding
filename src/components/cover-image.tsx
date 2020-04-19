import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ScrollDown from "./scroll-down"
import "./cover-image.css"

interface CoverImageProps {
  scrollToUrl: string
}

const CoverImage: React.FC<CoverImageProps> = ({
  scrollToUrl,
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

  return (
    <div className="CoverImage">
      <Img
        className="CoverImage-image"
        fluid={data.desktop.childImageSharp.fluid}
        critical
        loading="eager"
        fadeIn={false}
        imgStyle={{ pointerEvents: "none" }}
      ></Img>
      <div className="CoverImage-weddingDate">
        08/08
        <br />
        2020
      </div>
      <ScrollDown scrollToUrl={scrollToUrl} />
    </div>
  )
}

export default CoverImage
