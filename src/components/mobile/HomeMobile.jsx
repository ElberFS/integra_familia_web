import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/global.css";
import Hero_video from "../../assets/video/Hero_Video.mp4";
import BottonVoluntario from "../BottonVoluntario.jsx";

const HomeMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative">
            {/* Video de fondo */}
            <video className="w-full h-screen object-cover" src={Hero_video} autoPlay loop muted></video>

            {/* Contenedor de texto */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center p-6 bg-gradient-to-b from-black/60 to-transparent text-start">
                <motion.h1 
                    className="text-white text-3xl font-bold max-w-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Apoyamos el bienestar de la infancia y la adolescencia.
                </motion.h1>
                
                <motion.p 
                    className="text-white text-lg mt-4 flex text-start"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Trabajamos por el desarrollo integral de los niños y adolescentes en Perú.
                </motion.p>

                {/* Botones (ajustados más arriba) */}
                <motion.div 
                    className="mt-4 flex flex-col space-y-3 w-full items-start self-end pr-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="https://www.youtube.com/watch?v=4DTUduyIWAw&t=370s" 
                        target="_blank" 
                        className="bg-sky-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-800 transition w-auto text-center">
                        Más Información
                    </a>
                    <button 
                        className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition w-auto"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Únete como Voluntario
                    </button>
                </motion.div>
            </div>

            {/* Curva inferior */}
            <img 
                src="https://cdn.prod.website-files.com/63ab0fc5785d7f0ec0f87f52/63bce8355e8fa2bba32f9ea5_divider-3.svg" 
                loading="lazy" 
                alt="Curva inferior" 
                className="absolute bottom-[-10px] left-0 w-full h-auto"
            />

            {/* Modal de voluntariado */}
            {isModalOpen && <BottonVoluntario onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default HomeMobile;
