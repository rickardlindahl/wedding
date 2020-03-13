import React from "react"
import ContentBlock from "../content-block"
import ImageFood from "../images/image-food"

export const id = "food"

export const title = "Mat"

const Food: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageFood />} title={title}>
    <p>
      All specialkost meddelas till toastparet på{" "}
      <a href="mailto:linneaochrickard@gmail.com">linneaochrickard@gmail.com</a>
      .
    </p>
  </ContentBlock>
)

export default Food
