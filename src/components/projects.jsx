import Forky from '../assets/images/forky.jpg';
import Crown from '../assets/images/crown.jpg';
import Omnifood from '../assets/images/omnifood.jpg';
import DemoCard from './project-card/DemoCard';

const projects = [
  {
    name: 'Crown Clothing',
    description: 'E-comerce website. A clothing company',
    image: Crown,
    url: 'https://crwn-dresan.herokuapp.com/',
    position: ['top-84', 'left-1/4'],
  },
  {
    name: 'Forkify',
    description: 'Recipe application and custom recipe uploads',
    image: Forky,
    url: 'https://forkify-andres.netlify.app/',
    position: ['top-3', 'left-3'],
  },

  {
    name: 'Omnifood',
    description: 'Landing page for a restaurant',
    image: Omnifood,
    url: 'https://andres-omnifood.netlify.app/',
    position: ['bottom-3', 'right-3'],
  },
];

const Projects = () => {
  return (
    <div className="p-3 lg:flex  lg:items-center lg:gap-7 h-full">
      {projects.map((project, index) => (
        <div key={index}>
          <DemoCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
