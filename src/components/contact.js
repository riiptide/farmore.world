import React from 'react'
import Button from "../components/button"
import SectionHeader from "./section-header"

const Contact = (props) => (
    
        <div className="inner">
                <SectionHeader
      id="contact"
        title="Stay Updated"
      description="Signup"
    />
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

                    <input type="hidden" name="bot-field" />

                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required/>
                    </div>
                        <input type="submit" value="Send Message" className="special" />
                        <Button onclick="this.form.submit()">Get Early Access</Button>


        </form>
            </section>

        </div>
    
)

export default Contact
