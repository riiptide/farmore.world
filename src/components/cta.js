import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Signup to know when the farmore app is ready for download."
    />
  <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

                    <input type="hidden" name="bot-field" />

                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required/>
                    </div>
                        <Button onclick="this.form.submit()">Get Early Access</Button>


        </form>
  </div>
)

export default CallToAction
