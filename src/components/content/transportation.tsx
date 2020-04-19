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
        Det finns möjlighet till busstransport mellan Umeå och Baggböle Herrgård
        för de som önskar. Anmäl plats till toastparet på <EmailLink />.
      </p>
      <br />
      <ul>
        <li>
          <p>13.30 - Umeå &#8594; Baggböle Herrgård</p>
        </li>
        <li>
          <p>03.15 - Baggböle Herrgård &#8594; Umeå</p>
        </li>
      </ul>
      <br />
      <p>
        Mer specifik hållplats i Umeå meddelas då vi bokat transport för de som
        anmält sig. Håll utkik på hemsidan.
      </p>
    </ContentBlock>
  )
}

export default Transportation
