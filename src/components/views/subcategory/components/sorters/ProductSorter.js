import React from "react"
import Select from "react-select"
import { Col, Row } from "react-bootstrap"

const ProductSorter = ({ value, options, handleChangeSort }) => {

  return (
    <Row>
        <Col xs={12} sm={12} md={12} lg={{span:5,offset:7}} xl={{span:4,offset:8}}>
          <Select
            value={value}
            options={options}
            getOptionLabel={({ key }) => key}
            getOptionValue={({ value }) => value}
            onChange={(e) => handleChangeSort(e)}
            isClearable={true}
            placeholder={'Default sorting'}
          />
        </Col>
    </Row>
  )
}

export default ProductSorter