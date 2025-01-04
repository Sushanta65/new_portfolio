import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="bg-base-100 text-base-content py-20">
      <div className="w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          About <span className="text-red-600">Me</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
          Here’s a little insight into who I am, my journey, and my passions.
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <p>
            Hello! My name is{" "}
            <span className="font-bold text-red-600">Susanto Chandra Das</span>,
            and I’m a dedicated frontend developer with over 6 years of
            experience in web development. Despite coming from a humanities
            background, I’ve built a strong foundation in modern technologies
            like React.js, JavaScript, and Tailwind CSS.
          </p>
          <p>
            My journey into programming wasn’t a straight path. I’ve been
            working a 12-hour sales job, but my passion for coding kept me
            going. Every free moment was dedicated to learning and building
            projects, from dynamic websites to complete e-commerce platforms.
          </p>
          <p>
            I enjoy solving real-world problems through code. Projects like
            creating a Marathon Management System, a Winter Clothing Donation
            platform, and an intuitive job portal have taught me how to think
            creatively and work efficiently.
          </p>
          <p>
            Beyond coding, I’m constantly working to improve myself. I’m
            currently focusing on enhancing my design skills, improving my
            spoken English, and learning more about business strategies. These
            efforts make me a more well-rounded professional and team member.
          </p>
          <p>
            Fun fact: When I’m not coding, I love brainstorming innovative
            solutions to everyday challenges. It’s this curiosity and drive that
            keep me motivated to learn and grow.
          </p>
          <p className="font-semibold text-red-600">
            I’m always eager to take on new challenges, collaborate with
            inspiring people, and make an impact through my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
