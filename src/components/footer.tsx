import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./footer.css"

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteEmailQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <a href={`mailto:${data.site.siteMetadata.email}}`}>
        {data.site.siteMetadata.email}
      </a>
    </footer>
  )
}

export default Footer
