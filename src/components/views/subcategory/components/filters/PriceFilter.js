import React from "react"
import RangeInput from "../../../../shared/inputs/RangeInput"

const PriceFilter = ({ filter, handleChangeActiveFilters }) => {
  return (
    <div style={{ marginTop: "15px" }}>
      <RangeInput
        label={filter.name}
        MIN={filter.values[0].value}
        MAX={filter.values[1].value}
        STEP={filter.others[0].value}
        onChange={(values) => handleChangeActiveFilters(filter.field, values)}
      />
    </div>
  )
}

export default PriceFilter