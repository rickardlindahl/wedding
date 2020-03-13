import React, { useState, useEffect } from "react"
import classNames from "classnames"
import Hamburger from "./hamburger"
import Modal from "./modal"

interface HeaderProps {
  title: string
  isSticky: boolean
  menuItems: { to: string; title: string }[]
}

const Header: React.FC<HeaderProps> = ({ title, isSticky, menuItems }) => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("modal-active")
    } else {
      document.body.classList.remove("modal-active")
    }
  }, [isActive])

  return (
    <>
      <Modal
        isVisible={isActive}
        onItemClick={() => {
          setActive(!isActive)
        }}
        menuItems={menuItems}
      />
      <header
        role="banner"
        className={classNames("header", {
          "is-sticky": isSticky || isActive,
          "is-active": isActive,
        })}
      >
        <div className="header__item header__item--left">
          <Hamburger
            onToggle={() => {
              setActive(!isActive)
            }}
            isActive={isActive}
          />
        </div>
        <div className="header__item header__item--center header__title">
          {title}
        </div>
        <div className="header__item header__item--right" />
      </header>
    </>
  )
}

export default Header
