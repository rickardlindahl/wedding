import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

// const Image: React.FC = () => {
// const data = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "4k_RickardLinnea.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 4096) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)
//
// const data = useStaticQuery(graphql`
//   query {
//     desktop: file(relativePath: { eq: "SAM_5478.jpg" }) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 1920) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `)

// const imageData = data.desktop.childImageSharp.fluid

// return (
//   <BackgroundImage
//     Tag="section"
//     // className={className}
//     fluid={imageData}
//     backgroundColor={`#040e18`}
//   >
//     <h2>gatsby-background-image</h2>
//   </BackgroundImage>
// )
//
// return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

// export default Image

const BackgroundSection: React.FC<{ className: string }> = ({ className }) => {
  const data = useStaticQuery(graphql`
  query {
    desktop: file(relativePath: { eq: "rickard-linnea.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
      );
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledBackgroundSection
