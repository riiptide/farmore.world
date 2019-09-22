import React from "react"

import marketStand from "../images/market_stand_vegetables_variety_colors_stall_eggplant_tomatoes-759704.jpg"

import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Know what is available before you go"
      description="Don't spend time driving from one market to another searching for your favorite product."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Why Farmore</h3>
        <p style={{ color: COLORS.darkGreen, padding: "1rem 1rem"}}>
          If you are a farmer's market vendor, a farm store owner, a farmer's market organizer or a health-conscious buyer who buys local, farmore is for you!!
        </p>
      </div>
      <div>
        <img src={marketStand} alt="produce" />
      </div>
    </content>
  </div>
)

export default Content
