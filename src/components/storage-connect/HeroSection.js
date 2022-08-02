import Header from "./Header";
import Image from "next/future/image";
import HeroBgImage from "~/images/Squooshed/hero-image.jpg";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Header />
      <div className="max-w-[700px] mx-auto px-4 text-center text-white py-24 sm:py-32 relative z-20">
        <h1 className="text-5xl sm:text-6xl sm:leading-tight font-extrabold">
          Self Storage Business{" "}
          <span className="whitespace-nowrap">Buy. Sell. Learn.</span>
        </h1>
        <p className="font-medium text-lg sm:text-xl mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
          aliquam non tortor blandit lobortis. blandit
        </p>
        <div className="btn-group flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-12">
          <button className="bg-theme-yellow text-theme-darkBlue rounded-md py-3 px-4 font-semibold min-w-[250px]">
            Sell Your Self Storage
          </button>
          <button className="bg-white text-theme-darkBlue rounded-md py-3 px-4 font-semibold min-w-[250px]">
            Active Self Storage Listings
          </button>
        </div>
      </div>
      <div className="absolute opacity-90 inset-0 bg-gradient-to-r from-theme-blue via-theme-blue"></div>
      <div className="absolute inset-0 z-[-1]">
        <Image
          className="w-full h-full object-cover"
          role="presentation"
          src={HeroBgImage}
          alt="Hero background image"
        />
      </div>
    </section>
  );
}
