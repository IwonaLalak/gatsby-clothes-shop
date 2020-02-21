import React from 'react';
import {SVG} from "../../../../shared/svg/SVG";
import {pathBottom, pathDimensions, pathTOP} from "../../../../../utilities/svgPaths";

const WaveSection = () => {
    return (
        <section id={'WAVE'}>
            <SVG fill={'#DDD'} viewbox={pathDimensions()} path={pathTOP()}/>
            <h1>
                wave
            </h1>
            <SVG fill={'#DDD'} viewbox={pathDimensions()} path={pathBottom()}/>

        </section>
    );
};

export default WaveSection;