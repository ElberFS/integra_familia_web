import { useState } from "react";

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-10 p-4 bg-white shadow-md md:hidden">
            <nav className="border-2 border-[#CBD9DE] rounded-full shadow-md px-6 py-2 flex items-center justify-between">
                <a href="#" className="text-2xl font-daily text-sky-900">INTEGRA FAMILIA</a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-sky-900 focus:outline-none"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>

            {isOpen && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-lg transition-all duration-300">
                    <ul className="flex flex-col space-y-4 p-6 text-center font-semibold">
                        <li><a href="#" className="text-sky-900 text-lg">Acerca de</a></li>
                        <li><a href="#" className="text-sky-900 text-lg">Historia</a></li>
                        <li><a href="#" className="text-sky-900 text-lg">Valores</a></li>
                        <li><a href="#" className="text-sky-900 text-lg">Eventos</a></li>
                        <li><a href="#" className="bg-sky-700 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-sky-800">Contacto</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
