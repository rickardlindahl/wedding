import React, { useState } from "react"
import classNames from "classnames"
import Hamburger from "./hamburger"

interface HeaderProps {
  siteTitle: string
  isSticky: boolean
}

const Header: React.FC<HeaderProps> = ({ siteTitle, isSticky }) => {
  const [isActive, setActive] = useState(false)

  const menu = [
    {
      to: "/#ceremony",
      title: "Vigsel",
    },
    {
      to: "/#party",
      title: "Bröllopsfest",
    },
    {
      to: "/#food",
      title: "Mat",
    },
    {
      to: "/#speech-and-spex",
      title: "Tal & Spex",
    },
    {
      to: "/#transportation",
      title: "Transport",
    },
    {
      to: "/accomodations",
      title: "Boende",
    },
    {
      to: "/cover-charge-and-gifts",
      title: "Kuvertavgift & Presenter",
    },
    {
      to: "/rsvp",
      title: "OSA",
    },
  ]

  return (
    <div className="sticky-wrapper">
      <header
        role="banner"
        className={classNames("header", { "is-sticky": isSticky })}
      >
        <div className="header__title">Linnéa &amp; Rickard</div>
        <Hamburger
          onToggle={() => {
            setActive(!isActive)
          }}
          isActive={isActive}
        />
      </header>
    </div>
  )
}

export default Header
