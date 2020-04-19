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
    <div className="Header">
      <div className="Header-sentinel" ref={ref} />
      <div className={classNames({ "Header-stickyWrapper": isSticky })} />
      <div
        className={classNames("Header-container", { "is-sticky": isSticky })}
      >
        <div className="Header-inner">
          <div className={classNames("Header-item", "Header-item--left")}>
            {renderHamburger()}
          </div>
          <div
            className={classNames(
              "Header-item",
              "Header-item--center",
              "Header-title"
            )}
          >
            {title}
          </div>
          <div className={classNames("Header-item", "Header-item--right")} />
        </div>
      </div>
    </div>
  )
}

export default Header
