import React from "react"
import ContentBlock from "../content-block"
import ImageGifts from "../images/image-gifts"

export const id = "cover-charge-and-gifts"

export const title = "Kuvertavgift & Presenter"

const CoverChargeAndGifts: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageGifts />} title={title}>
    <p>Information kommer snart.</p>
  </ContentBlock>
)

export default CoverChargeAndGifts
