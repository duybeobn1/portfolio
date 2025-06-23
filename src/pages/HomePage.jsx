import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="relative bg-white text-gray-900 min-h-screen overflow-x-hidden font-bold">
      {/* Top-left corner icon */}
      <Link to="/home" className="fixed top-4 left-6 text-2xl font-bold cursor-pointer transition-all duration-300 group z-50">
        <span className="group-hover:opacity-0 transition-opacity duration-300">A.V</span>
        <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Anh VU</span>
      </Link>

      {/* Hero section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center">
        <motion.h1
          className="text-5xl sm:text-7xl leading-tight tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vu Anh Duy
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Étudiant en Master 2 Informatique à l’Université Lyon 1. Passionné par l’intelligence artificielle, la vision par ordinateur, et l’analyse de données appliquée.
        </motion.h2>
      </section>

      {/* Projets récents */}
      <section className="py-24 px-6">
        <motion.h3
          className="text-3xl sm:text-4xl mb-12 inline-block relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative z-10">PROJETS CLÉS</span>
          <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-300 -z-0 rotate-2"></span>
        </motion.h3>

        <div className="space-y-8">
          {["Vision Transformer pour la restauration d'image", "Comparateur CO₂ (React + Spring Boot)", "Bot de trading crypto avec stratégie technique", "Assistant culinaire intelligent (OCR + YOLO)"]
            .map((title, i) => (
              <motion.div
                key={title}
                className="text-2xl sm:text-3xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {title}
              </motion.div>
          ))}
        </div>
      </section>

      {/* Message personnel */}
      <section className="h-screen bg-black text-white flex items-center justify-center px-4 text-center">
        <motion.p
          className="text-2xl sm:text-4xl max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          J'aime créer des solutions intelligentes et utiles mêlant IA, développement web et vision par ordinateur.
        </motion.p>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <motion.h3
          className="text-4xl mb-8 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative z-10">CONTACTEZ-MOI</span>
          <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-300 -z-0 -rotate-2"></span>
        </motion.h3>

        <form className="max-w-xl space-y-4">
          <input className="w-full border-b border-black py-2" placeholder="Votre nom *" />
          <input className="w-full border-b border-black py-2" placeholder="Votre email *" />
          <textarea className="w-full border-b border-black py-2" placeholder="Votre message *" />
          <button type="submit" className="mt-4 px-6 py-2 bg-black text-white rounded">
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;
