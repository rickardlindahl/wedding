import React from "react"

interface ParallaxProps {
  children: React.ReactNode
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => (
  <div className="parallax">{children}</div>
)

export default Parallax
