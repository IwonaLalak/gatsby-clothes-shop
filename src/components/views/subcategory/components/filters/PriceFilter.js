import React from 'react';
import RangeInput from "../../../../shared/inputs/RangeInput"

const PriceFilter = ({filter}) => {
    return (
        <div>
            <RangeInput
              label={filter.name}
              MIN={filter.values[0].value}
              MAX={filter.values[1].value}
              STEP={filter.others[0].value}
            />
        </div>
    );
};

export default PriceFilter;