import nestScreenshot from '../assets/img/nest_screenshot.png'
import happyHowlHomepageScreenshot from '../assets/img/happy_howl_homepage_screenshot.png'
import auraScreenshot from '../assets/img/aura_screenshot.jpg'
import movieViewerScreenshot from '../assets/img/movie_viewer_screenshot.jpg'
import pokemonTeamBuilderScreenshot from '../assets/img/pokemon_team_builder_screenshot.jpg'
import connectFourScreenshot from '../assets/img/connect_four_screenshot.jpg'
import momentumCloneScreenshot from '../assets/img/momentum_clone_screenshot.jpg'
import vickysFlowerShopScreenshot from '../assets/img/vickys_flower_shop_screenshot.png'

const projectData = {
  nest: {
    title: 'Nest',
    type: 'Digital Asset Management (DAM) Platform',
    description:
      'Internal tool for storage and distribution of intellectual property',
    action: 'Manage Assets',
    url: 'https://nest.wb.com/',
    img: {
      src: nestScreenshot
    }
  },
  happyHowl: {
    title: 'Happy Howl',
    type: 'Shopify Store',
    description: 'Human-grade dog food for picky eaters',
    action: 'Shop Now',
    url: 'https://thehappyhowl.com',
    img: {
      src: happyHowlHomepageScreenshot
    }
  },
  aura: {
    title: 'Aura',
    type: 'Full-Stack Web Application',
    description: 'Business finder that matches your personality.',
    action: 'View Docs',
    url: 'https://github.com/project-aura/client',
    img: {
      src: auraScreenshot
    }
  },
  movieViewer: {
    title: 'Movie Viewer',
    type: 'Front-End Web Application',
    description: 'Take-home exam to display movie content from an API.',
    action: 'Find a Movie',
    url: 'https://movie-viewer.netlify.com',
    img: {
      src: movieViewerScreenshot
    }
  },
  pokemonTeamBuilder: {
    title: 'Pokémon Team Builder',
    type: 'Front-End Web Application',
    description: 'Team builder application with real-time team changes',
    action: 'Make a Team',
    url: 'https://poke-team-builder.herokuapp.com/',
    img: {
      src: pokemonTeamBuilderScreenshot
    }
  },
  simonSays: {
    title: "Vicky's Flower Shop",
    type: 'Front-End Web Application',
    description:
      '3 Day Coding challenge simulating an e-commerce product selection + cart',
    action: 'View Challenge Result',
    url: 'https://sr-vickys-flowers.netlify.app/',
    img: {
      src: vickysFlowerShopScreenshot
    }
  },
  connectFour: {
    title: 'Connect Four',
    type: 'Front-End Web Application',
    description:
      'HTML, CSS, and Javascript implementation of classic Connect Four.',
    action: 'Play now',
    url: 'https://custom-connect-four.netlify.com/',
    img: {
      src: connectFourScreenshot
    }
  },
  momentumClone: {
    title: 'Momentum Clone',
    type: 'Google Chrome Extension',
    description:
      'Simple replacement for a standard Google homepage to offer a personalized experience.',
    action: 'View Docs',
    url: 'https://github.com/ScotteRoberts/Momentum-Clone',
    img: {
      src: momentumCloneScreenshot
    }
  }
}

export default projectData
