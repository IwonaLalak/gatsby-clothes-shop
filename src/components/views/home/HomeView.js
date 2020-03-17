import React from "react"
import LastSection from "./components/sections/LastSection"
import WaveSection from "./components/sections/WaveSection"
import BannerSection from "./components/sections/BannerSection"

const HomeView = ({ products }) => {
  return (
    <div id={"HOMEVIEW"}>
      <BannerSection/>
      <LastSection products={products}/>
      <WaveSection/>
    </div>
  )
}

export default HomeView