import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"

export const id = "sunday"

export const title = "Söndag 9/8"

const Sunday: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bottle-square.jpg" }) {
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
      <p>
        Vi vill umgås med er så mycket som möjligt under denna helg! Därför
        träffas de som vill och kan och äter lunch tillsammans.
        <br />
        Vi återkommer med tid och plats.
        <br />
        <br />
        Anmäl om du vill delta till toastparet på <EmailLink />.
      </p>
    </ContentBlock>
  )
}

export default Sunday
