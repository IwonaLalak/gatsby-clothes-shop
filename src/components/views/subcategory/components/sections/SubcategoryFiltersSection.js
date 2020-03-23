import React from "react"
import PriceFilter from "../filters/PriceFilter"
import VariantFilter from "../filters/VariantFilter"
import SizeFilter from "../filters/SizeFilter"
import CheckboxFilter from "../filters/CheckboxFilter"
import { IconDelete } from "../../../../shared/icons/FontAwesomeIcons"


const SubcategoryFiltersSection = ({ filters, handleChangeActiveFilters, handleClickClearFilters }) => {

  return (
    <section id={"SUBCATEGORYFILTERS"}>
      <CheckboxFilter
        filter={filters[0]} handleChangeActiveFilters={(field, val) => handleChangeActiveFilters(field, val)}/>
      <PriceFilter
        filter={filters[1]} handleChangeActiveFilters={(field, val) => handleChangeActiveFilters(field, val)}/>
      <VariantFilter
        filter={filters[2]} handleChangeActiveFilters={(field, val) => handleChangeActiveFilters(field, val)}/>
      <SizeFilter
        filter={filters[3]} handleChangeActiveFilters={(field, val) => handleChangeActiveFilters(field, val)}/>
      <div style={{
        marginTop: "15px",
      }}
           onClick={() => handleClickClearFilters()}>
        <IconDelete/> Clear all filters
      </div>
    </section>
  )
}

export default SubcategoryFiltersSection