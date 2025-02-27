import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "../styles/global.css";
import About_img01 from "../assets/image/Serviceimg01.png";
import ServiceModal from "./Service_Modal.jsx";
import ServiceModalMobile from "./mobile/ServiceModalMobile.jsx"; 

const Service = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detecta si es móvil

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="Service" ref={ref} className="py-16 px-6 md:px-20">
            <div  className="-mt-10 grid md:grid-cols-2 gap-5 items-center">
                <div className="relative">
                    <motion.h3 
                        className="text-sky-900 font-bold text-2xl uppercase"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Nuestros Servicios
                    </motion.h3>
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Lo Que Hacemos
                    </motion.h2>
                    <motion.p 
                        className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        En Integra Familia, estamos comprometidos a garantizar el acceso equitativo a las necesidades básicas de los niños, 
                        desde bebés hasta adolescentes, en comunidades desfavorecidas que enfrentan crisis o dificultades financieras. 
                        Proporcionamos recursos esenciales para apoyar su bienestar y, a través de nuestro programas, 
                        equipamos a los adolescentes con habilidades vitales como el autocuidado, la educación financiera y la etiqueta social. 
                        Nuestra misión es restaurar la esperanza ofreciendo recursos materiales y oportunidades para el crecimiento personal, 
                        empoderando a los niños para que prosperen en todos los aspectos de sus vidas.
                    </motion.p>
                    <motion.button 
                        className="mt-10 bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-800 transition"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Ver Todos Los Servicios
                    </motion.button>
                </div>
                
                <div>
                    <div className="inline-block p-3 rounded-lg">
                        <img src={About_img01.src} alt="Blossom" className="rounded-lg rotate-6" />
                    </div>
                </div>
            </div>

            {/* Modal dinámico según el dispositivo */}
            {isModalOpen && (
                isMobile ? <ServiceModalMobile onClose={() => setIsModalOpen(false)} /> 
                        : <ServiceModal onClose={() => setIsModalOpen(false)} />
            )}
        </section>
    );
};

export default Service;
