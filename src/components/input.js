import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

const Input = ({ children }) => (
  <inoput
    style={{
      padding: ".5rem 2.5rem",
      
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      marginRight:3px;
      marginLeft:3px;
      marginBottom:3px;
      marginTop:3px;



    }}
  >
    {children}
  </input>
)

export default Input
