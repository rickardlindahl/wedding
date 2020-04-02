import React, { useState, useEffect } from "react"
import classNames from "classnames"
import { useInView } from "react-intersection-observer"
import "./header.css"

export interface HeaderProps {
  title: string
  renderHamburger(): React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, renderHamburger }) => {
  const [isSticky, setIsSticky] = useState(false)

  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!entry) {
      return
    }

    setIsSticky(!inView)
  }, [inView, entry])

  return (
    <div className="header">
      <div className="header__sentinel" ref={ref} />
      <div className={classNames({ "header__sticky-wrapper": isSticky })} />
      <div
        className={classNames("header__container", { "is-sticky": isSticky })}
      >
        <div className="header__inner">
          <div className="header__item header__item--left">
            {renderHamburger()}
          </div>
          <div className="header__item header__item--center header__title">
            {title}
          </div>
          <div className="header__item header__item--right" />
        </div>
      </div>
    </div>
  )
}

export default Header
