import React from "react"
import Select from "react-select"

class SizeFilter extends React.Component {

  state = {
    values: [],
  }

  render() {
    let { filter } = this.props
    let { values } = this.state

    const customComponent = ({ data, innerProps }) => (
      <div {...innerProps} style={{ cursor: "pointer" }}>
      <span style={{
        border: "1px solid #CCC",
        borderRadius: "50%",
        display: "inline-block",
        width: "24px",
        height: "24px",
        margin: "1px 5px",
        textAlign: "center",
        verticalAlign: "center",
      }}>{data.size}</span>

      </div>)

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
          getOptionLabel={({ size }) => size}
          getOptionValue={({ size_number }) => size_number}
          onChange={(e) => {
            this.setState({ values: e })
            this.props.handleChangeActiveFilters(filter.field, e)
          }}
          components={{ Option: customComponent }}
        />
      </div>
    )
  }
}

export default SizeFilter