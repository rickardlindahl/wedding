import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContentBlock from "../content-block"

export const id = "cover-charge-and-gifts"

export const title = "Kuvertavgift & Presenter"

const CoverChargeAndGifts: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gifts-square.jpg" }) {
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
        Vi har redan allt vi behöver. I stället ber vi om en kuvertavgift på 500
        kr / person för bröllopsfesten. Vill ni ändå ge oss något önskar vi
        bidrag till vår bröllopsresa.
        <br />
        <br />
        Kuvertavgiften betalas in via Swish eller bankkonto till brudgummen. Kom
        ihåg att ange namn vid betalning.
        <br />
        <br />
        Swish: 073-0366554
        <br />
        Bankkonto: 9024-5561953
      </p>
    </ContentBlock>
  )
}

export default CoverChargeAndGifts
