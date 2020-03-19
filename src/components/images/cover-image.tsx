import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Div100vh from "react-div-100vh"

interface CoverImageProps {
  children: React.ReactNode
}

const CoverImage: React.FC<CoverImageProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "rickard-linnea.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <Div100vh>
      <BackgroundImage Tag="section" className="cover-image" fluid={imageData}>
        {children}
      </BackgroundImage>
    </Div100vh>
  )
}

export default CoverImage
