import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `StaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `StaticQuery`: https://gatsby.dev/staticquery
//  */
//
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "AD-logo.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)

export default Image
//
//
// export default ({ data }) => (
//   <div>
//     <h1>Hello gatsby-image</h1>
//     <Img fixed={data.file.childImageSharp.fixed} />
//   </div>
// )
//
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "images/AD-logo.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
