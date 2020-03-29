import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const EmailLink: React.FC = () => {
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
    <a href={`mailto:${data.site.siteMetadata.email}}`}>
      {data.site.siteMetadata.email}
    </a>
  )
}

export default EmailLink
