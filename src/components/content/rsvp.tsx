import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"

export const id = "rsvp"

export const title = "O.S.A."

const RSVP: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "rsvp-square.jpg" }) {
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
      <p>Tack för era anmälningar!</p>
    </ContentBlock>
  )
}

export default RSVP
