import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div id="contact" className="py-16 mt-10">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Information */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-400">
            Feel free to contact me if you think I am perfect for your job or if
            these services match your needs. I will reply to you as soon as
            possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-red-500 text-xl mr-4" />
              <p>susanto.chandra001@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-red-500 text-xl mr-4" />
              <p>(+880)-1923260216</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500 text-xl mr-4" />
              <p>Gazipur, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex space-x-6 mt-6">
            <a
              href="https://facebook.com/susanto-chandra001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className=" hover:text-red-500 text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/susanto.chandra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className=" hover:text-red-500 text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" hover:text-red-500 text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Say Somethings</h2>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Your message has been sent!");
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2  border  rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2  border  rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2  border  rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-2  border  rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-transparent border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
