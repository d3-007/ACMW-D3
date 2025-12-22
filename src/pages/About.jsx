// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <section className="page about">
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">LensCraft</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about" className="active">
                  About
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="page-header">
        <div className="container">
          <h1>About</h1>
          <p>Ammature photographer trying to capture my little moments of happiness.</p>
        </div>
      </section>

      <section className="about-content py-3">
        <div className="container grid">
          <div>
            <h2>Behind the Camera</h2>
            <p>
              Hi, I'm Dhriti, I'm studying 1st year B.tec.
              Photography has been my passion from a young age. I love to capture
              candid moments and transform them into lasting memories.
            </p>
            <p>
              I dont have a faviorite genre as such but I do enjoy clicking pictures of flowers.
              The flowers that wither as time goes by stayed forever in my gallery, this inspired me
              to pursue photography more seriously.
            </p>
          </div>
          <div className="card">
            <h3>Little About Me</h3>
            <ul className="about-list">
              <li>Name: D3</li>
              <li>Age: 17</li>
              <li>Hobbies: photography, painting, crafts</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container flex">
          <p>&copy; 2025 LensCraft</p>
        </div>
      </footer>
    </section>
  );
}

export default About;
