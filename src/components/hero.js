import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import logo from "../images/farmore-logo-main.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "1rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <img
      src={logo}
      alt="Farmore"
    />
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Connect with your local farmer's market.
    </p>
    <div style={{ textAlign: "center" }}>
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field"/>

        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" Name "
            required
          />

          <input
            type="text"
            name="email"
            id="email"
            placeholder=" email "
            required
          />
        </div>
        <Button onclick="this.form.submit()">Get Early Access</Button>
      </form>
    </div>
    <div style={{ margin: 1, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
