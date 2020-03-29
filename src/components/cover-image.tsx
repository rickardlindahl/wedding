import React, { useEffect } from "react"
import Div100vh from "react-div-100vh"
import ImageMidsummer from "./images/image-midsummer"
import { useInView } from "react-intersection-observer"
import ScrollDown from "./scroll-down"
import "./cover-image.css"

interface CoverImageProps {
  scrollToUrl: string
  onSentinelChange(inView: boolean): void
}

const CoverImage: React.FC<CoverImageProps> = ({
  scrollToUrl,
  onSentinelChange,
}) => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  useEffect(() => {
    onSentinelChange(!!entry && inView)
  }, [inView, entry])

  return (
    <Div100vh className="cover-image-container">
      <ImageMidsummer>
        <div className="wedding-date">
          08/08
          <br />
          2020
        </div>
        <ScrollDown scrollToUrl={scrollToUrl} />
        <div className="sentinel" ref={ref} />
      </ImageMidsummer>
    </Div100vh>
  )
}

export default CoverImage
