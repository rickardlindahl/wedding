import React, { useState } from "react"
import classNames from "classnames"
import Hamburger from "./hamburger"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
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
    <>
      <div className={classNames("overlay", { "is-active": isActive })}>
        <div className="overlay-container">
          <nav className="overlay-nav">
            {menu.map(({ title, to }) => (
              <div key={to} className="overlay-nav-item">
                <a href={to} className="overlay-nav-item-link">
                  {title}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <header role="banner" className="header">
        <div className="header__hamburger-container">
          <Hamburger
            onToggle={() => {
              console.log("toggle active", isActive)
              setActive(!isActive)
            }}
            isActive={isActive}
          />
        </div>
        <div className="header__site-title-container">
          <h1 className="site-title">{siteTitle}</h1>
        </div>
        {/* <nav className="nav">
        <div className="nav-container">
          <div className="link-container">
            <Link
              to="/#ceremony"
              activeClassName="link--active"
              className="link"
            >
              Vigsel
            </Link>
          </div>
          <div className="link-container">
            <Link to="/#party" activeClassName="link--active" className="link">
              Bröllopsfest
            </Link>
          </div>
          <div className="link-container">
            <Link
              to="/#transportation"
              activeClassName="link--active"
              className="link"
            >
              Transport
            </Link>
          </div>
        </div>
        <div className="nav-container">
          <div className="link-container">
            <Link to="/#ceremony" className="link link--title">
              <h1 className="site-title">{siteTitle}</h1>
            </Link>
          </div>
        </div>
        <div className="nav-container">
          <div className="link-container">
            <Link
              to="/accomodations"
              activeClassName="link--active"
              className="link"
            >
              Boende
            </Link>
          </div>
          <div className="link-container">
            <Link
              to="/cover-charge-and-gifts"
              activeClassName="link--active"
              className="link"
            >
              Kuvertavgift &amp; Presenter
            </Link>
          </div>
          <div className="link-container">
            <Link to="/rsvp" activeClassName="link--active" className="link">
              OSA
            </Link>
          </div>
        </div>
      </nav> */}
      </header>
    </>
  )
}

export default Header
