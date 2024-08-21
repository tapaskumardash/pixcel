import { useEffect } from "react";
import Header from "../Header/Header";
import "./Contact.css"

const Contact = (props) => {
  useEffect(() => {
    document.title = "Contact Us - Get in touch";
  }, [])

  return (
    <>
      <Header company={props.company} />

      <div className="container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have questions, feedback, or suggestions for Pixcel, feel free to reach out.</p>

          <h2>Get in Touch</h2>
          <p>If you have any inquiries about the platform, need assistance, or want to collaborate, don't hesitate to contact us. We're here to help and always open to new ideas.</p>
          <p>Email: <a href="mailto:tapasreeve@gmail.com">tapasreeve@gmail.com</a></p>

          <h2>Stay Connected</h2>
          <p>Stay up-to-date with the latest updates, features, and community contributions by following our project on <a href="https://github.com/tapaskumardash/pixcel">GitHub</a>.</p>
        </div>
      </div>
    </>
  )
}

export default Contact;
