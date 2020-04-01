import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContentBlock from "../content-block"

export const id = "accomodations"

export const title = "Boende"

const Accomodations: React.FC = () => {
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
export default Accomodations
