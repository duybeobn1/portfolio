function AboutPage() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, skills, and what drives me as a
            developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Hi, I'm Anh Vu
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a Master’s (M2) student in Computer Science at Université Lyon
              1, specializing in AI and Data Science. I’m a passionate
              full-stack developer driven by crafting smart, user-centered
              digital solutions. My background blends web technologies with
              AI-driven projects, allowing me to tackle complex problems and
              design functional, beautiful experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I’m not coding, I’m often exploring new technologies,
              contributing to open-source initiatives, or enjoying a good coffee
              while reading up on the latest advancements in tech.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-8 shadow-lg border border-indigo-100">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Skills
            </h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Frontend
                </span>
                <p className="text-gray-600">
                  React, Angular, JavaScript, TypeScript, Tailwind CSS
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Backend
                </span>
                <p className="text-gray-600">
                  Spring Boot, Node.js, Python, FastAPI
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">Tools</span>
                <p className="text-gray-600">Git, Docker, PostgreSQL, AWS</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">AI/Data</span>
                <p className="text-gray-600">Scikit-learn, NumPy, Pandas, TensorFlow, Vision Transformers (ViT)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
