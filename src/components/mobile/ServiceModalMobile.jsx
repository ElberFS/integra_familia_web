import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importar imágenes
import Service01 from "../../assets/image/service/reforzamiento.jpg";
import Service02 from "../../assets/image/service/campaña_medica.jpg";
import Service03 from "../../assets/image/service/derecho.jpg";
import Service04 from "../../assets/image/service/taller_psicologico.jpg";
import Service05 from "../../assets/image/service/celebracion_fiestas.jpg";
import Service06 from "../../assets/image/service/Olimpiadas.jpg";
import Service07 from "../../assets/image/service/motivacion.jpg";

// Lista de servicios
const services = [
    { 
        img: Service01.src, 
        title: "Reforzamientos", 
        description: "Brindamos apoyo académico personalizado para reforzar los conocimientos en diversas materias, con un enfoque en la comprensión y el éxito escolar."
    },
    { 
        img: Service02.src, 
        title: "Campañas Médicas", 
        description: "Ofrecemos servicios médicos gratuitos, incluyendo consultas generales, vacunaciones y orientación sobre salud preventiva."
    },
    { 
        img: Service03.src, 
        title: "Apoyo Jurídico", 
        description: "Proporcionamos asesoramiento legal en distintas áreas, ayudando a la comunidad a resolver problemas legales de manera eficiente."
    },
    { 
        img: Service04.src, 
        title: "Talleres Psicológicos", 
        description: "Charlas y sesiones grupales enfocadas en la salud mental y el bienestar emocional, promoviendo el desarrollo personal."
    },
    { 
        img: Service05.src, 
        title: "Celebración de Días Festivos", 
        description: "Organizamos eventos comunitarios para conmemorar fechas especiales, fomentando la unión y la integración social."
    },
    { 
        img: Service06.src, 
        title: "Olimpiadas", 
        description: "Fomentamos la actividad física y el trabajo en equipo a través de competencias deportivas y recreativas."
    },
    { 
        img: Service07.src, 
        title: "Taller", 
        description: "Realizamos eventos artísticos y culturales, ofreciendo espacios de expresión y creatividad para toda la comunidad."
    }
];

const ServiceModalMobile = ({ onClose }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1, // SOLO UN SERVICIO POR VEZ EN MÓVILES
        slidesToScroll: 1,
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <motion.div 
                className="bg-sky-100 p-4 rounded-lg shadow-lg w-[90%] max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <h2 className="text-xl font-bold text-sky-900 text-center">NUESTROS SERVICIOS</h2>
                
                {/* Carrusel con animaciones */}
                <Slider {...settings} className="mt-4">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="px-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="bg-gray-100 p-3 rounded-lg shadow-lg text-center">
                                <motion.img 
                                    src={service.img} 
                                    alt={service.title} 
                                    className="w-full h-40 object-cover rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                />
                                <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>

                <motion.button 
                    className="mt-6 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 block mx-auto"
                    onClick={onClose} 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Cerrar
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ServiceModalMobile;
