import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: COLORS.darkGreen }}>{description}</p>
  </>
)

export default SectionHeader
