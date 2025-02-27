import { useEffect, useState } from "react";
import HeaderMobile from "./mobile/HeaderMobile";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Detecta si es móvil
        };

        handleResize(); // Verifica al cargar
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? (
        <HeaderMobile />
    ) : (
        <header  className="fixed top-0 left-0 right-0 z-10 p-4 w-full px-6 hidden md:block shadow-md bg-white">
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10">
                {/* LOGO A LA IZQUIERDA */}
                <div className="flex-shrink-0">
                <a href="#Home" className="text-2xl font-daily text-sky-900">
                    INTEGRA FAMILIA
                </a>
                </div>
                {/* ENLACES Y BOTÓN A LA DERECHA */}
                <div className="flex items-center ml-auto space-x-8">
                <a href="#Service" className="text-sky-900 text-2sm font-semibold">
                    Servicios
                </a>
                <a href="#History" className="text-sky-900 text-2sm font-semibold">
                    Historia
                </a>
                <a href="#Values" className="text-sky-900 text-2sm font-semibold">
                    Valores
                </a>
                <a href="#Seats" className="text-sky-900 text-2sm font-semibold">
                    Sedes
                </a>
                <a
                    href="#"
                    className="bg-sky-700 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-sky-800"
                >
                    Contacto
                </a>
                </div>
            </div>
            </div>
        </nav>
        </header>
    );
};

export default Header;
