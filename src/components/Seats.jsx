import { motion } from "framer-motion";
import Naranjal from "../assets/image/seats/Naranjal.jpg";
import Santuario from "../assets/image/seats/Santuario.png";
import Lambayeque from "../assets/image/seats/Lambayeque.jpeg";

const seats = [
    {
        name: "Naranjan",
        image: Naranjal.src,
        location: "Ubicación aleatoria 1",
        link: "#",
    },
    {
        name: "Santuario",
        image: Santuario.src,
        location: "Ubicación aleatoria 2",
        link: "#",
    },
    {
        name: "Lambayeque",
        image: Lambayeque.src,
        location: "Ubicación aleatoria 3",
        link: "#",
    },
];

const Seats = () => {
    return (
        <section id="Seats" className="bg-sky-200 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sky-900 text-center mb-8">Nuestras Sedes</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {seats.map((seat, index) => (
                <motion.a
                key={index}
                href={seat.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-4 rounded-lg shadow-lg transition-all"
                >
                <img
                    src={seat.image}
                    alt={seat.name}
                    className="w-full h-56 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{seat.name}</h3>
                <p className="text-gray-600">{seat.location}</p>
                </motion.a>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Seats;
