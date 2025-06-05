import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold">Oloniju Taiwo Solomon</h1>
        <p className="lead">Frontend Developer & Project Manager</p>
        <a href="#projects" className="btn btn-success mt-3">
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section className="mb-5">
        <h2 className="mb-3">About Me</h2>
        <p>
          I'm a certified frontend developer with vast knowledge in HTML, CSS, Javascript, Reactjs, and Bootstrap. I have passion for building responsive and
          interactive web interfaces. I also manage web projects from start to
          finish.
        </p>
      </section>

      {/* Projects Section */}
<section className="mb-5" id="projects">
  <h2 className="mb-4">Projects</h2>

  <div className="card shadow-sm p-4 mb-3">
    <h3>Dictionary App</h3>
    <p>
      Searches word definitions using a public API with error handling.
    </p>
    <a
      href="https://taiwodictionary.netlify.app"
      className="btn btn-outline-primary"
      target="_blank"
      rel="noreferrer"
    >
      View Live
    </a>
  </div>

  <div className="card shadow-sm p-4 mb-3">
    <h3>Service Apartment website</h3>
    <p>
      A responsive website for a service apartment with a booking form and
      gallery.
    </p>
    <a
      href="https://newapartment.netlify.app/"
      className="btn btn-outline-primary"
      target="_blank"
      rel="noreferrer"
    >
      View Live
    </a>
  </div>

  <div className="card shadow-sm p-4 mb-3">
    <h3>Survey Form</h3>
    <p>
      A simple survey form that collects user feedback with validation.
    </p>
    <a
      href="https://lysandersurvey.netlify.app/"
      className="btn btn-outline-primary"
      target="_blank"
      rel="noreferrer"
    >
      View Live
    </a>
  </div>

  <div className="card shadow-sm p-4 mb-3">
    <h3>Church Website</h3>
    <p>
       A responsive website for a church with service schedules, announcement, and contact information.
    </p>
    <a
      href="https://greatnesspeak.netlify.app/"
      className="btn btn-outline-primary"
      target="_blank"
      rel="noreferrer"
    >
      View Live
    </a>
  </div>

   <div className="card shadow-sm p-4 mb-3">
    <h3>Catering Service website</h3>
    <p>
       A responsive website for a catering service with menu, service, about, and contact information.
    </p>
    <a
      href="https://dynamikcatering.netlify.app/"
      className="btn btn-outline-primary"
      target="_blank"
      rel="noreferrer"
    >
      View Live
    </a>
  </div>

</section>

      {/* Contact Section */}
      <section className="mb-5" id="contact">
        <h2 className="mb-3">Contact</h2>
        <ul className="list-unstyled">
          <li>Email: olonijutaiwo@gmail.com</li>
          <li>Phone: +234-810-310-8279</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-white bg-dark py-3 rounded">
        <p className="mb-0">&copy; {new Date().getFullYear()} Taiwo Solomon</p>
      </footer>
    </div>
  );
}

export default App;

