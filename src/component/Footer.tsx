import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-5 py-12">
        <div className="grid gap-10 grid-cols-4">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" />
            </div>

            <p className="mt-4 max-w-sm text-xs leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-4 text-xs font-medium text-slate-700">
              <h2>GitHub</h2>
              <h2>Twitter</h2>
              <h2>linedin</h2>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li> Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>About</li>
              <li> Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
