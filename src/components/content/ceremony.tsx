import React from "react"
import ContentBlock from "../content-block"
import ImageRings from "../images/image-rings"

export const id = "ceremony"

export const title = "Vigsel"

const Ceremony: React.FC = () => (
  <ContentBlock
    id={id}
    renderImage={() => <ImageRings />}
    title={title}
  >
    <p>Dagen inleds med vigsel mellan brudparet.</p>
    <br />
    <p>14.00</p>
    <p>Baggböle Herrgård</p>
    <p>905 92, Umeå</p>
    <br />
    <p>Era barn är varmt välkomna till vigselceremonin.</p>
  </ContentBlock>
)

export default Ceremony
