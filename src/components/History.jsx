import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "../styles/global.css";
import About_img from "../assets/image/Historyimg02.png";

const History = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Imagen superior */}
            <img 
                src="https://cdn.prod.website-files.com/63ab0fc5785d7f0ec0f87f52/63ab10ada9f32b146626b8f4_divider-2.svg" 
                alt="" 
                className="bg-sky-200 w-full" 
            />

            <section ref={sectionRef} className="relative bg-sky-200 py-10 px-6 md:px-20 max-h-2xl">
                <div className="relative -mt-20 grid md:grid-cols-2 gap-5 items-center">
                    <div className="relative">
                        <div className="relative inline-block p-3 rounded-lg">
                            <img src={About_img.src} alt="" className="rounded-lg rotate-2 w-5xl h-auto scale-80" />
                        </div>
                    </div>
                    <div className="relative">
                        <motion.h3
                            className="text-sky-900 font-bold text-2xl uppercase"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Nuestra Historia
                        </motion.h3>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Como Inicio Integra Familia
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            "Integra Familia" nació en Chiclayo durante la pandemia, cuando Aldo, inspirado por su madre Liliana y el padre Edwar Tocto,
                            vio la necesidad de ayudar a niños en situación vulnerable. Comenzó como un pequeño refuerzo académico en el Santuario Nuestra
                            Señora de la Paz con solo 13 niños y 5 voluntarios. Con el tiempo, el proyecto creció, sumando más voluntarios y ampliando su
                            impacto. Se incorporaron formaciones para madres, apoyo psicológico y catequesis para quienes buscaban fortalecer su fe. Hoy,
                            "Integra Familia" cuenta con más de 70 voluntarios comprometidos en transformar vidas a través de la educación, la espiritualidad y
                            la solidaridad.
                        </motion.p>
                        <motion.a
                    className="mt-10 bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-800 transition inline-block text-center"
                    href="https://opusdei.org/es-pe/article/chiclayo-integra-familia-unidos-al-servicio-de-los-demas/"
                    target="_blank" // Abre en una nueva pestaña
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Más Información
                </motion.a>


                    </div>
                </div>
            </section>

            {/* Imagen inferior */}
            <img 
                src="https://cdn.prod.website-files.com/63ab0fc5785d7f0ec0f87f52/63bce8355e8fa2bba32f9ea5_divider-3.svg" 
                alt="" 
                className="w-full bg-sky-200" 
            />
        </>
    );
};

export default History;
