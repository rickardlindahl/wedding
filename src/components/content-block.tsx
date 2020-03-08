import React from "react"

interface ContentBlockProps {
  renderImage(): React.ReactNode
  title: string
  children: React.ReactNode
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  renderImage,
  title,
  children,
}) => (
  <div className="content-container">
    <div className="image-container">{renderImage()}</div>
    <h2 className="subtitle">{title}</h2>
    <div className="separator" />
    {children}
  </div>
)

export default ContentBlock
