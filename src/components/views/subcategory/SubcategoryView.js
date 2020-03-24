import React from "react"
import SubcategoryHeaderSection from "./components/sections/SubcategoryHeaderSection"
import { Col, Container, Row } from "react-bootstrap"
import SubcategoryProducts from "./components/sections/SubcategoryProducts"
import SubcategoryFiltersSection from "./components/sections/SubcategoryFiltersSection"
import { REST_FILTERS, REST_SORTERS } from "../../../utilities/helpers/from_rest"
import ProductSorter from "./components/sorters/ProductSorter"

class SubcategoryView extends React.Component {

  state = {
    filters: [],
    products: [],
    sorters: [],
    currentSort: null,
  }

  componentDidMount() {
    this.setState({
      products: Array.from(this.props.products.edges),
      filters: REST_FILTERS,
      sorters: REST_SORTERS,
    })
  }

  onChangeActiveFilters = (field, value) => {
    let arr = this.state.filters
    let obj = arr.find(i => i.field === field)
    if (obj) {
      obj.currentValue = value
    }
    this.setState({ filters: arr })
    this.filterProducts(arr)
  }

  onClickClearFilters = () => {
    let arr = this.state.filters
    arr.forEach(filter => {
      if (filter.field === "product_collection")
        filter.currentValue = false
      if (filter.field === "product_price")
        filter.currentValue = [filter.options[0].value, filter.options[1].value]
      if (filter.field === "product_variant")
        filter.currentValue = []
      if (filter.field === "product_size")
        filter.currentValue = []
    })

    this.setState({ filters: arr })
    this.filterProducts(arr)
  }

  filterProducts = (arr = this.state.filters) => {
    let products = Array.from(this.props.products.edges)

    arr.forEach(filter => {

      if (filter.field === "product_bestseller") {
        if (filter.currentValue)
          products = products.filter(p => p.node[filter.field])
      }
      if (filter.field === "product_price") {
        products = products.filter(p => filter.currentValue[0] <= p.node[filter.field] && p.node[filter.field] <= filter.currentValue[1])
      }
      if (filter.field === "product_variant") {
        // todo zmienic bo nieoptymalne

        if (Boolean(filter.currentValue) && filter.currentValue.length > 0) {
          let filteredArray = []
          products.forEach(product => {
            if (product.node.product_variants.length > 0) {
              for (let i = 0; i < filter.currentValue.length; i++) {
                if (product.node.product_variants.find(v => v.variant_icon.indexOf(filter.currentValue[i].value) > -1)) {
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
        if (Boolean(filter.currentValue) && filter.currentValue.length > 0) {
          let filteredArray = []
          products.forEach(product => {

            for (let i = 0; i < filter.currentValue.length; i++) {
              if (product.node.product_sizes.find(s => s.size === filter.currentValue[i].key && s.available)) {
                filteredArray.push(product)
                break
              }
            }
          })
          products = filteredArray
        }
      }
    })

    this.sortProducts(this.state.currentSort, products)
  }

  onChangeSort = (e) => {
    this.setState({ currentSort: e })
    this.sortProducts(e)
  }

  sortProducts = (sort = this.state.currentSort, products = this.state.products) => {
    let arr = Array.from(products)

    if (sort === null) {

      arr.sort((x, y) => {
        if (x.node.product_id < y.node.product_id) return -1
        else return 1
      })

    } else {

      arr.sort((x, y) => {
        if (x.node[sort.field] < y.node[sort.field])
          return (sort.ascending) ? -1 : 1
        else return (sort.ascending) ? 1 : -1
      })

    }

    this.setState({ products: arr })
  }

  render() {
    let { subcategory } = this.props
    let { products, filters, sorters, currentSort } = this.state

    return (
      <div id={"SUBCATEGORYVIEW"}>
        <SubcategoryHeaderSection subcategory={subcategory}/>
        <Container>
          <Row>
            <Col lg={3} xl={3}>
              {
                (Boolean(filters) && filters.length > 0) &&
                <SubcategoryFiltersSection
                  filters={filters}
                  handleChangeActiveFilters={this.onChangeActiveFilters}
                  handleClickClearFilters={this.onClickClearFilters}
                />
              }
            </Col>
            <Col lg={9} xl={9}>
              <ProductSorter
                options={sorters}
                value={currentSort}
                handleChangeSort={this.onChangeSort}
              />
              <SubcategoryProducts products={products}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SubcategoryView
