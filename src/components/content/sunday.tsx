import React from "react"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"
import ImageSunday from "../images/image-sunday"

export const id = "sunday"

export const title = "Söndag 9/8"

const Sunday: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageSunday />} title={title}>
    <p>
      Vi vill umgås med er så mycket som möjligt under denna helg! Därför
      träffas de som vill och kan och äter lunch tillsammans.
      <br />
      Vi återkommer med tid och plats.
      <br />
      <br />
      Anmäl om du vill delta till toastparet på <EmailLink />.
    </p>
  </ContentBlock>
)

export default Sunday
