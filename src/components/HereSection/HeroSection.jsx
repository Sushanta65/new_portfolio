import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import myPhoto from "../../assets/susanto.png";
import resume from "../../assets/resume/Resume of Frontend Developer - Susanto Chandra Das.pdf"

const HeroSection = () => {
  return (
    <div className="bg-base-200 text-base-content">
      <div className="w-4/5 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          {/* Right Side - Photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full lg:w-[80%]">
              <img
                src={myPhoto}
                alt="Susanto CD"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Left Side - Designation, Animation, and Button */}
          <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-red-600">Susanto CD</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Expert",
                  2000,
                  "JavaScript Developer",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h2>
            <p className="pt-4 pb-8">
              Always ready to face any kind of situation with coding and manage
              the works. Aiming to leverage my skills to successfully fill the
              Front End Web development role at your company.
            </p>
            <div className="flex justify-center lg:justify-start gap-6 text-2xl pb-10">
              <a
                href="https://www.linkedin.com/in/susanto-chandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Sushanta65"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 dark:bg-red-600 dark:hover:text-gray-100"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaFacebook />
              </a>
            </div>
            <a
              href={resume}
              download
              className="btn btn-primary bg-red-600 hover:bg-red-700 border-none text-white mb-6"
            >
              Download CV
            </a>

            {/* Social Media Links */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
