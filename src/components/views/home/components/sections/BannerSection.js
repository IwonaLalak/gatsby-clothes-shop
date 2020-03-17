import React from "react"
import { Carousel } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BannerSection = () => {
  const data = useStaticQuery(graphql`
  query {
   allFile(filter: {relativeDirectory: {eq: "banner"}}) {
    edges {
      node {
        id
        name
        base
        childImageSharp {
          id
         fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  }
`)
  return (
    <section id={"BANNER"}>
      <Carousel className="full-width-md d-none d-md-block" indicators={false}>
        <Carousel.Item>
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            alt={"first-slide-" + data.allFile.edges[0].node.base}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            alt={"second-slide-" + data.allFile.edges[1].node.base}
          /> <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default BannerSection