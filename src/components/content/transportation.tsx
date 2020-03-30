import React from "react"
import ContentBlock from "../content-block"
import ImageTransportation from "../images/image-transportation"
import EmailLink from "../email-link"

export const id = "transporation"

export const title = "Transport"

const Transportation = () => (
  <ContentBlock
    id={id}
    renderImage={() => <ImageTransportation />}
    title={title}
  >
    <p>
      Det finns möjlighet till busstransport mellan Scandic Plaza Umeå och
      Baggböle Herrgård för de som önskar.
    </p>
    <br />
    <ul>
      <li>
        <p>kl 13.30 - Plaza &#8594; Baggböle Herrgård</p>
      </li>
      <li>
        <p>kl 01.00 - Baggböle Herrgård &#8594; Plaza</p>
      </li>
      <li>
        <p>kl 03.15 - Baggböle Herrgård &#8594; Plaza</p>
      </li>
    </ul>
    <br />
    <p>
      Anmäl plats till toastparet på <EmailLink />.
    </p>
  </ContentBlock>
)

export default Transportation
