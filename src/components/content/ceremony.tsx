import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContentBlock from "../content-block"

export const id = "ceremony"

export const title = "Ceremoni"

const Ceremony: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ringar-square.jpg" }) {
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
      <p>16.00</p>
      <p>Vi träffas på Druidgårdens innergård för härligt mingel och tilltugg. Njut av stämningen och hälsa på alla nya och gamla vänner.</p>
      <p>Efter minglet hålls en kortare ceremoni innan vi fortsätter firandet inomhus.</p>
      <br />
      <p>Vi har ingen klädkod för bröllopsfesten. Kom gärna i något ni känner er fina och glada i.</p>
      <br />
      <p>Plats: <a href="https://maps.app.goo.gl/NnvBF8iUWn6EMzp38" target="_blank">Druidgården, Storgatan 67, 903 30 Umeå</a></p>
    </ContentBlock>
  )
}

export default Ceremony
