import React from "react"
import classNames from "classnames"
import "./hamburger.css"

interface HamburgerProps {
  onToggle(): void
  isActive: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ onToggle, isActive }) => (
  <button
    className={classNames("Hamburger", "Hamburger--slider", {
      "is-active": isActive,
    })}
    type="button"
    onClick={_e => onToggle()}
    aria-label="Menu"
  >
    <span className="Hamburger-box">
      <span className="Hamburger-inner"></span>
    </span>
  </button>
)

export default Hamburger
