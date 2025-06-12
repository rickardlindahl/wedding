import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"

export const id = "food"

export const title = "Middag"

const Food: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "food-square.jpg" }) {
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
      <p>Runt kl 18:00 äter vi middag tillsammans.</p>
      <p>Det blir en sittning med mat för magen och skratt för själen.</p>
      <p>Förbered er på lekar, spex, tal och kanske en och annan överraskning.</p>
    </ContentBlock>
  )
}

export default Food
