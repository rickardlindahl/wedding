import React from "react"
import classNames from "classnames"

export interface HeaderProps {
  title: string
  isSticky: boolean
  renderHamburger(): React.ReactNode
}

const Header: React.FC<HeaderProps> = ({
  title,
  renderHamburger,
  isSticky,
}) => (
  <header
    role="banner"
    className={classNames("header", { "is-sticky": isSticky })}
  >
    <div className="header__item header__item--left">{renderHamburger()}</div>
    <div className="header__item header__item--center header__title">
      {title}
    </div>
    <div className="header__item header__item--right" />
  </header>
)

export default Header
