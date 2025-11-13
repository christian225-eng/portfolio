import { GraduationCap } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex justify-between" >
      <a href="#"
        className="flex items-center font-bold text-2xl hover:opacity-80 transition">
        <GraduationCap className="mr-2 h-8 w-8 text-accent" />
        YVAN<span className="text-accent">DEV</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            A propos
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            experiences
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Projets
          </a>
        </li>
      </ul>

    </div>

  );
};

export default Navbar;
