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
      <p>Vi träffas klockan 16:00 på Druidgårdens innergård för härligt mingel och tilltugg.</p>
      <p>Där hålls en kortare ceremoni innan vi fortsätter firandet inomhus.</p>
    </ContentBlock>
  )
}

export default Ceremony
