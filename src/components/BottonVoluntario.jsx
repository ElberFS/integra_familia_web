import { useState } from "react";

const BotonVoluntario = ({ onClose }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [numero, setNumero] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleEnviar = () => {
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=elberjesus09@gmail.com&su=Solicitud%20de%20Voluntariado&body=Nombre:%20${encodeURIComponent(nombre)}%0AEmail:%20${encodeURIComponent(correo)}%0ANúmero:%20${encodeURIComponent(numero)}%0AMensaje:%20${encodeURIComponent(mensaje)}`;
        
        window.open(gmailLink, "_blank"); // Abre Gmail en una nueva pestaña
    };

    return (
        <div className="fixed inset-0 z-50  bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">Formulario de Voluntariado</h2>
                
                <input type="text" placeholder="Nombre" className="w-full p-2 mb-2 border rounded" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder="Correo" className="w-full p-2 mb-2 border rounded" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                <input type="tel" placeholder="Número" className="w-full p-2 mb-2 border rounded" value={numero} onChange={(e) => setNumero(e.target.value)} />
                <textarea placeholder="Mensaje" className="w-full p-2 mb-2 border rounded" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>

                <div className="flex justify-between mt-4">
                    <button onClick={handleEnviar} className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">Enviar</button>
                    <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default BotonVoluntario;
