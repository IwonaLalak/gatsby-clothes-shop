import React from "react";

export const SVG = ({viewbox,path,fill}) => (
    <svg viewBox={viewbox} preserveAspectRatio={"none"}>
        <path d={path}
              style={{fill}}>
        </path>
    </svg>
)