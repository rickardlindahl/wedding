import React from "react"
import ContentBlock from "../content-block"
import ImageGifts from "../images/image-gifts"

const CoverChargeAndGifts: React.FC = () => (
  <ContentBlock
    renderImage={() => <ImageGifts />}
    title="Kuvertavgift &amp; Presenter"
  >
    <p>Shizzz</p>
  </ContentBlock>
)

export default CoverChargeAndGifts
