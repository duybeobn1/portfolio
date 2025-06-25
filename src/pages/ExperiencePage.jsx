function ExperiencePage() {
  const experiences = [
    {
      id: 0,
      company: "Société à responsabilité limitée Manh Thai",
      position: "Intern (Stage Ouvrier)",
      duration: "June 2020 – July 2020",
      description:
        "Assembled computers and prepared shipments during a first-year engineering internship. Developed hands-on skills in hardware assembly and logistics at Manh Thai (Vietnam).",
      technologies: ["Computer Hardware", "Logistics", "Hands-On Engineering"],
    },
    {
      id: 1,
      company: "Airmium",
      position: "Software Development Intern",
      duration: "Apr 2024 – Jul 2024",
      description:
        "Developed a secure data management system for air measurement and treatment tools. Designed a PostgreSQL database, built a Spring Boot backend, and created a responsive web interface for data access, automation, and historization — replacing manual Excel processes.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Tailwind CSS",
        "CI/CD",
      ],
    },
    {
      id: 2,
      company: "Université Lyon 1 – Academic Projects",
      position: "Project Lead & Developer",
      duration: "2023 – Present",
      description:
        "Led and contributed to academic projects including a Vision Transformer image restoration model, a CO₂ emission simulation web app (React/Spring Boot), distributed systems simulations (JBotSim), and multi-agent game theory simulations.",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"],
    },
  ];

  const education = [
    {
      id: 1,
      institution: "Université Claude Bernard Lyon 1",
      degree: "Master Informatique — Spécialisation IA et Data Science",
      duration: "2023 – 2026 (M2)",
      description:
        "Key courses: Supervised Learning, Image Analysis, Game Theory, Multi-Agent Systems, AI Techniques. Developed hands-on skills in machine learning, computer vision, distributed systems, and data-driven web apps.",
    },
    {
      id: 2,
      institution: "INSA Lyon",
      degree: "Engineering Preparation and Materials Science (BSc level)",
      duration: "2019 – 2022",
      description:
        "Two-year preparatory cycle focused on Mathematics, Physics, and Computer Science fundamentals. Third-year specialized in Materials Science — studied engineering materials, properties, processes, and simulation tools. Awarded the Saint-Gobain merit scholarship for academic excellence and research contributions during the 3rd year.",
    },
    {
      id: 3,
      institution: "Lycée d’excellence en sciences naturelles (Hanoi, Vietnam)",
      degree: "High School Diploma — Science Track",
      duration: "2016 – 2019",
      description:
        "Graduated with a strong focus on advanced Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional and academic background in software engineering, AI,
            and web development.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Work & Project Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 top-16 w-0.5 h-16 bg-gray-300"></div>
                )}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Education
          </h2>
          <div className="space-y-8 relative">
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gray-300"></div>

            {education.map((edu) => (
              <div key={edu.id} className="flex items-start space-x-4 relative">
                {/* Timeline dot */}
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-blue-600 font-medium">
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-700 mb-3">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autres expériences */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Autres expériences
            </h2>
            <div className="space-y-8 relative">
              {/* Timeline vertical line */}
              <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gray-300"></div>
              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Internship and formation in gastronomie
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Le Cordon Bleu, Hong Kong University, Institut Paul Bocuse.
                  </p>
                </div>
              </div>
              {/* Consultant culinaire */}
              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Consultant culinaire
                  </h3>
                  <span className="text-sm text-blue-600 font-medium">
                    2023 – Now
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Menu consultant for restaurant A Bản Mountain Dew (Guide
                    Michelin) et Dana Vegan House in Vietnam.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Commis de cuisine at Bentomania
                  </h3>
                  <span className="text-sm text-blue-600 font-medium">
                    2021 – 2022
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    “Meal preparation and inventory management.”
                  </p>
                </div>
              </div>
              {/* Commis de cuisine */}
              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Commis de cuisine at Chez Banoi
                  </h3>
                  <span className="text-sm text-blue-600 font-medium">
                    2024 – 2025
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    “Meal preparation and inventory management.”
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Le Grand Refectoire
                  </h3>
                  <span className="text-sm text-blue-600 font-medium">
                    2025
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    “Chef de partie (entree and tapas)”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExperiencePage;
