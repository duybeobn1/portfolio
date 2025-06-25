function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-indigo-100">
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">Project Image</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full border border-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-2 px-4 rounded-md hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 px-4 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
