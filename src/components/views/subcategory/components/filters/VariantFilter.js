import React from "react"
import Select from "react-select"
import { Badge } from "react-bootstrap"
import { isLight } from "../../../../../utilities/colors/tinycolor"
import { IconDelete } from "../../../../shared/icons/FontAwesomeIcons"

class VariantFilter extends React.Component {

  state = {
    values: [],
  }

  removeFromValuesArray = (obj) => {
    alert("aa")
    let arr = this.state.values
    arr.splice(arr.findIndex(o => o.key === obj.key), 1)
    this.setState({ values: arr })
  }

  render() {
    let { filter } = this.props
    let { values } = this.state

    const customComponent = ({ data, innerProps }) => (
      <div {...innerProps} style={{ cursor: "pointer" }}>
      <span style={{
        backgroundColor: data.hex,
        display: "inline-block",
        content: "",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        marginRight: "5px",
        marginLeft: "5px",
      }}></span>
        <span>
        {data.key}
      </span>
      </div>
    )


    return (
      <div style={{ marginTop: "15px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <label style={{
            fontWeight: "bold",
            margin: 0,
          }}>{filter.name}</label>
          <span>
          Selected:{values ? values.length : 0}
        </span>
        </div>
        <Select
          isMulti={true}
          options={filter.options}
          value={values}
          getOptionLabel={({ key }) => key}
          getOptionValue={({ value }) => value}
          onChange={(e) => this.setState({ values: e })}
          components={{ MultiValueLabel: customComponent, Option: customComponent }}
        />
      </div>
    )
  }
}

export default VariantFilter