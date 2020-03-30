import React from "react";
import "../css/Contact.css"

const Contact = () => {
        return (
                <div className="container">
                    <div className="contactContent">
                        <h2 id="links">Interesting links</h2>
                        <a href="https://www.linkedin.com/company/genuitek-software-house"
                           target="_blank"
                           rel="noopener noreferrer">https://www.linkedin.com/company/genuitek-software-house/</a>
                        <a href="https://genuitek.com/"
                           target="_blank"
                           rel="noopener noreferrer">https://genuitek.com//</a>
                        <h2 id="contact">Contact with me!</h2>
                        <label>Name:</label>
                        <input type="text"/>
                        <label>Email:</label>
                        <input type="text"/>
                        <label>Tell me your story:</label>
                        <textarea type="text" rows="3"></textarea>
                        <button>Send</button>
                    </div>
                </div>
        )
}
export default Contact;