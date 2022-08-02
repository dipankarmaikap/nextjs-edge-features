import Link from "next/link";
import Logo from "./icons/Logo";

export default function Header() {
  return (
    <header className="container mx-auto px-4 flex justify-between items-center py-6 z-20 relative">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <button className="text-white lg:hidden flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className="hidden lg:flex space-x-4 items-center text-white text-xl">
          <li>Active Listings</li>
          <li>Sell your Self Storage</li>
          <li>Free Evaluation</li>
          <li>Learn</li>
          <li>
            <button className="bg-theme-yellow text-theme-darkBlue rounded-md py-1.5 px-4 font-medium">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
