import React from "react"
import Img, { FixedObject } from "gatsby-image"
import "./content-block.css"

interface ContentBlockProps {
  id: string
  imageData: FixedObject | FixedObject[]
  title: string
  children: React.ReactNode
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  id,
  imageData,
  title,
  children,
}) => (
  <div id={id} className="ContentBlock">
    <div className="ContentBlock-inner">
      <div className="ContentBlock-imageContainer">
        <div className="ContentBlock-imageContainerImage">
          <Img fixed={imageData} />
        </div>
      </div>
      <div className="ContentBlock-textContainer">
        <h2 className="ContentBlock-title">{title}</h2>
        <div className="ContentBlock-separator" />
        {children}
      </div>
    </div>
  </div>
)

export default ContentBlock
