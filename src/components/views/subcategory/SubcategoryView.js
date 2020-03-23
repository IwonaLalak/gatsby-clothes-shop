import React from "react"
import SubcategoryHeaderSection from "./components/sections/SubcategoryHeaderSection"
import { Col, Container, Row } from "react-bootstrap"
import SubcategoryProducts from "./components/sections/SubcategoryProducts"
import SubcategoryFiltersSection from "./components/sections/SubcategoryFiltersSection"
import * as _ from "lodash"

class SubcategoryView extends React.Component {

  state = {
    activeFilters: [],
    products: [],
  }

  componentDidMount() {
    this.setState({
      products: Array.from(this.props.products.edges),
    })
  }


  onChangeActiveFilters = (field, value) => {
    let arr = this.state.activeFilters
    let obj = arr.find(i => i.field === field)
    if (obj) {
      obj.value = value
    } else {
      arr.push({ field, value })
    }

    this.setState({ activeFilters: arr })
    this.filterProducts(arr)
  }

  onClickClearFilters = () => {
    console.log(this.state.activeFilters)
  }

  filterProducts = (arr = this.state.activeFilters) => {
    let products = Array.from(this.props.products.edges)

    arr.forEach(filter => {

      if (filter.field === "product_collection") {
        products = products.filter(p => p.node[filter.field].toLowerCase().indexOf("bestseller") > -1)
      }
      if (filter.field === "product_price") {
        products = products.filter(p => filter.value[0] <= p.node[filter.field] && p.node[filter.field] <= filter.value[1])
      }
      if (filter.field === "product_variant") {
        // todo zmienic bo nieoptymalne

        if (Boolean(filter.value) && filter.value.length > 0) {
          let filteredArray = []
          products.forEach(product => {
            if (product.node.product_variants.length > 0) {
              for (let i = 0; i < filter.value.length; i++) {
                if (product.node.product_variants.find(v => v.variant_icon.indexOf(filter.value[i].value) > -1)) {
                  filteredArray.push(product)
                  break
                }
              }
            }
          })
          products = filteredArray
        }
      }

      if (filter.field === "product_size") {
        if (Boolean(filter.value) && filter.value.length > 0) {
          let filteredArray = []
          products.forEach(product => {

            for (let i = 0; i < filter.value.length; i++) {
              if (product.node.product_sizes.find(s => s.size === filter.value[i].size && s.available)) {
                filteredArray.push(product)
                break
              }
            }
          })
          products = filteredArray
        }
      }
    })

    this.setState({ products })
  }

  render() {
    let { subcategory } = this.props
    let { products } = this.state

    return (
      <div id={"SUBCATEGORYVIEW"}>
        <SubcategoryHeaderSection subcategory={subcategory}/>
        <Container>
          <Row>
            <Col lg={3} xl={3}>
              <SubcategoryFiltersSection handleChangeActiveFilters={this.onChangeActiveFilters}
                                         handleClickClearFilters={this.onClickClearFilters}
              />
            </Col>
            <Col lg={9} xl={9}>
              <SubcategoryProducts products={products}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SubcategoryView
