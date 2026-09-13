import Logo from "../assets/logo-text.png";
const Nav = () => {
  return (
    <nav className="border border-[#05050521]">
      <div className="container mx-auto flex items-center justify-between py-4 ">
        <img src={Logo} alt="Logo" />
        <ul className="flex space-x-4 text-md ">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className=" flex gap-4">
          <button>Sign In</button>
          <button className="btn btn-secondary rounded-4xl bg-linear-to-r from-orange-500 via-pink-500">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
