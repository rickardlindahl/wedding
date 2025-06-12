import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import "./timeline.css"

export const id = "timeline"

export const title = "Tider"

const Timeline: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brollopsbild.jpg" }) {
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
      <div>
        <p>
          Tiderna är preliminära och kan ändras. Håll koll på hemsidan för eventuella uppdateringar.
        </p>
        <br />
        <ul>
          <li className="Timeline-listitem">
            <p>
              16.00
              <br />
              Mingel, tilltugg & kortare ceremoni
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              18.00
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
