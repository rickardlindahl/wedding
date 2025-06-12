import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"

export const id = "speech-and-spex"

export const title = "Tal & spex"

const SpeechAndSpex: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bottle-square.jpg" }) {
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
      <p>Alla tal, uppträdanden, sånger och liknande uppmuntras och önskas!</p>
      <br />
      <p>Vill du göra något särskilt under bröllopsfesten? Meddela i så fall vårt fantastiska toastpar på <EmailLink /></p>
      <br />
      <p>
        Toastparet har även koll på lokal, logistik och tekniska
        förutsättningar.
      </p>
    </ContentBlock>
  )
}

export default SpeechAndSpex
