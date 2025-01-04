
const EducationSection = () => {
  const educationData = [
    {
      degree: 'Complete Web Development Course',
      institution: 'Programming Hero',
      duration: '2021 - 2022',
      description:
        'Completed a professional web development course focusing on the MERN stack. Acquired skills in front-end and back-end development, including React, Node.js, MongoDB, and Express.js.',
      highlight: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Humanities Group',
      duration: '2019 - 2021',
      description:
        'Completed my HSC with a GPA of 4.25. Gained foundational knowledge in humanities, focusing on literature, social studies, and philosophy.',
      highlight: false,
    },
    {
      degree: 'Bachelor of Social Science (Honors) in Sociology',
      institution: 'National University',
      duration: '2022 - Present',
      description:
        'Currently pursuing a Bachelor’s degree in Sociology. Learning about social structures, human interactions, and societal development.',
      highlight: false,
    },
  ];

  return (
    <div className="py-16 border-t">
      <div className="w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-lg transition-shadow ${
                item.highlight
                  ? 'border-blue-500 bg-blue-50 hover:shadow-blue-300 dark:border-blue-400 dark:bg-blue-900 dark:hover:shadow-blue-600'
                  : 'border-gray-300 bg-white hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-lg'
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  item.highlight ? 'text-blue-700 dark:text-blue-300' : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {item.degree}
              </h3>
              <p
                className={`font-medium ${
                  item.highlight ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500 dark:text-blue-300'
                }`}
              >
                {item.institution}
              </p>
              <p
                className={`text-sm ${
                  item.duration === '2022 - Present'
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.duration}
              </p>
              <p
                className={`mt-2 text-sm ${
                  item.highlight ? 'text-blue-800 dark:text-blue-200' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
