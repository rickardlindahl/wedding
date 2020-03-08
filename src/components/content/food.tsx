import React from "react"
import ContentBlock from "../content-block"
import ImageFood from "../images/image-food"

const Food: React.FC = () => (
  <ContentBlock id="food" renderImage={() => <ImageFood />} title="Mat">
    <p>
      All specialkost meddelas till toastparet på{" "}
      <a href="mailto:linneaochrickard@gmail.com">linneaochrickard@gmail.com</a>
      .
    </p>
  </ContentBlock>
)

export default Food
