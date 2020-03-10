import React from 'react';
import LastSection from "./components/sections/LastSection";
import WaveSection from "./components/sections/WaveSection";

const HomeView = ({products}) => {
    return (
        <div id={'HOMEVIEW'}>
            <LastSection products={products}/>
            <WaveSection/>
        </div>
    );
};

export default HomeView;