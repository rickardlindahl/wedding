import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"

export const id = "party"

export const title = "Fest och firande"

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
      <p>Baren är välfylld och vi dansar och sjunger fram till småtimmarna.</p>
      <p>Festen drar igång på riktigt och vi dansar in på småtimmarna.</p>
    </ContentBlock>
  )
}

export default Party
