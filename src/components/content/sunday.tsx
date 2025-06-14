import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"

export const id = "sunday"

export const title = "Söndag 10/8"

const Sunday: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hotel-square.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ContentBlock
      id={id}
      imageData={data.placeholderImage.childImageSharp.fixed}
      title={title}
    >
      <p>
        Vi vill umgås med er så mycket som möjligt under denna helg! Därför
        träffas de som vill och kan för lunch tillsammans på söndagen.
      </p>
      <br />
      <p>Vi återkommer med mer information gällande detta när vi vet hur många vi blir.</p>
      <br />
      <p>Vill ni vara med? Vi är tacksamma om ni fyller i 
        formuläret
        nedan så snart som möjligt.</p>
      <br />
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdxJImxALW8T4NExT11ufokIF2PjMK8VjrCdSgqa3Yju6H7Mg/viewform?usp=sharing&ouid=107820152812023416530" target="_blank" style={{ fontWeight:700}}>Länk till formulär</a></p>
    </ContentBlock>
  )
}

export default Sunday
