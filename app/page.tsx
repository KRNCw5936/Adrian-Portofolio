'use client'

import { useEffect } from 'react'
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';

const skillMapping = {
  express: 'Express.js',
  html5: 'HTML5',
  css3: 'CSS3',
  js: 'JavaScript',
  php: 'PHP',
  'node-js': 'Node.js',
  laravel: 'Laravel',
  golang: 'Go (Golang)',
  bootstrap: 'Bootstrap',
  mysql: 'MySQL',
  vue: 'Vue'
};

export default function HomePage() {
  useEffect(() => {
    // JS interaktif bisa diletakkan di sini jika ada
  }, [])

  return (
    <>
      {/* Animasi Background */}
      <div className="bg-animation">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="square" key={i}></div>
        ))}
      </div>

      <div className="container">
        {/* Header */}
        <header>
          <div className="logo">
            Porto<span>folio</span>
          </div>
          <nav>
            <ul>
              <li><a href="#home" style={{ fontWeight: 'bold' }}>Home</a></li>
              <li><a href="#about" style={{ fontWeight: 'bold' }}>About</a></li>
              <li><a href="#skills" style={{ fontWeight: 'bold' }}>Skills</a></li>
              <li><a href="#projects" style={{ fontWeight: 'bold' }}>Projects</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-text">
            <h1>Hi, I'm <span>Adrian Baihaqi</span><br />Software Developer</h1>
            <p>I'm enthusiastic about building websites that are both visually appealing and functional. With my expertise in various technologies, I'm able to turn your ideas into reality.</p>
          </div>
          <div className="hero-image">
            <img src="/images/adrian-mantap.jpg" alt="Profile" className="profile-img" />
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="section-title"><h2>About Me</h2></div>
          <div className="about-content">
            <div className="about-text">
              <h3>Who Am I?</h3>
              <p>I'm a software developer with a passion for building functional, efficient, and user-friendly applications. I have experience in both front-end and back-end development across web and desktop platforms, and I'm always eager to learn and work with new technologies.</p>
              <p>My journey in software development began during my time in vocational school, and since then, I’ve consistently improved my skills through various personal and team projects.</p>
              <p>When I'm not coding, I enjoy exploring emerging technologies, learning about different industries, and engaging in hobbies that broaden my perspective.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <div className="section-title"><h2>My Skills</h2></div>
          <div className="skills-container">
            {[
              'express', 'html5', 'css3', 'js', 'php', 
              'node-js', 'laravel', 'golang', 'bootstrap', 
              'mysql', 'vue'
            ].map((icon, i) => (
              <div className="skill-item" key={i}>
                {/* Kondisi untuk menampilkan ikon */}
                {icon === 'express' ? (
                  <SiExpress className="skill-icon" />
                ) : icon === 'mysql' ? (
                  <SiMysql className="skill-icon" />
                ) : icon === 'vue' ? (
                  <SiVuedotjs className="skill-icon" />
                ) : (
                  <i className={`fab fa-${icon} skill-icon`}></i>
                )}
        
                {/* Nama lengkap bahasa/framework dan bold */}
                <span className="skill-name" style={{ fontWeight: 'bold' }}>
                  {skillMapping[icon as keyof typeof skillMapping]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <div className="section-title"><h2>My Projects</h2></div>
          <div className="projects-container">

            <div className="project-card">
              <img src= "/images/mockup3.png" alt="Project 1" className="project-img" />
              <div className="project-info">
                <h3>Virtulist - To-Do List</h3>
                <p>   A responsive and user-friendly task management web application designed to help users organize, prioritize, and track their daily activities efficiently. 
                Built using Laravel for both frontend and backend development, and developed using PHP and JavaScript.</p>
                <div className="project-links">
                  <a href="https://github.com/KRNCw5936/Virtulist-To-Do-List.git"><i className="fab fa-github"></i> Code</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src="/images/desktop.png" alt="Project 2" className="project-img" />
              <div className="project-info">
                <h3>Student Data Management - Desktop App</h3>
                <p>A desktop application designed to manage student data efficiently, including adding, editing, and deleting records. 
                Developed using Java and built with the NetBeans IDE, this application features a user-friendly interface suitable for academic environments.</p>
                <div className="project-links">
                  <a href="https://github.com/KRNCw5936/Simple-Desktop.git"><i className="fab fa-github"></i> Code</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src="/images/laptop-and-handphone.png" alt="Project 3" className="project-img" />
              <div className="project-info">
                <h3>Starbhak Market - Website and Mobile</h3>
                <p>  A marketplace application created for both web and mobile platforms, showcasing a modern and intuitive interface for browsing various digital products. 
                      The website was developed using standard web technologies such as HTML, CSS, and JavaScript, while the mobile version was built using Flutter. 
                      The project emphasizes a clean visual layout, responsive design, and smooth user experience across devices.</p>
                <div className="project-links">
                  <a href="https://github.com/KRNCw5936/Assesment_Web.git"><i className="fab fa-github"></i> Code for Website</a>
                  <a href="https://github.com/KRNCw5936/Asses_Flutter.git"><i className="fab fa-github"></i> Code for Mobile</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <h2 style={{ marginBottom: 20 }}>Connect with Me</h2>
        <div className="social-links">
          <a href="https://github.com/KRNCw5936"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/adrian-baihaqi-069a71303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/adrian_portofolio/"><i className="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2025 Adrian Baihaqi. All rights reserved.</p>
      </footer>
    </>
  )
}
