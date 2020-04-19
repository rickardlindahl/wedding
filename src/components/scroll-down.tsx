import React from "react"
import { Link } from "gatsby"
import "./scroll-down.css"

interface ScrollDownProps {
  scrollToUrl: string
}

const ScrollDown: React.FC<ScrollDownProps> = ({ scrollToUrl }) => (
  <div className="ScrollDown">
    <Link to={scrollToUrl} className="ScrollDown-link" aria-label="Scroll down">
      <span className="ScrollDown-span"></span>
    </Link>
  </div>
)

export default ScrollDown
