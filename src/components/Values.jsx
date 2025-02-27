import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/global.css";
import ValuesMobile from "./mobile/ValuesMobile.jsx";

// Importar imágenes de valores
import Fortaleza from "../assets/image/valores/Fortaleza.png";
import Amor from "../assets/image/valores/Amor.png";
import Mutuo_Respeto from "../assets/image/valores/Respeto.png";
import Integridad from "../assets/image/valores/Integridad.png";
import Lealtad from "../assets/image/valores/Lealtad.png";
import Impulso_Crecimiento from "../assets/image/valores/Crecimiento.png";
import Apoyo from "../assets/image/valores/Apoyo.png";

const Values = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { threshold: 0.3 });
    const [isMobile, setIsMobile] = useState(false); 

    useEffect(() => {
        if (typeof window !== "undefined") { 
            setIsMobile(window.innerWidth < 768);
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return isMobile ? <ValuesMobile /> : (
        <section id="Values" ref={sectionRef} className="relative bg-white py-16 px-6 md:px-20">
            {/* Títulos con animación */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative text-center"
            >
                <h3 className="text-3xl font-bold uppercase text-sky-800">Nuestros Valores</h3>
                <h2 className="text-5xl md:text-6xl font-bold mt-3 text-gray-900">Integra F.A.M.I.L.I.A.</h2>
            </motion.div>

            {/* Animaciones para las filas de valores */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 mt-12 text-center"
            >
                {[{ img: Fortaleza, label: "Fortaleza", border: "border-blue-500" },
                    { img: Amor, label: "Amor", border: "border-yellow-500" },
                    { img: Mutuo_Respeto, label: "Mutuo Respeto", border: "border-green-500" },
                    { img: Integridad, label: "Integridad", border: "border-red-500" }].map(({ img, label, border }, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            whileHover={{ scale: 1.1, rotate: 5 }} // Efecto al pasar el mouse
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className={`w-45 h-45 rounded-full border-8 ${border} flex items-center justify-center bg-white`}>
                                <img src={img.src} alt={label} className="w-30 h-30" />
                            </div>
                            <p className="mt-4 font-bold text-lg">{label}</p>
                        </motion.div>
                    ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 mt-12 text-center place-items-center"
            >
                {[{ img: Lealtad, label: "Lealtad", border: "border-indigo-500" },
                    { img: Impulso_Crecimiento, label: "Impulso al Crecimiento", border: "border-purple-500" },
                    { img: Apoyo, label: "Apoyo", border: "border-orange-500" }].map(({ img, label, border }, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            whileHover={{ scale: 1.1, rotate: 5 }} // Efecto al pasar el mouse
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            className="flex flex-col items-center"
                        >
                            <div className={`w-45 h-45 rounded-full border-8 ${border} flex items-center justify-center bg-white`}>
                                <img src={img.src} alt={label} className="w-30 h-30" />
                            </div>
                            <p className="mt-4 font-bold text-lg">{label}</p>
                        </motion.div>
                    ))}
            </motion.div>
        </section>
    );
};

export default Values;
