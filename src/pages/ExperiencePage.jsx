function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      duration: "2023 - Present",
      description: "Developing responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UI components and improved application performance by 40%.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer Intern",
      duration: "2022 - 2023",
      description: "Built and maintained web applications using modern JavaScript frameworks. Worked on both frontend and backend development, contributing to a 25% increase in user engagement.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      company: "University Projects",
      position: "Student Developer",
      duration: "2021 - 2022",
      description: "Developed various academic projects including web applications, mobile apps, and data analysis tools. Gained experience in multiple programming languages and frameworks.",
      technologies: ["Python", "Java", "React", "Flask"]
    }
  ];

  const education = [
    {
      id: 1,
      institution: "University of Technology",
      degree: "Bachelor of Computer Science",
      duration: "2020 - 2024",
      description: "Focused on software engineering, web development, and data structures. Graduated with honors."
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background in software development.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 top-16 w-0.5 h-16 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Timeline dot */}
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                      <span className="text-sm text-blue-600 font-medium">{exp.duration}</span>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-3">{exp.company}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-blue-600 font-medium">{edu.duration}</span>
                </div>
                <h4 className="text-lg text-gray-700 mb-3">{edu.institution}</h4>
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
