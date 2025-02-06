import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900  py-6">
      <div className="w-4/5 mx-auto text-center text-white">
      
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Susanto Chandra Das. All rights
          reserved.
        </p>
        <p className="text-sm">
          Made with <span className="text-blue-900">❤</span> using React and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
