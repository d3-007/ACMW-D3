import React from "react";

function Contact() {
  return (
    <section className="page contact">
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">LensCraft</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact" className="active">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>How to contact Me ?</p>
        </div>
      </section>

      <section className="contact-form-section py-3">
        <div className="container grid">
          <div>
            <h2>Get In Touch</h2>
            <p>
              Fill in the form to send me a message regarding photography
              inquiries, collaborations, or any questions you may have.
            </p>
          </div>

          <div className="card">
            <h3>Contact Form</h3>
            <form id="contact-form">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              <p id="form-status" className="text-secondary my-1"></p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container flex">
          <p>&copy; 2025 LensCraft</p>
          <p>Email: sample@gmail.com</p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
