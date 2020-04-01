import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import "./modal.css"
import Div100vh from "react-div-100vh"

interface ModalProps {
  isVisible: boolean
  onItemClick(): void
  menuItems: { to: string; title: string }[]
  renderHamburger(): React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onItemClick,
  menuItems,
  renderHamburger,
}) => (
  <>
    <Div100vh
      className={classNames("md-modal", "md-effect", {
        "md-show": isVisible,
      })}
    >
      <Div100vh className="md-content">
        <div>
          <div className="md-hamburger-container">{renderHamburger()}</div>
          {menuItems.map(({ to, title }) => (
            <div className="md-content__link-wrapper" key={to}>
              <Link to={to} onClick={onItemClick}>
                {title}
              </Link>
            </div>
          ))}
        </div>
      </Div100vh>
    </Div100vh>
    <div className="md-overlay" />
  </>
)

export default Modal
