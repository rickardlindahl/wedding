import { useEffect, useState } from "react"
import debounce from "lodash/debounce"

export const useWindowHeight = (delay = 500) => {
  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight

      const vh = newHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    const debouncedHandleResize = debounce(handleResize, delay)

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [])
}
