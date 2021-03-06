import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"

export const id = "toasters"

export const title = "Toastparet"

const Toasters: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "toasters-square.jpg" }) {
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
        Toastmadame: Cecilia Hultstrand Ahlin.
        <br />
        Toastmaster: Mikael Nygren.
        <br />
        <br />
        Specialkost, tal, spex, transport samt deltagande vid fredagens och
        söndagens aktiviteter anmäls till toastparet på <EmailLink />.
        <br />
        <br />
        Till toastparet kan du även vända dig om du har några frågor eller
        funderingar.
      </p>
    </ContentBlock>
  )
}

export default Toasters
