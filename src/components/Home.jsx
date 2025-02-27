import {useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";
import Hero_video from "../assets/video/Hero_Video.mp4";
import HomeMobile  from "./mobile/HomeMobile.jsx";
import BottonVoluntario from "./BottonVoluntario.jsx";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return isMobile ? <HomeMobile /> : (
        <div id="Home" className="relative">
            {/* Video de fondo */}
            <video className="w-full h-screen object-cover" src={Hero_video} autoPlay loop muted></video>

            {/* Contenedor del texto */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 md:p-20 bg-gradient-to-r from-black/50 to-transparent">
                <motion.h1 
                    className="mt-60 text-white text-4xl md:text-6xl font-bold max-w-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Atender las necesidades fundamentales de la infancia y la adolescencia.
                </motion.h1>
                
                <motion.p 
                    className="text-white text-lg md:text-xl mt-4 max-w-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Trabajamos por el bienestar de la infancia y adolescencia en Perú, garantizando su desarrollo.
                </motion.p>
                
                {/* Botones */}
                <motion.div 
                    className="mt-6 flex space-x-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <a href="https://www.youtube.com/watch?v=4DTUduyIWAw&t=370s" target="_blank" className="bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-800 transition">
                        Más Información
                    </a>
                    <button 
                        className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Ofrécete Como Voluntario
                    </button>
                </motion.div>
            </div>

            {/* Curva inferior */}
            <img 
                src="https://cdn.prod.website-files.com/63ab0fc5785d7f0ec0f87f52/63bce8355e8fa2bba32f9ea5_divider-3.svg" 
                loading="lazy" alt="Curva inferior" 
                className="absolute bottom-[-10px] left-0 w-full h-auto"
            />

            {/* Modal de voluntariado */}
            {isModalOpen && <BottonVoluntario onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Home;
