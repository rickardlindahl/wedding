import { useEffect, useState } from "react"
import debounce from "lodash/debounce"

export const useWindowHeight = (delay = 500) => {
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight

      const vh = newHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)

      setHeight(newHeight)
    }

    const debouncedHandleResize = debounce(handleResize, delay)

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [])

  return height
}
