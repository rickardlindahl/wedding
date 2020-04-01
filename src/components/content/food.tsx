import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"

export const id = "food"

export const title = "Mat"

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
      <p>
        Det kommer serveras tilltugg, mat och dryck löpande under dagen och
        natten.
      </p>
      <br />
      <p>
        All specialkost meddelas till toastparet på <EmailLink />.
      </p>
    </ContentBlock>
  )
}

export default Food
