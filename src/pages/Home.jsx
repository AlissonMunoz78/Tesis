import { Link } from "react-router-dom";
import { MdMuseum } from "react-icons/md";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaArrowRight,
  FaDonate,
  FaCalendarAlt,
  FaUserPlus,
} from "react-icons/fa";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import epn from "../../Public/epn.png";
import museo from "../../Public/museo.png";




export const Home = () => {
  // Carrusel slides
  const slides = [
    "../../assets/dino.jpg'",
    "../../assets/mamut.jpeg",
    "../../assets/jurasico.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Carrusel automático con fade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Detectar scroll para header
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#2aa89b]/95 shadow-lg"
            : "bg-black/50 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center py-5">
          <div className="flex items-center gap-4">
            <img src={epn} alt="Logo EPN" className="h-24 w-auto" />
            <h1
              className="text-3xl text-white font-bold tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Museo Gustavo Orcés
            </h1>
          </div>
          <nav>
            <ul className="flex gap-8 text-lg font-medium text-white">
              <li>
                <a className="hover:text-gray-200" href="#inicio">
                  Inicio
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#sobre-nosotros">
                  Nosotros
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#servicios">
                  Servicios
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#contacto">
                  Contacto
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#2aa89b] transition"
                >
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* SECCIÓN INICIO */}
      <section id="inicio" className="w-full relative mt-[110px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none"></div>
        <div className="relative z-20 bg-[#e6f7f5] py-24 md:py-36 px-6 lg:px-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight text-[#2aa89b]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Patrimonio Científico del Ecuador
              </h1>
              <p className="text-xl mt-6 text-gray-700 leading-relaxed">
                Inspirando el conocimiento a través de la ciencia, historia
                natural y exploración.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="#servicios"
                  className="border border-[#2aa89b] px-8 py-3 rounded-full text-[#2aa89b] font-semibold hover:bg-[#2aa89b] hover:text-white transition flex items-center gap-2 justify-center"
                >
                  Agendar Visita <FaArrowRight />
                </a>
                <a
                  href="#donaciones"
                  className="px-8 py-3 rounded-full bg-[#2aa89b] text-white font-semibold hover:bg-[#228f82] transition flex items-center gap-2 justify-center"
                >
                  <FaDonate /> Donar
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#2aa89b] blur-2xl opacity-20 rounded-3xl"></div>
                <img
                  src={museo}
                  alt="Museo"
                  className="relative h-72 md:h-96 w-auto rounded-3xl shadow-lg border border-gray-200 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARRUSEL AUTOMÁTICO CON FADE */}
      <section className="w-full py-16 bg-white">
        <h2
          className="text-4xl font-bold text-center text-[#2aa89b] mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Exhibiciones Destacadas
        </h2>
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl shadow-xl h-[380px]">
          <AnimatePresence>
            <motion.img
              key={currentSlide}
              src={slides[currentSlide]}
              alt={`Exhibición ${currentSlide + 1}`}
              className="absolute w-full h-full object-cover rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="container mx-auto px-6 py-20" id="sobre-nosotros">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sobre Nosotros
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed text-lg">
          El Museo Gustavo Orcés es un espacio dedicado a la historia natural y
          la investigación científica del Ecuador, con exhibiciones, colecciones
          y programas educativos que conectan al público con la biodiversidad.
        </div>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="text-center">
            <MdMuseum className="text-5xl text-[#2aa89b] mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Exhibiciones</h4>
            <p className="text-gray-600">Colecciones científicas permanentes.</p>
          </div>
          <div className="text-center">
            <FaBookOpen className="text-5xl text-[#2aa89b] mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Investigación</h4>
            <p className="text-gray-600">Material de referencia para estudios.</p>
          </div>
          <div className="text-center">
            <FaChalkboardTeacher className="text-5xl text-[#2aa89b] mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Educación</h4>
            <p className="text-gray-600">
              Talleres, visitas guiadas y programas estudiantiles.
            </p>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN GENERAL */}
      <section className="bg-[#e6f7f5] py-20">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Información General
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-md text-center border border-gray-200">
              <FaMapMarkerAlt className="text-4xl text-[#2aa89b] mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Ubicación</h3>
              <p className="text-gray-600 leading-relaxed">
                Escuela Politécnica Nacional <br /> Ladrón de Guevara E11-253, Quito
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-md text-center border border-gray-200">
              <FaClock className="text-4xl text-[#2aa89b] mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Horarios</h3>
              <p className="text-gray-600">Lunes a Viernes <br /> 08:00 - 16:30</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-md text-center border border-gray-200">
              <FaPhone className="text-4xl text-[#2aa89b] mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Contacto</h3>
              <p className="text-gray-600">info@museogustavorces.ec <br /> 02 123 4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container mx-auto px-6 py-20" id="servicios">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-10 bg-white rounded-xl shadow-md border border-gray-200 text-center">
            <FaCalendarAlt className="text-5xl text-[#2aa89b] mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Visitas Grupales</h4>
            <p className="text-gray-600 mb-4">
              Para grupos de 2 a 25 personas. Ideal para instituciones.
            </p>
            <Link
              to="/publico/visitas/disponibilidad"
              className="inline-block border border-[#2aa89b] text-[#2aa89b] px-6 py-2 rounded-full hover:bg-[#2aa89b] hover:text-white transition"
            >
              Consultar disponibilidad
            </Link>
          </div>
          <div className="p-10 bg-white rounded-xl shadow-md border border-gray-200 text-center">
            <FaUserPlus className="text-5xl text-[#2aa89b] mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Visitas Individuales</h4>
            <p className="text-gray-600 mb-4">Acceso libre durante nuestro horario.</p>
            <Link
              to="/publico/visitante"
              className="inline-block border border-[#2aa89b] text-[#2aa89b] px-6 py-2 rounded-full hover:bg-[#2aa89b] hover:text-white transition"
            >
              Registrar visita
            </Link>
          </div>
          <div className="p-10 bg-white rounded-xl shadow-md border border-gray-200 text-center">
            <MdMuseum className="text-5xl text-[#2aa89b] mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-4">Acceso Personal</h4>
            <p className="text-gray-600 mb-4">Administradores y pasantes del museo.</p>
            <Link
              to="/login"
              className="inline-block border border-[#2aa89b] text-[#2aa89b] px-6 py-2 rounded-full hover:bg-[#2aa89b] hover:text-white transition"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </section>

      {/* DONACIONES */}
      <section id="donaciones" className="bg-[#e6f7f5] py-20">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Apoya al Museo
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-300 text-center">
              <FaDonate className="text-5xl text-[#2aa89b] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Donación Económica</h3>
              <p className="text-gray-600 mb-6">
                Contribuye con nuestras actividades científicas.
              </p>
              <Link
                to="/publico/donacion/economica"
                className="border border-[#2aa89b] text-[#2aa89b] px-6 py-2 rounded-full hover:bg-[#2aa89b] hover:text-white transition inline-block"
              >
                Donar ahora
              </Link>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-300 text-center">
              <FaBookOpen className="text-5xl text-[#2aa89b] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Donación de Bienes</h3>
              <p className="text-gray-600 mb-6">
                Apoya con materiales o especímenes.
              </p>
              <Link
                to="/publico/donacion/bienes"
                className="border border-[#2aa89b] text-[#2aa89b] px-6 py-2 rounded-full hover:bg-[#2aa89b] hover:text-white transition inline-block"
              >
                Registrar donación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="bg-black/80 text-white py-14 px-6 text-center backdrop-blur-md"
      >
        <h3
          className="text-3xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contáctanos
        </h3>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://www.facebook.com/MuseoGustavoOrcesEPN?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-[#2aa89b] transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mhngov?igsh=aHFzcjB2ZDNiM2o5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-[#2aa89b] transition"
          >
            <FaSquareInstagram />
          </a>
        </div>
        <p className="text-white/90">
          info@museogustavorces.ec • 02 123 4567 • Quito, Ecuador
        </p>
        <p className="mt-10 text-white/80 text-sm">
          © 2025 Museo Gustavo Orcés – Escuela Politécnica Nacional
        </p>
      </footer>
    </>
  );
};

export default Home;
