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

                    <div>
                        <input style={{margin-right:3px,margin-right:3px,margin-bottom:3px,margin-top:3px,border-radius: 10px}} 
  type="text" name="name" id="name" placeholder=" Name "required/>
                       
                        <input style={{margin-right:3px,margin-right:3px,margin-bottom:3px,margin-top:3px,border-radius: 10px}} 
  type="text" name="email" id="email" placeholder=" email "required/>
                    </div>
                        <Button onclick="this.form.submit()">Get Early Access</Button>


        </form>
  </div>
)

export default CallToAction
