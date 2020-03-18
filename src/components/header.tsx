import React from "react"

export interface HeaderProps {
  title: string
  renderHamburger(): React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, renderHamburger }) => (
  <header role="banner" className="header">
    <div className="header__item header__item--left">{renderHamburger()}</div>
    <div className="header__item header__item--center header__title">
      {title}
    </div>
    <div className="header__item header__item--right" />
  </header>
)

export default Header
