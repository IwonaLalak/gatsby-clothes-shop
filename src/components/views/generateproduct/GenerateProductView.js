import React, { Component } from "react"
import { getCategories } from "../../../services/CategoryService"
import Select from "react-select"
import { productModel } from "../../../utilities/models/models"
import JsonElement from "../../shared/forTests/jsonElement"
import { IconAdd, IconRemove, IconSearch } from "../../shared/icons/FontAwesomeIcons"
import { generateNextID } from "../../../utilities/helpers/generateNextId"
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"

export const FormatFormgroupRow = ({ labelComponent, inputComponent, longerLabel }) => {
  return (
    <Row>
      <Col lg={longerLabel ? 4 : 3} xl={longerLabel ? 4 : 3}>
        {labelComponent}
      </Col>
      <Col lg={longerLabel ? 8 : 9} xl={longerLabel ? 8 : 9}>
        {inputComponent}
      </Col>
    </Row>
  )
}

class GenerateProductView extends Component {
  state = {

    id: 0,

    categories: [],
    category: null,
    subcategory: null,

    currentProduct: productModel(),

    productArray: [],


    generatedProductsQuantity: 0,
  }

  componentDidMount() {
    this.getCategories()
  }


  getCategories = () => {
    getCategories().then(({ data }) => this.setState({ categories: data })).catch(e => console.log(e))
  }


  onChangeValue(key, value, isNumber = false) {
    if (value !== null && value !== undefined) {
      let obj = Object.assign({}, this.state.currentProduct)
      if (isNumber)
        obj[key] = parseFloat(value)
      else
        obj[key] = value
      this.setState({ currentProduct: obj })
    }
  }

  renderInput = (key) => {

    return (
      <FormGroup>
        <FormatFormgroupRow
          labelComponent={<FormLabel htmlFor={"input" + key}>{key}</FormLabel>}
          inputComponent={<FormControl id={"input" + key} type={key === "product_price" ? "number" : "text"}
                                       onChange={(e) => this.onChangeValue(key, e.target.value, key === "product_price")}
                                       value={this.state.currentProduct[key]}
          />}
        />
      </FormGroup>
    )
  }

  onChangeProductSize = ({ target: { checked } }, { size }) => {
    let obj = Object.assign({}, this.state.currentProduct)
    let sizeObj = obj.product_sizes.find(item => item.size === size)

    if (Boolean(sizeObj))
      sizeObj.available = checked

    this.setState({ currentProduct: obj })
  }

  addToDynamicArray = (type) => {
    let obj = Object.assign({}, this.state.currentProduct)

    let row
    if (type === "product_variants") {
      row = {
        "variant_id": generateNextID(Array.from(obj[type]), "variant_id"),
        "variant_name": "",
        "variant_icon": "",
      }
    } else {
      row = {
        "id": generateNextID(Array.from(obj[type]), "id"),
        "key": "",
        "value": "",
      }
    }

    obj[type].push(row)
    this.setState({ currentProduct: obj })
  }
  removeFromDynamicArray = (objToDelete) => {
    let obj = Object.assign({}, this.state.currentProduct)
    if (Object.keys(objToDelete).indexOf("variant_id") > -1) {
      // delete form variants
      obj.product_variants.splice(obj.product_variants.indexOf(objToDelete), 1)
    } else {
      obj.product_details.splice(obj.product_details.indexOf(objToDelete), 1)
    }

    this.setState({ currentProduct: obj })
  }

  onChangeDynamicArrayValue = (id, key, value) => {
    let obj = Object.assign({}, this.state.currentProduct)
    let objToChange
    if (key.indexOf("variant") > -1) {
      objToChange = obj.product_variants.find(o => o.variant_id === id)
      if (objToChange)
        objToChange[key] = value
    } else {
      objToChange = obj.product_details.find(o => o.id === id)
      if (objToChange)
        objToChange[key] = value
    }
    this.setState({ currentProduct: obj })
  }

  addToProductArray = () => {
    this.setState({
      productArray: [...this.state.productArray, this.state.currentProduct],
      currentProduct: productModel(),
      id: parseInt(this.state.id) + 1,
      category: null,
      subcategory: null,
    })
  }

