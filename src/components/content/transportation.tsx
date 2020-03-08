import React from "react"
import ContentBlock from "../content-block"
import ImageTransportation from "../images/image-transportation"

const Transportation = () => (
  <ContentBlock renderImage={() => <ImageTransportation />} title="Transport">
    <p>Busstransport mellan Scandic Hotel Plaza och Baggböle Herrgård.</p>
    <br />
    <ul>
      <li>
        <p>kl 13:30 - Plaza &#8594; Baggböle Herrgård</p>
      </li>
      <li>
        <p>kl 01:00 - Baggböle Herrgård &#8594; Plaza</p>
      </li>
      <li>
        <p>kl 03:15 - Baggböle Herrgård &#8594; Plaza</p>
      </li>
    </ul>
    <br />
    <p>
      Anmäl plats till toastparet på{" "}
      <a href="mailto:linneaochrickard@gmail.com">linneaochrickard@gmail.com</a>
      .
    </p>
  </ContentBlock>
)

export default Transportation
