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

  const reservationEmail = "mailto:reservationumea@scandichotels.com"

  return (
    <ContentBlock
      id={id}
      imageData={data.placeholderImage.childImageSharp.fixed}
      title={title}
    >
      <p>
        Vi har möjlighet att erbjuda rabatterat boende på Scandic Plaza Umeå
        från den 6/8 - 9/8!
      </p>
      <br />
      <p>Pris: 650 kr / natt.</p>
      <p>(detta gäller både enkel- och dubbelrum)</p>
      <br />
      <p>Önskar du boka rum till detta pris uppge koden:</p>
      <p className="ContentBlock-bold-text">LIN060820</p>
      <br />
      <p>
        Bokning sker <span className="ContentBlock-italic-text">endast</span>{" "}
        via telefon eller mail.
      </p>
      <p>Telefon: 090-2056310</p>
      <p>
        Mail: <a href={reservationEmail}>{reservationEmail}</a>
      </p>
    </ContentBlock>
  )
}
export default Accomodations
