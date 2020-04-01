import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"

export const id = "party"

export const title = "Bröllopsfest"

const Party: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "baggbole-herrgard-square.jpg" }
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
      <p>17.00 - 03.00</p>
      <p>Baggböle Herrgård</p>
      <br />
      <p>
        Vi älskar era barn men under bröllopsfesten älskar vi era barnvakter.
      </p>
    </ContentBlock>
  )
}

export default Party
