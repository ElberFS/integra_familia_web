import { useState } from "react";
import { motion } from "framer-motion";

const BotonVoluntario = ({ onClose }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [numero, setNumero] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleEnviar = () => {
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=elberjesus09@gmail.com&su=Solicitud%20de%20Voluntariado&body=Nombre:%20${encodeURIComponent(nombre)}%0AEmail:%20${encodeURIComponent(correo)}%0ANúmero:%20${encodeURIComponent(numero)}%0AMensaje:%20${encodeURIComponent(mensaje)}`;
        window.open(gmailLink, "_blank");
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
            <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg w-[400px] max-w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">Formulario de Voluntariado</h2>

                <div className="space-y-3">
                    <input 
                        type="text" placeholder="Nombre" 
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                        value={nombre} onChange={(e) => setNombre(e.target.value)} 
                    />
                    <input 
                        type="email" placeholder="Correo" 
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                        value={correo} onChange={(e) => setCorreo(e.target.value)} 
                    />
                    <input 
                        type="tel" placeholder="Número" 
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                        value={numero} onChange={(e) => setNumero(e.target.value)} 
                    />
                    <textarea 
                        placeholder="Mensaje" rows="3" 
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none resize-none" 
                        value={mensaje} onChange={(e) => setMensaje(e.target.value)}
                    ></textarea>
                </div>

                <div className="flex justify-between mt-5">
                    <button 
                        onClick={handleEnviar} 
                        className="bg-sky-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-800 transition shadow-md"
                    >
                        Enviar
                    </button>
                    <button 
                        onClick={onClose} 
                        className="bg-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-gray-400 transition shadow-md"
                    >
                        Cerrar
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default BotonVoluntario;
