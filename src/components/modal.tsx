import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import "./modal.css"

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
    <div
      className={classNames("Modal-modal", "Modal-effect", {
        "Modal-show": isVisible,
      })}
    >
      <div className="Modal-content">
        <div>
          <div className="Modal-hamburgerContainer">{renderHamburger()}</div>
          {menuItems.map(({ to, title }) => (
            <div className="Modal-linkContainer" key={to}>
              <Link to={to} onClick={onItemClick}>
                {title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="Modal-overlay" />
  </>
)

export default Modal
