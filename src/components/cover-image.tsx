import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useStaticQuery, graphql } from "gatsby"
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
            ...GatsbyImageSharpFluid_withWebp
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
    <section className="cover-image onehundred-vh">
      <Img
        className="cover-image__image"
        fluid={data.desktop.childImageSharp.fluid}
        loading="eager"
      ></Img>
      <div className="cover-image__wedding-date">
        08/08
        <br />
        2020
      </div>
      <ScrollDown scrollToUrl={scrollToUrl} />
      <div className="cover-image__sentinel" ref={ref} />
    </section>
  )
}

export default CoverImage
