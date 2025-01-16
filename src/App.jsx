import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import chema from '/IMG_7177.jpg'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-900 text-white p-6">
          <div className="flex items-center space-x-6">
            <img
              src={chema} // Replace with your image source
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
            <div>
              <h1 className="text-3xl font-bold">José Manuel González</h1>
              <p className="mt-1 text-sm">Fecha de nacimiento: 10/10/2002</p>
              <p className="text-sm">Nacionalidad: Mexicana</p>
              <div className="mt-4 space-y-1 text-sm">
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Calle Fresnos #130 Fracc. Jacarandas, Mazatlán 82157, México
                </p>
                <p className="flex items-center">
                  <FaPhone className="mr-2" /> +52 618 116 1528
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2" /> gjosemanuel375@gmail.com
                </p>
                <p className="flex items-center">
                  <FaGlobe className="mr-2" /> <a href="https://drive.google.com/drive/folders/1OxADBniWQJltltD3YLERs1vqP4FOXSQL?usp=sharing" className="underline text-blue-400">Drive Link</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Perfil</h2>
          <p className="text-gray-700">
            Autodidacta y apasionado por la tecnología, con experiencia en desarrollo web y móvil
            Full Stack. Proactivo, orientado a resultados y con habilidades destacadas en gestión de
            equipos y resolución de problemas complejos. Enfocado en el aprendizaje continuo y la
            adopción de nuevas tecnologías.
          </p>
        </div>

        {/* Experience Section */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Experiencia Profesional</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Desarrollador Web Full Stack - Freelancer</h3>
              <p className="text-sm text-gray-600">01/2023 - 07/2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Desarrollé aplicaciones web y móviles utilizando tecnologías como React, Node.js,
                  TailwindCSS y MySQL.
                </li>
                <li>
                  Implementé APIs RESTful y GraphQL para la gestión eficiente de datos.
                </li>
                <li>
                  Colaboré directamente con clientes para cumplir con sus requerimientos específicos.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Desarrollador Web Full Stack - QACS</h3>
              <p className="text-sm text-gray-600">04/2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Desarrollé una aplicación web escalable con React, GraphQL, Apollo y Node.js.</li>
                <li>Trabajé en proyectos enfocados en mejorar la eficiencia del flujo de trabajo.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Ingeniero de Campo y Soporte Técnico - BBVA</h3>
              <p className="text-sm text-gray-600">01/2022 - 08/2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Instalé y configuré infraestructuras informáticas en sucursales.
                </li>
                <li>
                  Identifiqué y solucioné problemas técnicos de manera efectiva.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Desarrollador Web Full Stack - RSP Mazatlán (Call Center)</h3>
              <p className="text-sm text-gray-600">08/2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Diseñé e implementé aplicaciones para gestión de llamadas, integrando MySQL, Node.js y Express.
                </li>
                <li>
                  Incrementé la eficiencia de los agentes en más del 50% al optimizar procesos de gestión de datos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Educación</h2>
          <p>
            <span className="font-semibold">Software Engineering</span> - Universidad Politécnica de
            Durango (2017 - 2020, Título en curso)
          </p>
        </div>

        {/* Skills Section */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Habilidades Técnicas</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Programación y Frameworks</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Frontend: React, TailwindCSS, Bootstrap, HTML, CSS, JavaScript</li>
                <li>Backend: Node.js, Express</li>
                <li>Bases de datos: MySQL (Intermedio), MongoDB (Básico)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Herramientas</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Figma, XAMPP, Postman, Git, GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Proyectos Destacados</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <span className="font-semibold">Aplicación de Gestión de Llamadas:</span> Aumenté la
              eficiencia de los agentes en más del 50% mediante una solución escalable para realizar
              llamadas.
            </li>
            <li>
              <span className="font-semibold">Portal de Transparencia Gubernamental:</span> Diseñé
              una aplicación web intuitiva y responsiva para facilitar el acceso a información
              pública.
            </li>
            <li>
              <span className="font-semibold">Aplicación de Predicción del Dólar:</span> Creé una aplicación dedicada a analizar el flujo del peso mexicano frente al dólar, con visualización de tendencias y predicciones basadas en datos históricos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
