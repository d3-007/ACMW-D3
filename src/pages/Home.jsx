// src/pages/Home.jsx
import React from "react";

function Home() {
  return (
    <section className="page home">
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">LensCraft</h1>
          <nav>
            <ul>
              <li>
                <a href="/" className="active">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Capture The Moment</h1>
            <p>
              Explore a curated collection of stunning photographs from various
              genres. Welcome to LensCraft, where every picture tells a story.
            </p>
            <a href="#gallery" className="btn btn-outline">
              View Gallery
            </a>
          </div>

          <div className="showcase-card card">
            <p>Say cheese !</p>
            <img src="/css/camera.png" alt="Featured photograph" />
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery py-4">
        <div className="container">
          <h2 className="text-center my-2">Gallery</h2>
          <p className="text-center my-1 text-secondary">
            A selection of my recent work across different photography styles.
            Discovring the world through my lens.
          </p>

          <div className="grid grid-3 gallery-grid my-3">
            <div className="card">
              <img src="/css/landscape.jpg" alt="Photo 1" />
              <h3>Landscape</h3>
              <p>The soothing touch of the land</p>
            </div>
            <div className="card">
              <img src="/css/potrait.png.jpg" alt="Photo 2" />
              <h3>Portrait</h3>
              <p>Childhood memories</p>
            </div>
            <div className="card">
              <img src="/css/street.png.jpg" alt="Photo 3" />
              <h3>Street</h3>
              <p>Life in the city street</p>
            </div>
            <div className="card">
              <img src="/css/woldlife.png.jpg" alt="Photo 4" />
              <h3>Wildlife</h3>
              <p>Moments from the wild</p>
            </div>
            <div className="card">
              <img src="/css/macro.png.jpg" alt="Photo 5" />
              <h3>Macro</h3>
              <p>Details that matter</p>
            </div>
            <div className="card">
              <img src="/css/event.png.jpg" alt="Photo 6" />
              <h3>Events</h3>
              <p>Stories from special days</p>
            </div>
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

export default Home;
