import React,{useEffect, useState} from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical';


const Home = () => {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animate once per scroll
  }, []);
    const [showTyped, setShowTyped] = useState(false);

  useEffect(() => {
    setShowTyped(true); // render Typed only after mount
  }, []);
  return (
    <div>
      
      <div className="my-name" id="home" data-aos="fade-up">
        <h1>Hey, my name is</h1>
        <h2>Nikita Sharma</h2>
        <h3>
        <Typical
          steps={['Software Developer', 1500, 'AI Enthusiast', 1500, 'Full Stack Developer', 1500]}
          loop={Infinity}
          wrapper="span"
        />
      </h3>
      </div>
      <div className="about-me" id="about" data-aos="fade-right">
       <div className="left-sec">
          <div className="about-me-title">About Me</div>
          <div className="about-me-description">
            Hi, I'm Nikita Sharma, a passionate and driven Software Developer currently pursuing my B.Tech in Computer Science and Engineering. I specialize in building dynamic web applications using React.js, Node.js, and Python, with a strong interest in AI integration, full-stack development, and interactive user experiences.
I’m always eager to explore new technologies and build solutions that are not only functional but also user-friendly. My goal is to grow as a developer, contribute to meaningful projects, and secure a challenging SDE role at a top tech company.
Let’s build something amazing together!</div>
       </div>
       <figure className='me'> <img src="./me.png" /> </figure>
         </div>

      <div className="my-skills" data-aos="fade-up">My Skills</div>

      <div className="skills-list">
        <div className='skills-main'>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./html-5.png" alt="HTML" />
              <span>HTML</span>
            </div>
            <div className="flip-card-back">
              <p>Proficient</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./css-3.png" alt="CSS" />
              <span>CSS</span>
            </div>
            <div className="flip-card-back">
              <p>Proficient</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./js.png" alt="JavaScript" />
              <span>JS</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./library.png" alt="React" />
              <span>Reactjs</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./nodejs.png" alt="Nodejs" />
              <span>Nodejs</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./c-.png" alt="C++" />
              <span>C++</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./api.png" alt="API" />
              <span>REST Api</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./mysql.png" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./social.png" alt="Git" />
              <span>Git</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./python.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="flip-card-back">
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./wordpress.png" alt="Wordpress" />
              <span>Wordpress</span>
            </div>
            <div className="flip-card-back">
              <p>Beginner</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./postman.png" alt="Postman" />
              <span>Postman</span>
            </div>
            <div className="flip-card-back">
              <p>Beginner</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="projects" id="projects" data-aos="fade-up">
        Projects
      </div>
      <div className="projects-main" data-aos="fade-up">
        <div className="project list">
          <div className="project-left">
          <div className="project-name">CyberShield</div>
          <div className="description">This project aims to bridge the knowledge gap in cyber laws by providing an intuitive platform that educates users on their digital rights and responsibilities. </div>
          <ul className="stack">
           <li className="tech-stack1">Reactjs</li>
           <li className="tech-stack">Firebase</li>
           <li className="tech-stack">Gemini API</li>
           <li className="tech-stack">Netlify</li>
           <li className="tech-stack">Nodejs</li> </ul>
           <div className="site">
          <button className="visit" onClick={() => window.open('https://cybersheild-2.netlify.app/', '_blank')}>
  Visit Site
</button>
</div> </div>
        <figure className="project-card1">
    <img src="./project1.png" alt="Project1" />
        </figure>
      </div>
       <div className="project list">
          <div className="project-left">
          <div className="project-name">AI Video Dubber</div>
          <div className="description">During my internship at The Indian Express, I built an AI-powered web application to automate video dubbing for their regional language platforms, particularly converting Hindi videos to Marathi for their Marathi news site. </div>
          <ul className="stack">
           <li className="tech-stack1">Python</li>
           <li className="tech-stack">Flask</li>
           <li className="tech-stack">Whisper AI</li>
           <li className="tech-stack">Google Translate API</li>
           <li className="tech-stack">FFmpeg</li> </ul>
           <div className="site">
          <button className="visit" onClick={() => window.open('https://ai-video-dubber.onrender.com/', '_blank')}>
  Visit Site
</button>
</div> </div>
        <figure className="project-card1">
    <img src="./project2.png" alt="Project2" />
        </figure>
      </div>
      <div className="project list">
          <div className="project-left">
          <div className="project-name">Food Delivery</div>
          <div className="description">Build Full Stack Food Ordering Website using React JS, MongoDB, Express & Node JS </div>
          <ul className="stack">
           <li className="tech-stack1">Reactjs</li>
           <li className="tech-stack">Mongodb</li>
           <li className="tech-stack">Nodejs</li>
           <li className="tech-stack">Vite</li>
           <li className="tech-stack">Express</li> </ul>
           <div className="site">
          <button className="visit" onClick={() => window.open('https://food-frontend-8634.onrender.com/', '_blank')}>
  Visit Site
</button>
</div> </div>
        <figure className="project-card1">
    <img src="./project3.png" alt="Project3" />
        </figure>
      </div>
      <div className="project list">
          <div className="project-left">
          <div className="project-name">AI Poll Generator</div>
          <div className="description">Built an AI-powered poll generator using JavaScript and Groq (LLaMA 4) to dynamically generate polls
from article content. Developed WordPress REST APIs to manage poll metadata and vote tracking per post. </div>
          <ul className="stack">
           <li className="tech-stack1">PHP</li>
           <li className="tech-stack">MySQL</li>
           <li className="tech-stack">Wordpress</li>
           <li className="tech-stack">JS</li>
           <li className="tech-stack">AMP</li> </ul>
        </div>
        <figure className="project-card1">
  <video width="100%" controls muted loop>
    <source src="./project4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</figure>
      </div>
      </div>
    </div>
  );
};

export default Home;
