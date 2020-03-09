import React from 'react';
import LastSection from "./components/lastSection/LastSection";
import WaveSection from "./components/waveSection/WaveSection";

const HomeView = ({products}) => {
    return (
        <div id={'HOMEVIEW'}>
            <LastSection products={products}/>
            <WaveSection/>
        </div>
    );
};

export default HomeView;