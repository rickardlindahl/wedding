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
  <div id={id} className="content-block">
    <div className="content-block__inner">
      <div className="content-block__image-container">
        <div className="content-block__image-container-image">
          <Img fixed={imageData} />
        </div>
      </div>
      <div className="content-block__text-container">
        <h2 className="content-block__title">{title}</h2>
        <div className="content-block__separator" />
        {children}
      </div>
    </div>
  </div>
)

export default ContentBlock
