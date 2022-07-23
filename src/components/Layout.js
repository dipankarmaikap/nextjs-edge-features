import Link from "next/link";
import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <header>
        <nav>
          <ul className="flex space-x-4 p-4 text-xl">
            <li>
              <Link href="/">
                <a className="link text-blue-500 hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="link text-blue-500 hover:underline">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </Fragment>
  );
}
