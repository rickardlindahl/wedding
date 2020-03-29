import React from "react"
import ContentBlock from "../content-block"
import ImageGifts from "../images/image-gifts"

export const id = "cover-charge-and-gifts"

export const title = "Kuvertavgift & Presenter"

const CoverChargeAndGifts: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageGifts />} title={title}>
    <p>
      Vi har redan allt vi behöver. <br />
      I stället ber vi om en kuvertavgift på 500 kr / person. <br />
      Vill ni ändå ge oss något önskar vi bidrag till vår bröllopsresa.
      <br/>
      <br />
      Kuvertavgiften betalas in via Swish eller bankkonto till brudgummen. Kom ihåg att ange namn vid betalning.
      <br />
      <br />
      Swish: 073-0366554
      <br />
      Bankkonto: 9024.55.619.53
    </p>
  </ContentBlock>
)

export default CoverChargeAndGifts
