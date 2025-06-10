import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"

export const id = "party"

export const title = "Bröllopsfest"

const Party: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "all-night-wedding-dance.jpg" }
      ) {
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
      <p>21.00</p>
      <p>Slipsen åker på huvudet och klackskorna tas av. Vi dansar och sjunger till småtimmarna.</p>
    </ContentBlock>
  )
}

export default Party
