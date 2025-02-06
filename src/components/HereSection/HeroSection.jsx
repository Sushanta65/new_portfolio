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
              Hi, I'm <span className="text-blue-900">Susanto CD</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 mt-3">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React, Next.js Expert",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Tailwind-Css Expert",
                  2000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h2>
            <p className="pt-4 pb-8">
            I’m a passionate Frontend Developer specializing in React.js, Next.js, and the MERN stack. With a strong focus on building scalable and user-friendly web apps, I love crafting seamless digital experiences and solving complex problems through code.
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
                className="text-gray-800 hover:text-gray-900 dark:bg-blue-900 dark:hover:text-gray-100"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-900"
              >
                <FaFacebook />
              </a>
            </div>
            <a
              href={resume}
              download
              className="btn btn-primary bg-blue-900 hover:bg-blue-700 border-none text-white mb-6"
            >
              Download Resume
            </a>

            {/* Social Media Links */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
