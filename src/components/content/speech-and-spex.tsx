import React from "react"
import ContentBlock from "../content-block"
import ImageChampagne from "../images/image-champagne"

const SpeechAndSpex: React.FC = () => (
  <ContentBlock renderImage={() => <ImageChampagne />} title="Tal &amp; spex">
    <p>Vill du göra något särskilt för brudparet?</p>
    <br />
    <p>
      Alla tal och spex meddelas till toastparet på{" "}
      <a href="mailto:linneaochrickard@gmail.com">linneaochrickard@gmail.com</a>
      .
    </p>
    <br />
    <p>
      Toastparet har även koll på lokal, logistik och tekniska förutsättningar.
    </p>
  </ContentBlock>
)

export default SpeechAndSpex
