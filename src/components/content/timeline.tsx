import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import "./timeline.css"

export const id = "timeline"

export const title = "Schema"

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
              Festen drar igång på riktigt och vi dansar in på småtimmarna
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              01.00
              <br />
              Vickning
            </p>
          </li>
        </ul>
      </div>
    </ContentBlock>
  )
}

export default Timeline
