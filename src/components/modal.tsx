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
      className={classNames("md-modal", "md-effect", "onehundred-vh", {
        "md-show": isVisible,
      })}
    >
      <div className="md-content onehundred-vh">
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
      </div>
    </div>
    <div className="md-overlay" />
  </>
)

export default Modal
