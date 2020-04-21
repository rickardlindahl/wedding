import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContentBlock from "../content-block"

export const id = "ceremony"

export const title = "Vigsel"

const Ceremony: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ringar-square.jpg" }) {
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
      <p>Dagen inleds med vigselceremoni mellan brudparet.</p>
      <p>Vigseln hålls utomhus vid bra väder.</p>
      <br />
      <p>14.00</p>
      <p>Baggböle Herrgård</p>
      <p>905 92, Umeå</p>
      <br />
      <p>Era barn är varmt välkomna till vigselceremonin.</p>
    </ContentBlock>
  )
}

export default Ceremony
