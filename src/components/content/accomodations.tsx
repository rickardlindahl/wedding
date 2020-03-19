import React from "react"
import ContentBlock from "../content-block"
import ImageAccomodations from "../images/image-accomodations"

export const id = "accomodations"

export const title = "Boende"

const Accomodations: React.FC = () => (
  <ContentBlock
    id={id}
    renderImage={() => <ImageAccomodations />}
    title={title}
  >
    <p>Information kommer snart.</p>
  </ContentBlock>
)

export default Accomodations
