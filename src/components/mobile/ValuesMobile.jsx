import { motion } from "framer-motion";
import Fortaleza from "../../assets/image/valores/Fortaleza.png";
import Amor from "../../assets/image/valores/Amor.png";
import Mutuo_Respeto from "../../assets/image/valores/Respeto.png";
import Integridad from "../../assets/image/valores/Integridad.png";
import Lealtad from "../../assets/image/valores/Lealtad.png";
import Impulso_Crecimiento from "../../assets/image/valores/Crecimiento.png";
import Apoyo from "../../assets/image/valores/Apoyo.png";

const values = [
    { img: Fortaleza, label: "Fortaleza", border: "border-blue-500" },
    { img: Amor, label: "Amor", border: "border-yellow-500" },
    { img: Mutuo_Respeto, label: "Mutuo Respeto", border: "border-green-500" },
    { img: Integridad, label: "Integridad", border: "border-red-500" },
    { img: Lealtad, label: "Lealtad", border: "border-indigo-500" },
    { img: Impulso_Crecimiento, label: "Impulso al Crecimiento", border: "border-purple-500" },
    { img: Apoyo, label: "Apoyo", border: "border-orange-500" },
];

const ValuesMobile = () => {
    return (
        <section className="bg-white py-16 px-6">
        <div className="text-center">
            <motion.h3
            className="text-3xl font-bold uppercase text-sky-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            Nuestros Valores
            </motion.h3>
            <motion.h2
            className="text-5xl font-bold mt-3 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            >
            Integra F.A.M.I.L.I.A.
            </motion.h2>
        </div>

        {/* Valores con animación */}
        <div className="grid grid-cols-2 gap-6 mt-12 text-center">
            {values.map(({ img, label, border }, index) => (
            <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
            >
                <div
                className={`w-32 h-32 rounded-full border-8 ${border} flex items-center justify-center bg-white shadow-lg`}
                >
                <motion.img
                    src={img.src}
                    alt={label}
                    className="w-20 h-20"
                    whileHover={{ rotate: 10 }}
                />
                </div>
                <p className="mt-4 font-bold text-lg">{label}</p>
            </motion.div>
            ))}
        </div>
        </section>
    );
};

export default ValuesMobile;
