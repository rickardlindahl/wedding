import React from "react"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"
import ImageToasters from "../images/image-toasters"

export const id = "toasters"

export const title = "Toastparet"

const Toasters: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageToasters />} title={title}>
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

export default Toasters
