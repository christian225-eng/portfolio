import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <><div className="p-5 px-[5%]">
      <Navbar />
    </div>
    <section className="px-[5%] mt-20">
        <Accueil />
      </section></>
  );
}
