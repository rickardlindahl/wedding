import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"

export const id = "friday"

export const title = "Fredag 7/8"

const Friday: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "drinks-square.jpg" }) {
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
        träffas de som vill under fredagkväll på Scandic Plaza Umeå för drinkar
        och härligt surr.
      </p>
      <br />
      <p>20.00</p>
      <p>Scandic Plaza Umeå</p>
      <br />
      <p>
        Anmäl om du vill delta till toastparet på <EmailLink />.
      </p>
    </ContentBlock>
  )
}
export default Friday
