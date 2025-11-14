import { Github, Mail } from "lucide-react"
import img from '../assets/techno/yvan.jpg'
const Accueil = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            <div className="flex flex-col w-full md:w-1/2
                            items-center text-center
                            md:items-start md:text-left">

                <h1 className="text-4xl md:text-5xl font-bold mt-8">
                    Bienvenue,
                    <br /> je suis {" "}
                    <span className="text-accent">Yvan GNAMKEY</span>
                </h1>

                <p className="my-4 text-md text-xl md:text-2xl">
                    <span className="text-accent text-bold">Développeur Fullstack</span> orienté Front-End,
                </p>

                <p className="text-md">
                    Je crée des interfaces modernes, intuitives et performantes,
                </p>
                <p className="text-md">
                    avec une attention particulière portée à l’expérience utilisateur
                </p>
                <p className="text-md">
                    et à la qualité du code.
                </p>

                <div className="flex gap-2 mt-7 flex-wrap justify-center md:justify-start">
                    <a href="#" className="btn btn-accent w-fit">
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </a>
                    <a href="#" className="btn btn-l w-fit">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div>
                <img
                    src={img}
                    alt=""
                    className="w-64 h-64 md:w-96 md:h-96 object-cover border-3 border-accent shadow-xl mx-auto md:mx-0"
                    style={{
                        borderRadius: "79% 21% 54% 46% / 37% 49% 51% 63% "
                    }}
                />
            </div>
        </div>
    );
};

export default Accueil;
