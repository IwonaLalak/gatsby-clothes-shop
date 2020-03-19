import React from "react"
import PriceFilter from "../filters/PriceFilter"
import VariantFilter from "../filters/VariantFilter"
import { REST_FILTERS } from "../../../../../utilities/helpers/from_rest"


function SubcategoryFiltersSection() {

  const filters = REST_FILTERS

  return (
    <section id={"SUBCATEGORYFILTERS"}>
      <PriceFilter filter={filters[0]}/>
      <VariantFilter filter={filters[1]}/>
    </section>
  )
}

export default SubcategoryFiltersSection