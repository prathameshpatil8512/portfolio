import "./Homepage.css";

function Homepage() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">Prathamesh Patil</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm <span>Prathamesh</span></h1>
        <p>I'm a passionate <strong>Software Tester</strong> who loves crafting elegant and efficient solutions.</p>
        <a href="#projects" className="cta">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a dedicated Software Tester with a strong focus on ensuring <strong>product quality, reliability, and user satisfaction.</strong> 
          I have experience in both <strong>manual</strong> and <strong>automated</strong> testing, working across different platforms to identify bugs early and improve development efficiency.
          I’m skilled in using tools like <strong>Selenium, Postman, JIRA, and Jenkins</strong>, and I’m comfortable working in Agile environment. My goal is to make every release as stable and seamless as possible through thorough test planning, execution, and reporting.
          Outside of testing, I enjoy <strong>learning new automation frameworks and contributing to continuous improvement processes</strong> that help teams deliver higher-quality software faster.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive portfolio built with React.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p>Interested in working together or just want to say hi?</p>
        <a href="mailto:prathameshpatil8512@yahoo.com" className="cta">Contact Me</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Prathamesh Patil. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
