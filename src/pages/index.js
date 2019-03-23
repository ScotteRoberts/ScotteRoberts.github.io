import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Home | Portfolio</title>
        </Helmet>
        <NavBar />
        <section id="splash">
          <h1>Scott Roberts</h1>
          <p>"Gee, Brain, what do you want to do tonight?"</p>
          <p>"The same thing we do every night, Pinky - try to take over the world!"</p>
        </section>

        <article id="overview">
          <h2>Overview</h2>

          <h3>
            <i className="fas fa-code-branch" />
            <span className="tab">Work</span>
          </h3>
          <span className="summary">
            <em>[tl;dr]</em>
            <p className="tab">
              I am a practicing <strong>full-stack web developer</strong> with a technical
              background and experience in managerial positions.
            </p>
          </span>
          <p>
            My background supports my ability to contribute. Currently, I am completing a Software
            Engineering training course, offered by <strong>Talent Path</strong> (division of
            Genuent). Each trainee must apply proven leadership qualities, demonstrate their ability
            to collaborate, and finish required tasks with excellence. In addition to my technical
            training, I worked seven full-time summers for the{' '}
            <strong>California Junior Lifeguard Programs (CAJG)</strong>, dedication to the program,
            as a Lifeguard Instructor and for two of those summers as the Managing Director. Skills
            I will apply in your company are:
          </p>
          <ul>
            <li>Team communication</li>
            <li>Time management</li>
            <li>Public speaking</li>
            <li>Quick learning</li>
          </ul>
          <h3>
            <i className="far fa-smile-beam" />
            <span className="tab">Personal</span>
          </h3>
          <span className="summary">
            <em>[tl;dr]</em>
            <p className="tab">I love to surf, play video / board games, and bang on the drums.</p>
          </span>
          <p>
            I am an avid gamer, beach goer, and internet consumer. Gaming is a core focus and has
            been for as long as I remember. The games are not just video-based. I love all games and
            treat life as the ultimate game.
          </p>
          <p>
            Like many of my friends, family, and colleages, the internet has molded my knowledge of
            the world (it is difficult to imagine a world now without it). My goal is to contribute
            my knowledge to make a happy, healthy internet environment for all to learn from and
            embrace.
          </p>
          <p>
            My personal hobby is tapping (drums, bongos, cajons, cowbells) and if I can get my hands
            on it, it's going to make some noise.
          </p>
          <h3>
            <i className="fas fa-heartbeat" />
            <span className="tab">Health</span>
          </h3>
          <span className="summary">
            <em>[tl;dr]</em>
            <p className="tab">
              A good night's rest, proper hydration, a balanced diet, and stretching will lead to a
              happier life.
            </p>
          </span>
          <p>
            Health is an important factor of everyone’s life and should be highlighted. According to
            WellSteps, a blog dedicated providing education on employee wellness solutions, a
            healthy employee has:
          </p>
          <ul>
            <li>improved behavior</li>
            <li>improved productivity</li>
            <li>less cost in medical coverage</li>
          </ul>
          <p>
            I take personal pride in living a healthy, active lifestyle and practice healthy habbits
            during work and personal hours.
          </p>
        </article>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/project-aura">
                <img src="img\aura_screenshot.png" alt="Aura Screenshot" />
                <h3>Project Aura | Web Application</h3>
                <h4>Business finder that matches your personality.</h4>
              </a>
            </li>
            <li>
              <a href="https://github.com/ScotteRoberts/Momentum-Clone">
                <img
                  id="momentum-image"
                  src="img\momentum_clone_screenshot.png"
                  alt="Momentum Clone Screenshot"
                />

                <h3>Momentum Clone | Google Chrome Extension</h3>
                <h4>Simple overlay over Google Homepage to offer a personalized experience.</h4>
              </a>
            </li>
            <li>
              <a href="https://github.com/extra-curricular-schooling/ecs-development">
                <img src="img\ecs_screenshot.png" alt="ECS Screenshot" />

                <h3>Extracurricular Schooling | Web Application</h3>
                <h4>Article aggregator with reading gamefication.</h4>
              </a>
            </li>
            <li>
              <a href="https://github.com/ScotteRoberts/connect-four">
                <img
                  id="connect-four"
                  src="img/connect_four_screenshot.PNG"
                  alt="Connect Four Screenshot"
                />

                <h3>Connect Four | Web Application</h3>
                <h4>HTML, CSS, and Javascript implementation of classic Connect Four.</h4>
              </a>
            </li>
          </ul>
        </section>
        <section id="contact">
          <img src="./img/scott_roberts_professional.jpg" alt="A handsome man" />
          <div>
            <h2>Contact Information</h2>
            <div>
              <a
                className="icon"
                href="tel:1-714-833-7051"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-mobile-alt" />
              </a>
              <a
                className="icon"
                href="mailto:sroberts@talentpath.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-envelope" />
              </a>
              <a
                className="icon"
                href="https://www.linkedin.com/in/scott-e-roberts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="icon"
                href="https://github.com/ScotteRoberts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </section>
        <footer>
          <nav>
            <span>Copyright 2019 - Scott Roberts</span>
          </nav>
        </footer>
      </main>
    );
  }
}

export default Home;
