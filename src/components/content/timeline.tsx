import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"

export const id = "timeline"

export const title = "Schema"

const Timeline: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "accomodations-square.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ContentBlock
      id={id}
      imageData={data.placeholderImage.childImageSharp.fixed}
      title={title}
    >
      <p>Information kommer snart.</p>
    </ContentBlock>
  )
}

export default Timeline
