import React from "react"
import ContentBlock from "../content-block"
import ImageAccomodations from "../images/image-accomodations"

export const id = "timeline"

export const title = "Schema"

const Timeline: React.FC = () => (
  <ContentBlock
    id={id}
    renderImage={() => <ImageAccomodations />}
    title={title}
  >
    <p>TBD</p>
  </ContentBlock>
)

export default Timeline
