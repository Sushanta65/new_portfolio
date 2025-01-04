
const Contact= () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Your message has been sent!');
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Send an Email
            </h3>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-300 mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-300 mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 dark:text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">example@gmail.com</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Phone</h4>
              <p className="text-gray-600 dark:text-gray-300">+880 1234 567890</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">WhatsApp</h4>
              <p className="text-gray-600 dark:text-gray-300">+880 1234 567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
