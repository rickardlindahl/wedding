import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContentBlock from "../content-block"
import "./timeline.css"

export const id = "timeline"

export const title = "Schema"

const Timeline: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "timeline-square.jpg" }) {
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
      <div className="Timeline">
        <p>Schemat är preliminärt och kan ändras.</p>
        <br />
        <ul>
          <li className="Timeline-listitem">
            <p>
              14.00
              <br />
              Samling på Baggböle Herrgård för aktiviteter &amp; fördrink
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              15.00
              <br />
              Vigselceremoni
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              16.00
              <br />
              Tårta &amp; fotografering
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              18.00
              <br />
              Bröllopsfesten inleds med att middagen serveras
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              22.30
              <br />
              Brudvals &amp; dans in på småtimmarna
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              01.00
              <br />
              Vicking
            </p>
          </li>
          <li className="Timeline-listitem">
            <p>
              03.15
              <br />
              Buss hem för de som anmält sig
            </p>
          </li>
        </ul>
      </div>
    </ContentBlock>
  )
}

export default Timeline
