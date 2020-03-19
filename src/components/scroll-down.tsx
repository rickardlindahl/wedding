import React from "react"
import { Link } from "gatsby"
import "./scroll-down.css"

interface ScrollDownProps {
  scrollToUrl: string
}

const ScrollDown: React.FC<ScrollDownProps> = ({ scrollToUrl }) => (
  <div className="scroll-down">
    <Link to={scrollToUrl} className="scroll-down__link">
      <span className="scroll-down__arrow"></span>
    </Link>
  </div>
)

export default ScrollDown
