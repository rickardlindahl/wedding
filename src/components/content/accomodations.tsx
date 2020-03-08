import React from "react"
import ContentBlock from "../content-block"
import ImageAccomodations from "../images/image-accomodations"

const Accomodations: React.FC = () => (
  <ContentBlock
    id="accomodations"
    renderImage={() => <ImageAccomodations />}
    title="Boende"
  >
    <p>Shizzzleeee</p>
  </ContentBlock>
)

export default Accomodations
