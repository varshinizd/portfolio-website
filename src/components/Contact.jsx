import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Add current time
    const now = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_jg34gao",      // Service ID
        "template_5jt5xk6",     // Template ID
        form.current,
        "vPLfyw8hCA_-lF7N7"       // Replace with your EmailJS Public Key
      , {
        time: now               // Pass "time" to match your template
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, please try again later.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" required />

        <label>Email</label>
        <input type="email" name="from_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
