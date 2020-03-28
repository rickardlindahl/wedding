import "./src/styles/reset.css"
import "./src/styles/fonts.css"
import "./src/styles/global.css"

export const onClientEntry = async () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    await import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}