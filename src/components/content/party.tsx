import React from "react"
import ContentBlock from "../content-block"
import ImageBaggbole from "../images/image-baggbole"

export const id = "party"

export const title = "Bröllopsfest"

const Party: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageBaggbole />} title={title}>
    <p>17:00 - 03:00</p>
    <p>Baggböle Herrgård</p>
    <br />
    <p>
      Vi älskar era barn men under bröllopsfesten
      <br />
      älskar vi era barnvakter.
    </p>
  </ContentBlock>
)

export default Party
