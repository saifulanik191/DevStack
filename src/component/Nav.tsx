import Logo from "../assets/logo-text.png";
import HamBerger from "../assets/hamburger.png";
const Nav = () => {
  return (
    <nav className="border border-[#05050521]">
      <div className="container mx-auto flex items-center justify-between py-4">
        <img
          className="order-2 h-14 md:order-none md:block md:h-auto"
          src={Logo}
          alt="Logo"
        />

        <ul className="hidden space-x-4 text-md md:flex md:order-none">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="order-3 flex gap-2 md:order-none md:flex md:gap-4">
          <button>Sign In</button>
          <button className="btn btn-secondary rounded-4xl bg-linear-to-r from-orange-500 via-pink-500">
            Sign Up
          </button>
        </div>

        <button className="order-1 text-4xl text-gray-500 md:order-none md:hidden">
          <img src={HamBerger} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
