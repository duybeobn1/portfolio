function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Smart Fridge (March 2021)",
      description:
        "A smart refrigerator prototype that extends food freshness by monitoring its environment. It integrates humidity, air quality, and temperature sensors for real-time data collection. Implemented with Arduino and modular Java/C++ code for easy customization and scalability.",
      technologies: ["Arduino", "C++", "Sensors", "Embedded Systems", "IoT"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/Frigo",
      live: "#",
    },
    {
      id: 5,
      title: "Hybrid Adventure (June 2021) ",
      description:
        "A genetics simulation program that uses Mendelian inheritance to plan flower or animal breeding. Choose a target color outcome and trace back the breeding process from an initial color set. Built in Java with a focus on clear genetic visualization.",
      technologies: ["Java", "Simulation", "Genetics", "Algorithm Design"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/BreedingFlower",
      live: "#",
    },
    {
      id: 6,
      title: "Film Searching Tool (September 2021)",
      description:
        "A minimalist web application to browse and search for movies using the TMDB API. Users can explore Top Rated, Upcoming, and Popular films, search by title, and view posters with essential info. Built for speed and clarity using modern front-end tools.",
      technologies: [
        "React.js",
        "Axios",
        "TMDB API",
        "Movie Search",
        "Front-end",
      ],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/film-searching",
      live: "https://film-searching-tool.vercel.app/",
    },
    {
      id: 7,
      title: "Mini Blog App (January 2022 - Deprecated)",
      description:
        "An early blogging app built using React 16 and Draft.js, demonstrating my foundational understanding of SPA routing, editor state management, and custom render pipelines. Users could write, format, and view blog entries dynamically within a single-page interface.",
      technologies: [
        "React.js",
        "Draft.js",
        "Blog Editor",
        "Routing",
        "State Management",
      ],
      github: "https://github.com/duybeobn1/blog-app",
      live: "#",
    },
    {
      id: 8,
      title: "Chicken Invaders Clone (March 2022)",
      description:
        "A classic 2D space shooter game inspired by Chicken Invaders. Built from scratch in Java using the Java Swing library, the game features waves of enemies, projectile mechanics, collision detection, and score tracking. Designed for educational purposes and to reinforce object-oriented programming concepts.",
      technologies: [
        "C/C++",
        "SDL/SDL2"
      ],
      github: "https://github.com/duybeobn1/Chicken-Invaders",
      live: "#",
    },
    {
      id: 9,
      title: "Chat App (August 2022 - Deprecated)",
      description:
        "A basic real-time chat application built with React, Node.js, Socket.IO, and Express to explore WebSocket communication. It supported multiple rooms and real-time message exchange. This project was an early experiment to understand client-server architecture and bidirectional communication.",
      technologies: [
        "React.js",
        "Node.js",
        "Socket.IO",
        "Express",
        "Real-time Chat",
      ],
      github: "https://github.com/duybeobn1/chat-app",
      live: "#",
    },
    {
      id: 10,
      title: "Gymnate (March 2023)",
      description:
        "A responsive and modern fitness web app that helps users discover workout programs and gyms. Designed with a focus on clean UI/UX and mobile accessibility, it offers category-based filtering, animated transitions, and an engaging landing page to promote healthy lifestyles.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "RapidAPI",
        "Framer Motion",
      ],
      github: "https://github.com/duybeobn1/gymnate",
      live: "https://gymnate.vercel.app/",
    },
    {
      id: 11,
      title: "CryptoX - Crypto Tracker (May 2023)",
      description:
        "A modern and responsive web application that tracks real-time cryptocurrency prices and market statistics. Users can view detailed charts, search for specific coins, and access key metrics such as price, market cap, and 24h changes. Designed to be fast, mobile-friendly, and visually appealing.",
      technologies: [
        "React.js",
        "CoinGecko API",
        "Chart.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/duybeobn1/cryptoX",
      live: "https://crypto-x-five.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-indigo-100 flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">
                  Project Image
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full border border-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-2">
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
