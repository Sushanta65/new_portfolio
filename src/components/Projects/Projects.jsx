import React, { useState } from "react";
import winterDonationImg from "../../assets/winter-cloth-doantion.png";
import marathonImg from "../../assets/marthon.png";
import crowdcubeImg from "../../assets/crowdcube.png";
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Marathon Management System",
      image: `${marathonImg}`, // Replace with actual image path or URL
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "A system to manage marathon events including participant registration, results, and real-time updates.",
      liveLink: "https://marathon-management.web.app/",
      githubLink:
        "https://github.com/programming-hero-web-course2/b10a11-client-side-Sushanta65",
      details: `This project aimed to digitize the process of managing marathons. During development, challenges included ensuring scalability for large events and handling real-time updates efficiently. Future improvements include enhancing the UI and adding analytics for event organizers.`,
    },
    {
      id: 2,
      name: "Campaign Donation Platform",
      image: `${crowdcubeImg}`,
      technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      description:
        "Crowdcube is an intuitive and user-friendly platform that enables users to create, explore, and contribute to campaigns. Designed with simplicity and accessibility in mind, the platform ensures that anyone can make a difference by starting or supporting a campaign. With seamless navigation, theme toggling, and personalized user experiences, Crowdcube is your go-to solution for online donations and campaigns.",
      liveLink: "https://crowdcube-bfdbf.web.app/",
      githubLink:
        "https://github.com/programming-hero-web-course2/b10-a10-client-side-Sushanta65",
      details: `Users can create, view, and manage campaigns with detailed information such as titles, types, and donation amounts. Quickly sort campaigns by donation amounts and filter active or inactive campaigns for easy navigation.`,
    },
    {
      id: 3,
      name: "Winter Clothing Donation",
      image: `${winterDonationImg}`,
      technologies: ["React", "Firebase", "DaisyUI"],
      description:
        "A platform connecting donors and recipients for winter clothing donations across Bangladesh.",
      liveLink: "https://winter-cloth-donation-app.web.app/",
      githubLink:
        "https://github.com/programming-hero-web-course1/b10-a9-authentication-Sushanta65",
      details: `This project tackled the social issue of distributing winter clothing. Challenges included creating a seamless user experience for non-tech-savvy users. Future plans involve integrating a map feature for donation centers and improving backend performance.`,
    },
  ];

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className=" pt-20">
      <div className="w-4/5 mx-auto">
        <div className="text-center mb-20 ">
          <h2 className="text-4xl font-bold text-center mb-5 ">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p>
            I have done a lot of projects with ReactJS There are some project
            shows as my portfolio. You can check it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-5 border border-gray-300 rounded-lg shadow-lg  hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full  object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2">{project.name}</h3>
              <button
                onClick={() => handleViewMore(project)}
                className="btn btn-sm bg-red-600 text-white rounded hover:bg-red-700 duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-auto flex gap-5">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-400">
                  {selectedProject.name}
                </h3>
                <p className=" mb-2 font-semibold text-gray-300">
                  Main Technologies:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-400">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <p className="text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                <p className="text-gray-400 mb-4">{selectedProject.details}</p>
                <div className="flex space-x-4 mt-10">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Live Link
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-gray-800 text-white rounded hover:bg-gray-900"
                  >
                    GitHub Link
                  </a>
                </div>
                <button
                  onClick={handleCloseDetails}
                  className="btn btn-sm bg-red-600 text-white rounded hover:bg-red-700 mt-5"
                >
                  Close
                </button>
              </div>
              <div className="w-full">
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
