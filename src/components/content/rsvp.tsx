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
      <p>Meddela senast den 31.05.2020 om du vill dela dagen med oss.</p>
      <p>Anmälan sker genom att betala in kuvertavgiften.</p>
    </ContentBlock>
  )
}

export default RSVP
