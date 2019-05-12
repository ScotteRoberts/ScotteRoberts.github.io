import auraSceenshot from '../assets/img/aura_screenshot.jpg';
import movieViewerScreenshot from '../assets/img/movie_viewer_screenshot.jpg';
import connectFourScreenshot from '../assets/img/connect_four_screenshot.jpg';
import momentumCloneScreenshot from '../assets/img/momentum_clone_screenshot.jpg';
import ecsScreenshot from '../assets/img/ecs_screenshot.jpg';

const projectData = [
  {
    title: 'Aura',
    type: 'Full-Stack Web Application',
    description: 'Business finder that matches your personality.',
    url: 'https://aura.community',
    img: {
      src: auraSceenshot,
    },
  },
  {
    title: 'Movie Viewer',
    type: 'Front-End Web Application',
    description: 'Take-home exam to display movie content from an API.',
    url: 'https://movie-viewer.netlify.com',
    img: {
      src: movieViewerScreenshot,
    },
  },
  {
    title: 'Connect Four',
    type: 'Front-End Web Application',
    description: 'HTML, CSS, and Javascript implementation of classic Connect Four.',
    url: 'https://custom-connect-four.netlify.com/',
    img: {
      src: connectFourScreenshot,
    },
  },
  {
    title: 'Momentum Clone',
    type: 'Google Chrome Extension',
    description: 'Simple overlay over Google Homepage to offer a personalized experience.',
    url: 'https://github.com/ScotteRoberts/Momentum-Clone',
    img: {
      src: momentumCloneScreenshot,
    },
  },
  {
    title: 'Extra Curricular Schooling',
    type: 'Full-Stack Web Application',
    description: 'Article aggregator with reading gamefication.',
    url: 'https://github.com/extra-curricular-schooling/ecs-development',
    img: {
      src: ecsScreenshot,
    },
  },
];

export default projectData;
