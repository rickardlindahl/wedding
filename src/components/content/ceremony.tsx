import React from "react"
import ContentBlock from "../content-block"
import ImageRings from "../images/image-rings"

const Ceremony: React.FC = () => (
  <ContentBlock renderImage={() => <ImageRings />} title="Vigsel">
    <p>14:00</p>
    <p>Baggböle Herrgård</p>
    <p>905 92, Umeå</p>
    <br />
    <p>Era barn är varmt välkomna till vigseln.</p>
  </ContentBlock>
)

export default Ceremony
