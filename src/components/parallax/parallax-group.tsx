import React from "react"

 interface ParallaxGroupProps {
  children: React.ReactNode
}

 const ParallaxGroup: React.FC<ParallaxGroupProps> = ({ children }) => (
  <div className="parallax__group">{children}</div>
)

 export default ParallaxGroup