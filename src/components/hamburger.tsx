import React from "react"
import classNames from "classnames"
import "./hamburger.css"

interface HamburgerProps {
  onToggle(): void
  isActive: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ onToggle, isActive }) => (
  <button
    className={classNames("hamburger", "hamburger--slider", {
      "is-active": isActive,
    })}
    type="button"
    onClick={_e => onToggle()}
    aria-label="Menu"
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

export default Hamburger
