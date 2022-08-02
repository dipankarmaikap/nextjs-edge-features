import data from "~/lib/storages-db";
import CircleIcon from "./icons/CircleIcon";
import BlogItem from "./BlogItem";
import Image from "next/future/image";
import HeroBgImage from "~/images/Squooshed/hero-image.jpg";

export default function BlogSection() {
  let listings = data.slice(0, 4);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute mt-[-10%] z-1">
        <CircleIcon />
      </div>
      <div className="container mx-auto p-4 py-16 sm:py-20 z-20 relative">
        <h2 className="font-semibold text-4xl text-center text-white max-w-3xl mx-auto">
          Learn Everything About Buying, Selling, and Operating a Self Storage
        </h2>
        <p className="text-center max-w-2xl mx-auto my-6 text-white">
          Learn about literally anything to know about Selling or Buying a Self
          Storage
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {listings.map((listing) => (
            <BlogItem listing={listing} key={listing.id} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="bg-theme-yellow rounded-md p-4 font-semibold text-xl min-w-[300px]">
            Explore the Learning Section
          </button>
        </div>
      </div>
      <div className="absolute opacity-95 inset-0 bg-theme-blue"></div>
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
