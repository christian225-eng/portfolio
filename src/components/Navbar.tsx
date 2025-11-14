import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <a
        href="#"
        className="flex items-center font-bold text-2xl hover:opacity-80 transition"
      >
        <GraduationCap className="mr-2 h-8 w-8 text-accent" />
        YVAN<span className="text-accent">DEV</span>
      </a>

      {/* MENU DESKTOP */}
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
            Experiences
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Projets
          </a>
        </li>
      </ul>

      {/* BTN HAMBURGER MOBILE */}
      <button
        className="md:hidden btn btn-ghost"
        onClick={() => setOpen(!open)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* MENU MOBILE (DROPDOWN) */}
      {open && (
        <div className="absolute top-16 right-4 bg-base-200 rounded-xl shadow-lg p-4 flex flex-col space-y-2 md:hidden">
          <a href="#" className="btn btn-sm btn-ghost">
            Accueil
          </a>
          <a href="#" className="btn btn-sm btn-ghost">
            A propos
          </a>
          <a href="#" className="btn btn-sm btn-ghost">
            Experiences
          </a>
          <a href="#" className="btn btn-sm btn-ghost">
            Projets
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
