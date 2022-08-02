import Logo from "./icons/Logo";
import { Facebook, Instagram, Linkedin, Twitter } from "./icons/social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container px-4 pb-12 pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="logo">
          <Logo type="footer" />
          <p className="my-4">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </p>
          <p className="mt-8">© StorageConnect 2022, All Rights Reserved</p>
        </div>
        <div className="links">
          <h3 className="text-lg font-bold uppercase">Quick Links</h3>
          <nav>
            <ul className="flex flex-col space-y-3 mt-4">
              <li>Active Listings</li>
              <li>Self your Self Storage</li>
              <li>Free Evaluation</li>
              <li>Learn</li>
            </ul>
          </nav>
        </div>
        <div className="links">
          <h3 className="text-lg font-bold uppercase mb-4">Newsleter</h3>
          <p>Get latest updates right in your inbox</p>
          <form className="mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="border rounded-md p-3 px-4 placeholder:text-gray-300 placeholder:text-sm"
            />
            <button
              type="submit"
              className="font-semibold bg-theme-blue text-white rounded-md px-6 py-3 mt-2"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <div className="links">
          <h3 className="text-lg font-bold uppercase">Let’s get social</h3>
          <div className="social flex space-x-3 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram />
            </a>
          </div>
          <select
            className="border border-theme-blue rounded-md py-1 px-4 mt-7"
            name="language"
            id="language"
          >
            <option value="en">English - En</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
