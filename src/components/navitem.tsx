import { Link } from "gatsby"
import React from "react"

interface NavItemProps {
  title: string
  href: string
}

const NavItem: React.FC<NavItemProps> = ({ title, href }) => (
  <li
    className="navigation-item"
    style={{
      display: "inline",
      padding: "16px",
      fontSize: "16px",
      textTransform: "uppercase",
      textDecoration: "none",
      letterSpacing: "2px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "1em",
    }}
  >
    <Link
      to={href}
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      {title}
    </Link>
  </li>
)

export default NavItem
