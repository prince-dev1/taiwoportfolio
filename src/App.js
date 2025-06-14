import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "./imagery.jpeg";
import dictionaryImg from "./dictionary.jpeg";
import apartmentImg from "./apartment.jpeg";
import surveyImg from "./surveyform.jpeg";
import churchImg from "./churchweb.png";
import cateringImg from "./catering.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "animate.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid px-0">
       {/*Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
         <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#home">Taiwo Solomon</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
           </button>
              <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                 <a className="nav-link" href="#about">About</a>
                </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                    </li>
               </ul>
              </div>
          </div>
        </nav>

      {/* Hero Section */}
      <section className="container text-center mb-5">
       <img
        src={profilePic}
        alt="Oloniju Taiwo Solomon"
        className="img-fluid rounded-circle mb-3 animate__animated animate__fadeIn"
       style={{
               width: "145px",
               height: "160px",
               objectFit: "cover",
               border: "4px solid #28a745",
              }}
       />
        <h1 className="display-4 fw-bold name-heading">
          Hi, I am Oloniju Taiwo Solomon
        </h1>
         <p className="lead">Frontend Developer & Project Manager</p>
          <a href="#projects" className="btn btn-success mt-3">
            View My Work
          </a>
      </section>

      {/* About Section */}
      <section className="container mb-5" id="about">
        <h2 className="mb-3 about-heading">About Me</h2>
        <p>
          I'm a certified frontend developer with vast knowledge in HTML, CSS, Javascript, Reactjs, and Bootstrap. I have passion for building responsive and
          interactive web interfaces. I also manage web projects from start to
          finish.
        </p>
      </section>

      {/* Projects Section */}
        <section className="container mb-5" id="projects">
        <h2 className="mb-4">Projects</h2>
         <div className="row justify-content-center">
         <div className="col-md-6 col-lg-4 mb-4">
        <div className="card shadow-sm p-4 mb-3 h-100">
        <img
        src={dictionaryImg}
        alt="Dictionary App"
        className="card-img-top mb-3 img-fluid"
        style={{ maxHeight: "200px", objectFit: "cover", borderRadius: "8px" }}
        />
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
    </div>
   </div>

   <div className="row justify-content-center">
  <div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm p-4 mb-3">
    <img
        src={apartmentImg}
        alt="Apartment website"
        className="card-img-top mb-3 img-fluid"
        style={{ maxHeight: "200px", objectFit: "cover", borderRadius: "8px" }}
        />
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
      </div>
     </div>
  
  <div className="row justify-content-center">
  <div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm p-4 mb-3">
    <img
        src={surveyImg}
        alt="Survey form"
        className="card-img-top mb-3 img-fluid"
        style={{ maxHeight: "200%", objectFit: "cover", borderRadius: "8px" }}
        />
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
    </div>
  </div>
  
  <div className="row justify-content-center">
  <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm p-4 mb-3">
    <img
        src={churchImg}
        alt="Church Website"
        className="card-img-top mb-3 img-fluid"
        style={{ maxHeight: "200%", objectFit: "cover", borderRadius: "8px" }}
        />
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
    </div>
  </div>

   <div className="row justify-content-center">
   <div className="col-md-6 col-lg-4 mb-4">
   <div className="card shadow-sm p-4 mb-3">
    <img
        src={cateringImg}
        alt="Catering Service website"
        className="card-img-top mb-3 img-fluid"
        style={{ maxHeight: "200%", objectFit: "cover", borderRadius: "8px" }}
        />
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
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="container mb-5" id="contact">
        <h2 className="mb-3">Contact</h2>
         <ul className="list-unstyled">
          <li>
           <i className="bi bi-envelope-fill me-2"></i>
             Email: olonijutaiwo@gmail.com
          </li>
             <br />
           <li>
            <i className="bi bi-telephone-fill me-2"></i>
             Phone: +234-810-310-8279
           </li>
            <br />
            <li>
            <i className="bi bi-whatsapp me-2"></i>
              WhatsApp: +234-810-310-8279
              </li>
              </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-white bg-dark py-3 rounded">
        <p className="mb-0">&copy; {new Date().getFullYear()} Taiwo Solomon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

