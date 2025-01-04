import Marquee from 'react-fast-marquee';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub, FaGit, FaNpm } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiTailwindcss, SiNetlify, SiPostman, SiHeroku } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    {
      name: 'React',
      icon: <FaReact className="text-blue-500 text-6xl" />,
      description:
        'React is a powerful JavaScript library used for building user interfaces. I specialize in reusable components, state management, and SPAs.',
      proficiency: 'Expert',
      progress: '90%',
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-orange-500 text-6xl" />,
      description:
        'HTML5 is the foundation of web content. I ensure semantic correctness, accessibility, and integration of modern APIs.',
      proficiency: 'Expert',
      progress: '95%',
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="text-blue-400 text-6xl" />,
      description:
        'CSS3 allows me to create responsive and visually appealing designs using advanced features like Flexbox, Grid, and animations.',
      proficiency: 'Experienced',
      progress: '85%',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-500 text-6xl" />,
      description:
        'JavaScript powers interactivity. I am proficient in ES6+ features, event handling, and integrating libraries/frameworks.',
      proficiency: 'Experienced',
      progress: '80%',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-green-500 text-6xl" />,
      description:
        'Node.js enables scalable and efficient backend solutions. I use it for building RESTful APIs and handling server-side logic.',
      proficiency: 'Experienced',
      progress: '75%',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="text-green-600 text-6xl" />,
      description:
        'MongoDB is a NoSQL database where I manage large datasets, design schemas, and perform queries for scalable applications.',
      proficiency: 'Familiar',
      progress: '70%',
    },
    {
      name: 'Firebase',
      icon: <SiFirebase className="text-yellow-600 text-6xl" />,
      description:
        'Firebase provides real-time databases and authentication. I use it for secure and rapid app development.',
      proficiency: 'Familiar',
      progress: '65%',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-blue-300 text-6xl" />,
      description:
        'Tailwind CSS accelerates custom styling. I use it for responsive, mobile-first designs with minimal custom CSS.',
      proficiency: 'Experienced',
      progress: '85%',
    },
  ];

  const allTechnologies = [
    { name: 'React', icon: <FaReact className="text-blue-500 text-5xl" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400 text-5xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-600 text-5xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-300 text-5xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-600 dark:text-gray-300 text-5xl" /> },
    { name: 'Git', icon: <FaGit className="text-orange-400 text-5xl" /> },
    { name: 'NPM', icon: <FaNpm className="text-red-500 text-5xl" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-green-500 text-5xl" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400 text-5xl" /> },
    { name: 'Heroku', icon: <SiHeroku className="text-purple-500 text-5xl" /> },
  ];

  return (
    <div id="skills" className="py-20 bg-base-100">
      <div className="w-4/5 mx-auto">
        {/* Heading and Introduction */}
        <div className="text-center mb-20 ">
          <h2 className="text-4xl font-bold text-center mb-5 ">
            My <span className="text-red-600">Skills</span>
          </h2>
          <p className='w-4/5 mx-auto'>
          Over the years, I’ve built expertise in a variety of modern web technologies. Below is a showcase of my key
          skills, their proficiency levels, and how I use them in development.
          </p>
        </div>
        
        {/* Skills Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-base-300 rounded-lg shadow-xl bg-base-100 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
            >
              {skill.icon}
              <p className="mt-4 text-base-content text-xl font-semibold">{skill.name}</p>
              <p className="mt-2 text-base-content/70 text-sm">{skill.description}</p>
              <div className="w-full mt-4">
                <p className="text-base-content/90 text-sm mb-1">
                  Proficiency: <span className="font-bold text-blue-600">{skill.proficiency}</span>
                </p>
                <div className="relative w-full h-3 bg-base-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
                    style={{ width: skill.progress }}
                  ></div>
                </div>
                <p className="text-base-content/60 text-xs mt-1">{skill.progress}</p>
              </div>
            </div>
          ))}
        </div>

        {/* All Technologies Marquee */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-base-content text-center mb-6">
            Technologies & Tools I've Used
          </h3>
          <Marquee gradient={false} speed={50} className="flex space-x-8 py-5">
            {allTechnologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-center ml-5">
                <div className="p-4 rounded-full bg-base-200 shadow-lg">
                  {tech.icon}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
