import { useState } from "react";
import Facebook from "../assets/svg/facebook-svg.svg";
import Linkedin from "../assets/svg/linkedin-svg.svg";
import Instagram from "../assets/svg/instagram-svg.svg";
import Whatsapp from "../assets/svg/whatsapp-svg.svg";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <footer className="bg-sky-900 text-white py-24 px-6 md:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* Sección de contacto */}
                <div className="bg-sky-800 p-6 rounded-lg border border-white">
                    <h3 className="text-3xl font-bold">Conéctate con Integra Familia</h3>
                    <p className="mt-4 text-lg">
                        Somos una organización sin fines de lucro comprometida a servir ¡Únase a nosotros hoy para apoyar nuestra misión!
                    </p>
                    <p className="mt-4 text-xl font-semibold flex items-center">
                        📞 <a href="tel:+51987654321" className="ml-2 underline">(+51) 987 654 321</a>
                    </p>

                    
                </div>

                {/* Mapa */}
                <div>
                    <iframe 
                        className="w-full h-64 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6873.359169742129!2d-91.0173345314213!3d30.29039909330319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626a67a896e46df%3A0x4b5a5f7b4e33db28!2sBlossom!5e0!3m2!1sen!2sus!4v1708712515693"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6">
                {/* Redes Sociales */}
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/integrafamilia/" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook.src} alt="Facebook" className="h-6 w-auto hover:opacity-80" />
                    </a>
                    <a href="https://pe.linkedin.com/company/integra-familia-ong" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin.src} alt="LinkedIn" className="h-6 w-auto hover:opacity-80" />
                    </a>
                    <a href="https://www.instagram.com/integrafamiliaa/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram.src} alt="Instagram" className="h-6 w-auto hover:opacity-80" />
                    </a>
                    <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp.src} alt="WhatsApp" className="h-6 w-auto hover:opacity-80" />
                    </a>
                </div>

                {/* Derechos de Autor */}
                <p className="text-base">&copy; 2025 Integra Familia. All rights reserved.</p>
            </div>


                    </footer>
                );
            };

export default Footer;
