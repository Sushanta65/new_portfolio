import React from 'react';

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
    <div className="py-16 bg-gray-50">
      <div className="w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          My <span className="text-blue-600">Education</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-lg bg-white transition-shadow ${
                item.highlight
                  ? 'border-blue-500 bg-blue-50 hover:shadow-blue-300'
                  : 'border-gray-300 hover:shadow-2xl'
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  item.highlight ? 'text-blue-700' : 'text-gray-800'
                }`}
              >
                {item.degree}
              </h3>
              <p
                className={`font-medium ${
                  item.highlight ? 'text-blue-600' : 'text-blue-500'
                }`}
              >
                {item.institution}
              </p>
              <p className={`text-gray-600 text-sm ${item.duration === '2022 - Present'? 'text-green-700' : ''}`}>{item.duration}</p>
              <p
                className={`mt-2 text-sm ${
                  item.highlight ? 'text-blue-800' : 'text-gray-700'
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
