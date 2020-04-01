import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"

export const id = "transporation"

export const title = "Transport"

const Transportation = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bus-square.jpg" }) {
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
        Det finns möjlighet till busstransport mellan Scandic Plaza Umeå och
        Baggböle Herrgård för de som önskar.
      </p>
      <br />
      <ul>
        <li>
          <p>kl 13.30 - Plaza &#8594; Baggböle Herrgård</p>
        </li>
        <li>
          <p>kl 01.00 - Baggböle Herrgård &#8594; Plaza</p>
        </li>
        <li>
          <p>kl 03.15 - Baggböle Herrgård &#8594; Plaza</p>
        </li>
      </ul>
      <br />
      <p>
        Anmäl plats till toastparet på <EmailLink />.
      </p>
    </ContentBlock>
  )
}

export default Transportation
