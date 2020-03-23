import * as React from "react"
import { Range, getTrackBackground } from "react-range"
import { formatMoney } from "../../../utilities/formatters/money"
import { COLOR_PRIMARY, COLOR_PRIMARY_LIGHT } from "../../../utilities/colors/jscolors"


class RangeInput extends React.Component {

  state = {
    values: [1, 2],
  }

  componentDidMount() {
    this.setState({
      values: [this.props.MIN, this.props.MAX],
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.setState({
        values: this.props.values,
      })
    }
  }

  render() {

    const { STEP, MIN, MAX, label } = this.props

    return (
      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <label style={{
            fontWeight: "bold",
            margin: 0,
          }}>
            {label}
          </label>
          <output id="output">
            {formatMoney(this.state.values[0])} - {formatMoney(this.state.values[1])}
          </output>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0 5px",
          }}
        >
          <Range
            values={this.state.values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={values => {
              this.setState({ values })
            }}
            onFinalChange={values => this.props.onChange(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: this.state.values,
                      colors: ["#BBB", COLOR_PRIMARY_LIGHT, "#BBB"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "15px",
                  width: "15px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                  outline: "none",
                }}
              >
                <div
                  style={{
                    height: "7px",
                    width: "7px",
                    borderRadius: "50%",
                    transition: "all ease 0.5s",
                    backgroundColor: isDragged ? COLOR_PRIMARY : "#BBB",
                  }}
                />
              </div>
            )}
          />
        </div>
      </div>
    )
  }
}

export default RangeInput