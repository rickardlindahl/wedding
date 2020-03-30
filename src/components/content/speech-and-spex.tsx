import React from "react"
import ContentBlock from "../content-block"
import ImageChampagne from "../images/image-champagne"
import EmailLink from "../email-link"

export const id = "speech-and-spex"

export const title = "Tal & spex"

const SpeechAndSpex: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageChampagne />} title={title}>
    <p>Vill du göra något särskilt för brudparet under bröllopsfesten?</p>
    <br />
    <p>
      Alla tal och spex meddelas till toastparet på <EmailLink />.
    </p>
    <br />
    <p>
      Toastparet har även koll på lokal, logistik och tekniska förutsättningar.
    </p>
  </ContentBlock>
)

export default SpeechAndSpex
