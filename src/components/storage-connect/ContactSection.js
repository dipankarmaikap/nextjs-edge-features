import data from "~/lib/storages-db";
import CircleIcon from "./icons/CircleIcon";
import BlogItem from "./BlogItem";
import Image from "next/future/image";
import BgImage from "~/images/Squooshed/reachus-image.jpg";

export default function ContactSection() {
  let listings = data.slice(0, 4);
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-4 z-20 mx-auto relative">
        <div className="max-w-4xl mx-auto py-16 sm:py-20 flex justify-between items-center flex-wrap">
          <div className="text">
            <h2 className="font-bold text-4xl text-theme-darkBlue">
              Any Queries? Reach Out to Us
            </h2>
            <p>Feel free to write to us, we are happy to help you</p>
          </div>
          <button className="font-semibold bg-theme-blue text-white rounded-md px-6 py-3 mt-2 flex items-center space-x-2">
            <span>Write to Us</span>
            <span>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 19.3102L16 10.0001L0 0.689941V7.93114L11.4615 10.0001L0 12.069V19.3102Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1]">
        <Image
          className="w-full h-full object-cover object-center"
          role="presentation"
          src={BgImage}
          alt="Hero background image"
        />
      </div>
    </section>
  );
}