  generateProductsInLoop = () => {
    let arr = []
    const quantity = this.state.generatedProductsQuantity
    if (quantity) {


      for (let i = 0; i < quantity; i++) {

        let obj = Object.assign({}, this.state.currentProduct)

        let index = parseInt(i + 1)


        let code = (obj.product_name.replace(" ", "").substr(0, 2)).toUpperCase()

        if (index < 10) {
          code = code + "000" + index
        } else if (index < 100) {
          code = code + "00" + index
        } else if (index < 1000) {
          code = code + "0" + index
        } else {
          code = code + index
        }

        obj.product_id = parseInt(index + 1 + obj.product_id)
        obj.product_name = obj.product_name + " " + index
        obj.product_code = code
        obj.product_bestseller = this._helper_generateIsBestseller()
        obj.product_price = this._helper_generatePrice()
        obj.product_sizes = this._helper_generateSizes()
        obj.product_details = this._helper_generateDetails()
        obj.product_variants = this._helper_generateVariants()
        obj.product_url = "/" + obj.product_name.replace(" ", "").substr(0, 5) + "-" + code

        arr.push(obj)
      }


    }

    this.setState({ productArray: arr })
  }

  _helper_generateSizes = () => {
    let howManyShouldBeTrue = this._helper_returnRandomValue(1, 6)

    let arr = []

    for (let i = 0; i < howManyShouldBeTrue; i++) {
      arr.push(this._helper_returnRandomValue(1, 6))
    }

    let sizes = [
      {
        "size": "xs",
        "size_number": 34,
        "available": false,
      },
      {
        "size": "s",
        "size_number": 36,
        "available": false,
      },
      {
        "size": "m",
        "size_number": 38,
        "available": false,
      },
      {
        "size": "l",
        "size_number": 40,
        "available": false,
      },
      {
        "size": "xl",
        "size_number": 42,
        "available": false,
      },
      {
        "size": "xxl",
        "size_number": 44,
        "available": false,
      },
    ]

    sizes.map((size, index) => {
      if (arr.find(s => s === (index + 1))) {
        size.available = true
      }
    })

    return sizes
  }

  _helper_generateDetails = () => {
    let willBeDetails = Boolean(this._helper_returnRandomValue(0, 1))

    if (willBeDetails) {

      let quantity = this._helper_returnRandomValue(1, 10)
      let arr = []

      for (let i = 0; i < quantity; i++) {
        arr.push({
          "id": (i + 1),
          "key": "key " + (i + 1),
          "value": "value" + (i + 1),
        })
      }

      return (arr)
    } else {
      return []
    }
  }

  _helper_generateVariants = () => {
    let willBeVariants = Boolean(this._helper_returnRandomValue(0, 1))
    if (willBeVariants) {

      let quantity = this._helper_returnRandomValue(1, 4)
      let arr = []
      const variants = [
        "beige.jpeg",
        "black.jpeg",
        "brown.jpeg",
        "dark_gray.jpeg",
        "dark_green.jpeg",
        "dark_jeans.jpeg",
        "dark_red.jpeg",
        "intense_pink.jpeg",
        "intense_red.jpeg",
        "light_grey.jpeg",
        "light_jeans.jpeg",
        "light_pink.jpeg",
        "lime",
        "medium_jeans.jpeg",
        "mint.jpeg",
        "navy.jpeg",
        "orange.jpeg",
        "turquise.jpeg",
        "violet.jpeg",
        "white.jpeg",
        "yellow.jpeg",
      ]

      for (let i = 0; i < quantity; i++) {

        let radomIndex = this._helper_returnRandomValue(0, 20)

        arr.push(
          {
            "variant_id": (i + 1),
            "variant_name": variants[radomIndex],
            "variant_icon": "https://iwonalalak.pl/colors/" + variants[radomIndex],
          },
        )

      }

      return arr
    } else return []
  }

  _helper_generatePrice = () => {
    let decimalPrecision = Boolean(this._helper_returnRandomValue(0, 1))

    return parseFloat(((Math.random(0, 1) * 100)).toPrecision(decimalPrecision ? 2 : 4))
  }

  _helper_generateIsBestseller = () => {
    let randomValue = this._helper_returnRandomValue(0, 5)

    return randomValue < 2
  }

