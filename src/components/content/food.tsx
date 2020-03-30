import React from "react"
import ContentBlock from "../content-block"
import ImageFood from "../images/image-food"
import EmailLink from "../email-link"

export const id = "food"

export const title = "Mat"

const Food: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageFood />} title={title}>
    <p>
      Det kommer serveras tilltugg, mat och dryck löpande under dagen och
      natten.
    </p>
    <br />
    <p>
      All specialkost meddelas till toastparet på <EmailLink />.
    </p>
  </ContentBlock>
)

export default Food
