import React from 'react';
import './App.css'; // Import your CSS files here
import './mediaqueries.css';
import ProfilePicture  from './assests/profile-pic.png';
import LinkedIn  from './assests/linkedin.png';
import GitHub  from './assests/github.png';
import about from "./assests/about-pic.png";
import experience from "./assests/experience.png";
import education from "./assests/education.png";
import arrow from "./assests/arrow.png";
import checkmark from "./assests/checkmark.png";
import email from "./assests/email.png";
import project3 from "./assests/project-3.png";
import project2 from "./assests/project-2.png";
import project1 from "./assests/project-1.png";
// Navbar component
function Navbar() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // Function to toggle the menu
  const toggleMenu = () => {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Rishi Sundar</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Rishi Sundar</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

// Profile section component
function Profile() {
  return (
    <section id="profile">
      <div class="section__pic-container">
        <img src={ProfilePicture} alt="John Doe profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Rishi Sundar</h1>
        <p class="section__text__p2">Full Stack Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onClick={() => window.open('https://drive.google.com/file/d/1pSsOg6NbxGnPr9tZp4hn7MVgVTVPA-b3/view?usp=sharing')}
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={LinkedIn}
            alt="My LinkedIn profile"
            class="icon"
            onClick={() => window.open('https://linkedin.com/')}
          />
          <img
            src={GitHub}
            alt="My Github profile"
            class="icon"
            onClick={() => window.open('https://github.com/')}
          />
        </div>
      </div>
    </section>
  );
}

// About section component
function About() {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={about}
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={experience}
                alt="Experience"
                class="icon"
              />
              <h3>Internship</h3>
              <p>one month<br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src={education}
                alt="Education"
                class="icon"
              />
              <h3>Education</h3>
              <p>B.E Computer Science <br />and Engineering</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            Passionate and motivated Full Stack Developer, eager to excel and contribute positively to projects. 
            Despite being a fresher, I bring a strong foundation in programming and a relentless drive to learn 
            and adapt to new technologies. Thrive in collaborative environments, leveraging skills to tackle 
            challenges and deliver exceptional results.With a keen eye for detail and a dedication to continuous 
            improvement, I am committed to making a meaningful impact in the dynamic world of software development.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  );
}

// Experience section component
function Experience() {
  return (
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">SKILLS</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>React Vite</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>Django</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>Mango DB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience"
                  class="icon"
                />
                <div>
                  <h3>SpringBoot</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
  );
}

// Projects section component
function Projects() {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={project1}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={project2}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={project3}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
  );
}

// Contact section component
function Contact() {
  return (
    <section id="contact">
       <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={LinkedIn}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
    </footer>
  );
}

// Main App component
function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
