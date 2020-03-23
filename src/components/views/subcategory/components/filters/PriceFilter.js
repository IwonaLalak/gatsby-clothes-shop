import React from "react"
import RangeInput from "../../../../shared/inputs/RangeInput"

const PriceFilter = ({ filter, handleChangeActiveFilters }) => {
  return (
    <div style={{ marginTop: "15px" }}>
      <RangeInput
        values={filter.currentValue}
        label={filter.name}
        MIN={filter.options[0].value}
        MAX={filter.options[1].value}
        STEP={filter.others[0].value}
        onChange={(values) => handleChangeActiveFilters(filter.field, values)}
      />
    </div>
  )
}

export default PriceFilter