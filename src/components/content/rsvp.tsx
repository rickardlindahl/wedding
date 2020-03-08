import React from "react"
import ContentBlock from "../content-block"
import ImageRSVP from "../images/image-rsvp"

const RSVP: React.FC = () => (
  <ContentBlock id="rsvp" renderImage={() => <ImageRSVP />} title="O.S.A.">
    <p>Svara oss ffs!!</p>
  </ContentBlock>
)

export default RSVP
