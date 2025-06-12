import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import "./timeline.css"

export const id = "timeline"

export const title = "Tider"

const Timeline: React.FC = () => {
  // Help me change the object position to be centered
  // and make the image a bit larger
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brollopsbild.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300, cropFocus: WEST) {
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
      <div>
        <ul>
          <li className="Timeline-listitem">
            <p>
              16.00
              <br />
              Mingel, tilltugg & kortare ceremoni
            </p>
          </li>
          <li className="Timeline-listitem">
            <p className="Timeline-listitem-italic">
              Tiderna efter minglet är ungefärliga.
            </p>
            <br />
            <p>18.00
              <br />
              Middagen serveras
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              21.00
              <br />
              Fest, dans, hopp och lek
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              01.00
              <br />
              Vickning
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>Hemgång
              <br />
              När du vill, men stanna gärna för en extra dans om du kan.
            </p>
          </li>
        </ul>
      </div>
    </ContentBlock>
  )
}

export default Timeline
