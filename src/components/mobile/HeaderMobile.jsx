import { useState } from "react";

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-10 p-4 bg-white  md:hidden">
            <nav className="  px-6 py-2 flex items-center justify-between">
                <a href="HomeMobile" className="text-2xl font-daily text-sky-900">INTEGRA FAMILIA</a>

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
                        <li><a href="#Service" className="text-sky-900 text-lg" onClick={() => setIsOpen(false)}>Servicios</a></li>
                        <li><a href="#History" className="text-sky-900 text-lg" onClick={() => setIsOpen(false)}>Historia</a></li>
                        <li><a href="#ValuesMobile" className="text-sky-900 text-lg" onClick={() => setIsOpen(false)}>Valores</a></li>
                        <li><a href="#Seats" className="text-sky-900 text-lg" onClick={() => setIsOpen(false)}>Sedes</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
