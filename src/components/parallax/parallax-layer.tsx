import React from "react"

 interface ParallaxLayerProps {
  layer: "deep" | "base"
  children: React.ReactNode
}

 const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ layer, children }) => (
  <div className={`parallax__layer parallax__layer--${layer}`}>{children}</div>
)

 export default ParallaxLayer