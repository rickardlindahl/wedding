import React from "react"
import ContentBlock from "../content-block"
import ImageRSVP from "../images/image-rsvp"

export const id = "rsvp"

export const title = "O.S.A."

const RSVP: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageRSVP />} title={title}>
    <p>
      Meddela senast den 31.05.2020 om du vill dela dagen med oss genom att
      betala in kuvertavgiften.
    </p>
  </ContentBlock>
)

export default RSVP
