import React, { useState } from 'react';
import winterDonationImg from '../../assets/winter-cloth-doantion.png'
import marathonImg from '../../assets/marthon.png'
import crowdcubeImg from '../../assets/crowdcube.png'
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Marathon Management System',
      image: `${marathonImg}`, // Replace with actual image path or URL
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'A system to manage marathon events including participant registration, results, and real-time updates.',
      liveLink: 'https://marathon.example.com',
      githubLink: 'https://github.com/user/marathon-management-system',
      details: `This project aimed to digitize the process of managing marathons. During development, challenges included ensuring scalability for large events and handling real-time updates efficiently. Future improvements include enhancing the UI and adding analytics for event organizers.`
    },
    {
      id: 2,
      name: 'Crowdcube - Campaign Donation Platform',
      image:`${crowdcubeImg}`,
      technologies: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
      description: 'Crowdcube is an intuitive and user-friendly platform that enables users to create, explore, and contribute to campaigns. Designed with simplicity and accessibility in mind, the platform ensures that anyone can make a difference by starting or supporting a campaign. With seamless navigation, theme toggling, and personalized user experiences, Crowdcube is your go-to solution for online donations and campaigns.',
      liveLink: 'https://bistroboss.example.com',
      githubLink: 'https://github.com/user/bistro-boss-restaurant',
      details: `Users can create, view, and manage campaigns with detailed information such as titles, types, and donation amounts. Quickly sort campaigns by donation amounts and filter active or inactive campaigns for easy navigation.`
    },
    {
      id: 3,
      name: 'Winter Clothing Donation',
      image: `${winterDonationImg}`,
      technologies: ['React', 'Firebase', 'DaisyUI'],
      description: 'A platform connecting donors and recipients for winter clothing donations across Bangladesh.',
      liveLink: 'https://winterdonation.example.com',
      githubLink: 'https://github.com/user/winter-clothing-donation',
      details: `This project tackled the social issue of distributing winter clothing. Challenges included creating a seamless user experience for non-tech-savvy users. Future plans involve integrating a map feature for donation centers and improving backend performance.`
    }
  ];

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          My <span className="text-red-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-5 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full  object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <button
                onClick={() => handleViewMore(project)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-auto flex">
             <div>
             <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedProject.name}
              </h3>
              <p className="text-gray-700 mb-2 font-semibold">Main Technologies:</p>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-700">{tech}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <p className="text-gray-700 mb-4">{selectedProject.details}</p>
              <div className="flex space-x-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Live Link
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                >
                  GitHub Link
                </a>
              </div>
              <button
                onClick={handleCloseDetails}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
             </div>
              <div className='w-full'>
                <img src={selectedProject.image} alt="" />
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
