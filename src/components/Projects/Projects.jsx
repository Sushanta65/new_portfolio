import React, { useState } from "react";
import winterDonationImg from "../../assets/winter-cloth-doantion.png";
import marathonImg from "../../assets/marthon.png";
import crowdcubeImg from "../../assets/crowdcube.png";
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Spark Academy",
      image: "https://i.ibb.co.com/yB5z95q5/spark-academy-image.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
      description:
        "A comprehensive learning platform connecting students and teachers with seamless class management.",
      liveLink: "https://spark-academy-c25ed.web.app/",
      githubLink:
        "https://github.com/Sushanta65/Spark-Academy",
      details: `Spark Academy is designed to revolutionize online education by providing a structured platform for skill development. It includes features such as class enrollment, real-time progress tracking, teacher dashboards, and interactive assignments. Challenges faced during development included implementing secure authentication, managing large amounts of educational data, and optimizing performance. Future plans include AI-powered learning recommendations and an integrated job portal for students.`,
    },
    {
      id: 2,
      name: "Marathon Managing System",
      image: `${marathonImg}`,
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "A system to manage marathon events including participant registration, results, and real-time updates.",
      liveLink: "https://marathon-management.web.app/",
      githubLink:
        "https://github.com/Sushanta65/marathon-management-system",
      details: `This project aimed to digitize the process of managing marathons. During development, challenges included ensuring scalability for large events and handling real-time updates efficiently. Future improvements include enhancing the UI and adding analytics for event organizers.`,
    },
    {
      id: 3,
      name: "Campaign Donation Platform",
      image: `${crowdcubeImg}`,
      technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      description:
        "Crowdcube is an intuitive and user-friendly platform that enables users to create, explore, and contribute to campaigns. Designed with simplicity and accessibility in mind, the platform ensures that anyone can make a difference by starting or supporting a campaign. With seamless navigation, theme toggling, and personalized user experiences, Crowdcube is your go-to solution for online donations and campaigns.",
      liveLink: "https://crowdcube-bfdbf.web.app/",
      githubLink:
        "https://github.com/Sushanta65/Crowdcube-campaigns",
      details: `Users can create, view, and manage campaigns with detailed information such as titles, types, and donation amounts. Quickly sort campaigns by donation amounts and filter active or inactive campaigns for easy navigation.`,
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
            My <span className="text-blue-900">Projects</span>
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
                className="btn btn-sm bg-blue-600 text-white rounded hover:bg-blue-700 duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-auto flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-400 text-center md:text-left">
                {selectedProject.name}
              </h3>
              <p className="mb-2 font-semibold text-gray-300">Main Technologies:</p>
              <ul className="list-disc list-inside mb-4 text-gray-400 text-sm md:text-base">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm md:text-base mb-4">{selectedProject.description}</p>
              <p className="text-gray-400 text-sm md:text-base mb-4">{selectedProject.details}</p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mt-6">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-green-600 text-white rounded hover:bg-green-700 text-center"
                >
                  Live Link
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-gray-800 text-white rounded hover:bg-gray-900 text-center"
                >
                  GitHub Link
                </a>
              </div>
              <button
                onClick={handleCloseDetails}
                className="btn btn-sm bg-blue-900 text-white rounded hover:bg-blue-950 mt-5 w-full md:w-auto"
              >
                Close
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={selectedProject.image} alt="Project" className="max-w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
        
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