  _helper_returnRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  render() {

    const keys = ["product_name", "product_code", "product_price", "product_url", "product_img", "product_desc", "product_collection"]

    return (
      <div id={"GENERATE_PRODUCT_VIEW"} style={{ padding: "15px" }}>
        <Row>
          <Col xl={12}>
            <h1 style={{ marginBottom: "25px" }}>
              generate product json
              <small style={{ marginLeft: "15px", color: "grey" }}>
                just for tests..
              </small>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xl={6}>
            <Form>
              <FormGroup>
                <FormatFormgroupRow
                  labelComponent={<FormLabel>change start id</FormLabel>}
                  inputComponent={<FormControl type={"number"}
                                               onChange={(e) => {
                                                 this.setState({ id: e.target.value })
                                                 this.onChangeValue("product_id", e.target.value, true)
                                               }}
                                               defaultValue={this.state.id}
                                               value={this.state.id}
                  />}
                />
              </FormGroup>
              <FormGroup>
                <FormatFormgroupRow
                  labelComponent={<FormLabel>category</FormLabel>}
                  inputComponent={<Select
                    getOptionLabel={({ category_name }) => category_name}
                    getOptionValue={({ category_id }) => category_id}
                    options={this.state.categories}
                    value={this.state.category}
                    onChange={(e) => {
                      this.setState({ category: e, subcategory: null })
                      this.onChangeValue("category_id", e.category_id)
                    }}
                  />}
                />
              </FormGroup>
              {
                Boolean(this.state.category) &&
                <FormGroup>
                  <FormatFormgroupRow
                    labelComponent={<FormLabel>subcategory</FormLabel>}
                    inputComponent={<Select
                      getOptionLabel={({ subcategory_name }) => subcategory_name}
                      getOptionValue={({ subcategory_id }) => subcategory_id}
                      options={this.state.category.subcategories}
                      value={this.state.subcategory}
                      onChange={(e) => {
                        this.setState({ subcategory: e })
                        this.onChangeValue("subcategory_id", e.subcategory_id)
                      }}
                    />}
                  />
                </FormGroup>
              }
              {
                keys.map(item => this.renderInput(item))
              }
              <FormGroup>
                <FormatFormgroupRow
                  labelComponent={<label>is bestseller?</label>}
                  inputComponent={
                    <FormCheck
                      checked={this.state.currentProduct.product_bestseller}
                      inline={true}
                      onChange={(e)=>this.onChangeValue('product_bestseller',e.target.checked)}
                      label={'Is bestseller?'}
                    />
                  }

                />
              </FormGroup>
              <FormGroup>
                <FormatFormgroupRow
                  labelComponent={<label>sizes:</label>}
                  inputComponent={
                    <div>
                      {
                        Boolean(this.state.currentProduct) &&
                        this.state.currentProduct.product_sizes.map(size => (
                          <span style={{ marginRight: "15px" }}>
                                                        <FormCheck
                                                          checked={size.available}
                                                          inline={true}
                                                          onChange={(e) => this.onChangeProductSize(e, size)}
                                                          label={<span>{size.size} [{size.size_number}]</span>}
                                                        />
                                                    </span>
                        ))
                      }
                    </div>}
                />
              </FormGroup>
              <FormGroup>
                <div style={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "5px",
                }}>
                  <FormatFormgroupRow
                    labelComponent={
                      <div>
                        <FormLabel style={{ marginRight: 5 }}>product variants</FormLabel>
                        <Button size={"sm"}
                                variant={"success"}
                                type={"button"}
                                onClick={() => this.addToDynamicArray("product_variants")}>
                          <IconAdd/>
                        </Button>
                      </div>
                    }
                    inputComponent={
                      <div>
                        {
                          Boolean(this.state.currentProduct) &&
                          this.state.currentProduct.product_variants.map((variant, index) =>
                            <div key={variant.variant_id}>
                              <Row>
                                <Col xs={5}>
                                  <FormatFormgroupRow
                                    labelComponent={<FormLabel><span
                                      style={{ fontSize: "10px" }}>{index})</span> name</FormLabel>}
                                    inputComponent={<FormControl type={"text"}
                                                                 onChange={(e) => this.onChangeDynamicArrayValue(variant.variant_id, "variant_name", e.target.value)}
                                                                 value={variant.variant_name}
                                    />}
                                    longerLabel={true}
                                  />
                                </Col>
                                <Col xs={5}>
                                  <FormatFormgroupRow
                                    labelComponent={<FormLabel>icon</FormLabel>}
                                    inputComponent={<FormControl type={"text"}
                                                                 onChange={(e) => this.onChangeDynamicArrayValue(variant.variant_id, "variant_icon", e.target.value)}
                                                                 value={variant.variant_icon}
                                    />}
                                  />
                                </Col>
                                <Col xs={1}>
                                  <Button type={"button"}
                                          variant={"danger"}
                                          size={"sm"}
                                          onClick={() => this.removeFromDynamicArray(variant)}>
                                    <IconRemove/>
                                  </Button>
                                </Col>
                              </Row>
                            </div>,
                          )
                        }
                        {
                          Boolean(this.state.currentProduct) &&
                          this.state.currentProduct.product_variants.length === 0 &&
                          <p className={"text-danger"}>no variants</p>
                        }
                      </div>
                    }
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <div style={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "5px",
                }}>
                  <FormatFormgroupRow
                    labelComponent={
                      <div>
                        <FormLabel style={{ marginRight: 5 }}>product details</FormLabel>
                        <Button size={"sm"}
                                variant={"success"}
                                type={"button"}
                                onClick={() => this.addToDynamicArray("product_details")}>
                          <IconAdd/>
                        </Button>
                      </div>
                    }
                    inputComponent={
                      <div>
                        {
                          Boolean(this.state.currentProduct) &&
                          this.state.currentProduct.product_details.map((detail, index) =>
                            <div key={detail.id}>
                              <Row>
                                <Col xs={5}>
                                  <FormatFormgroupRow
                                    labelComponent={<FormLabel><span
                                      style={{ fontSize: "10px" }}>{index})</span> key</FormLabel>}
                                    inputComponent={<FormControl type={"text"}
                                                                 onChange={(e) => this.onChangeDynamicArrayValue(detail.id, "key", e.target.value)}
                                                                 value={detail.key}
                                    />}
                                    longerLabel={true}
                                  />
                                </Col>
                                <Col xs={5}>
                                  <FormatFormgroupRow
                                    labelComponent={<FormLabel>value</FormLabel>}
                                    inputComponent={<FormControl type={"text"}
                                                                 onChange={(e) => this.onChangeDynamicArrayValue(detail.id, "value", e.target.value)}
                                                                 value={detail.value}
                                    />}
                                  />
                                </Col>
                                <Col xs={1}>
                                  <Button type={"button"}
                                          variant={"danger"}
                                          size={"sm"}
                                          onClick={() => this.removeFromDynamicArray(detail)}>
                                    <IconRemove/>
                                  </Button>
                                </Col>
                              </Row>
                            </div>,
                          )
                        }
                        {
                          Boolean(this.state.currentProduct) &&
                          this.state.currentProduct.product_details.length === 0 &&
                          <p className={"text-danger"}>no details</p>
                        }
                      </div>
                    }
                  />
                </div>

              </FormGroup>
            </Form>
          </Col>
          <Col lg={6} xl={3}>
            <JsonElement value={this.state.currentProduct} label={"current product"}
                         id={"currentProductJSON"}
                         rows={20}/>
            <Button type={"button"} size={"sm"}
                    onClick={this.addToProductArray}>
              add to products array
            </Button>
          </Col>
          <Col lg={12} xl={3}>
            <JsonElement value={this.state.productArray} label={"products array"}
                         id={"currentProductArrayJSON"}
                         rows={20}/>
          </Col>
        </Row>
        <Row>
          <h1 style={{ marginBottom: "25px" }}>
            generate products json
            <small style={{ marginLeft: "15px", color: "grey" }}>
              in loop
            </small>
          </h1>
        </Row>
        <Row>
          <Col lg={6}>
            <p>Fill those fields: category,subcategory,
              product_name,product_img,product_desc,product_collection</p>
            <FormControl type={"number"}
                         onChange={(e) => this.setState({ generatedProductsQuantity: e.target.value })}
                         placeholder={"How many should be products?"}
            />

          </Col>
          <Col lg={6}>
            <p>
              Result will be in products array field
            </p>
            <Button variant={"warning"} onClick={this.generateProductsInLoop}>generate in loop</Button>

          </Col>
        </Row>
      </div>
    )
  }
}

export default GenerateProductView