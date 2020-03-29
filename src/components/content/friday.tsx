import React from "react"
import ContentBlock from "../content-block"
import EmailLink from "../email-link"
import ImageFriday from "../images/image-friday"

export const id = "friday"

export const title = "Fredag 7/8"

const Friday: React.FC = () => (
  <ContentBlock id={id} renderImage={() => <ImageFriday />} title={title}>
    <p>
      Vi vill umgås med er så mycket som möjligt under denna helg! Därför
      träffas de som vill och kan under fredagkväll på Scandic Plaza Umeå för
      drinkar och härligt surr.
      <br />
      <br />
      Anmäl om du vill delta till toastparet på <EmailLink />.
    </p>
  </ContentBlock>
)

export default Friday
