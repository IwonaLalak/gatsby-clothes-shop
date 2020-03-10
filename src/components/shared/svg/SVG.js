import React from "react";

export const SVG = ({viewbox,path,fill}) => (
    <svg viewBox={viewbox} preserveAspectRatio={"none"} className={'svg-wave'}>
        <path d={path}
              style={{fill}}>
        </path>
    </svg>
)