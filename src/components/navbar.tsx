import React from "react"
import NavItem from "./navitem"

const NavBar: React.FC = () => (
  <nav
    className="navigation"
    style={{
      textAlign: "center",
    }}
  >
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: "16px",
      }}
    >
      {[
        { title: "Vigsel", href: "/#ceremony" },
        { title: "Bröllopsfest", href: "/#party" },
        { title: "Transport", href: "/#transportation" },
        { title: "Boende", href: "/accomodations" },
        {
          title: "Kuvertavgift &amp; Presenter",
          href: "/cover-charge-and-gifts",
        },
      ].map(({ title, href }) => (
        <NavItem key={href} title={title} href={href} />
      ))}
    </ul>
  </nav>
)

export default NavBar
