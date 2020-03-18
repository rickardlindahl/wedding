import React from "react"
import "./parallax.css"

interface ParallaxProps {
 children: React.ReactNode
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => (
 <div className="parallax">{children}</div>
)

export default Parallax