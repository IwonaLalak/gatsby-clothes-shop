import React from "react"
import { Form } from "react-bootstrap"

const CheckboxFilter = ({ filter, handleChangeActiveFilters }) => {
  return (
    <Form style={{ display: "flex" }}>
      <Form.Check type="checkbox" onChange={(e) => handleChangeActiveFilters(filter.field, e.target.checked)}
                  id={filter.name + "checkbox"} checked={filter.currentValue}/>
      <label style={{ fontWeight: "bold" }} htmlFor={filter.name + "checkbox"}>{filter.name}</label>
    </Form>
  )
}

export default CheckboxFilter