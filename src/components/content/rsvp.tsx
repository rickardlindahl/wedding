import React from "react"
import ContentBlock from "../content-block"
import ImageRSVP from "../images/image-rsvp"

export const id = "rsvp"

export const title = "O.S.A."

const RSVP: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageRSVP />} title={title}>
    <p>Information kommer snart.</p>
  </ContentBlock>
)

export default RSVP
