import auraScreenshot from "../assets/img/aura_screenshot.jpg";
import movieViewerScreenshot from "../assets/img/movie_viewer_screenshot.jpg";
import pokemonTeamBuilderScreenshot from "../assets/img/pokemon_team_builder_screenshot.jpg";
import simonSaysScreenshot from "../assets/img/simon-says_screenshot.png";
import connectFourScreenshot from "../assets/img/connect_four_screenshot.jpg";
import momentumCloneScreenshot from "../assets/img/momentum_clone_screenshot.jpg";
import ecsScreenshot from "../assets/img/ecs_screenshot.jpg";

const projectData = {
  aura: {
    title: "Aura",
    type: "Full-Stack Web Application",
    description: "Business finder that matches your personality.",
    action: "Find a Business",
    url: "https://aura.community",
    img: {
      src: auraScreenshot,
    },
  },
  movieViewer: {
    title: "Movie Viewer",
    type: "Front-End Web Application",
    description: "Take-home exam to display movie content from an API.",
    action: "Find a Movie",
    url: "https://movie-viewer.netlify.com",
    img: {
      src: movieViewerScreenshot,
    },
  },
  pokemonTeamBuilder: {
    title: "Pokémon Team Builder",
    type: "Front-End Web Application",
    description: "Team builder application with real-time team changes",
    action: "Make a Team",
    url: "https://poke-team-builder.herokuapp.com/",
    img: {
      src: pokemonTeamBuilderScreenshot,
    },
  },
  simonSays: {
    title: "Simon Says",
    type: "Front-End Web Application",
    description:
      "HTML, CSS, and Javascript implementation of classic Simon Says.",
    action: "Play now",
    url: "https://tp-simon-says.netlify.com/",
    img: {
      src: simonSaysScreenshot,
    },
  },
  connectFour: {
    title: "Connect Four",
    type: "Front-End Web Application",
    description:
      "HTML, CSS, and Javascript implementation of classic Connect Four.",
    action: "Play now",
    url: "https://custom-connect-four.netlify.com/",
    img: {
      src: connectFourScreenshot,
    },
  },
  momentumClone: {
    title: "Momentum Clone",
    type: "Google Chrome Extension",
    description:
      "Simple replacement for a standard Google homepage to offer a personalized experience.",
    action: "View Docs",
    url: "https://github.com/ScotteRoberts/Momentum-Clone",
    img: {
      src: momentumCloneScreenshot,
    },
  },
  extraCurricularSchooling: {
    title: "Extra Curricular Schooling",
    type: "Full-Stack Web Application",
    description: "Article aggregator with reading gamefication.",
    action: "View Docs",
    url: "https://github.com/extra-curricular-schooling/ecs-development",
    img: {
      src: ecsScreenshot,
    },
  },
};

export default projectData;
