import React from "react"
import classNames from "classnames"
import "./sticky-header.css"

interface StickyHeaderProps {
  isSticky: boolean
  renderHeader(): React.ReactNode
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  isSticky,
  renderHeader,
}) => (
  <div
    className={classNames("sticky-header", {
      "is-sticky": isSticky,
    })}
  >
    {renderHeader()}
  </div>
)

export default StickyHeader
