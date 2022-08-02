import data from "~/lib/storages-db";
import CircleIcon from "./icons/CircleIcon";
import ListingItem from "./ListingItem";
export default function FeaturedListingSection() {
  let listings = data.slice(0, 3);
  // console.log(listings);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute mt-[-10%] z-1">
        <CircleIcon />
      </div>
      <div className="container mx-auto p-4 py-16 sm:py-20">
        <h2 className="font-semibold text-4xl text-center text-theme-darkBlue">
          Featured Self Storages
        </h2>
        <p className="text-center max-w-2xl mx-auto my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {listings.map((listing) => (
            <ListingItem listing={listing} key={listing.id} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <ul className="flex space-x-2">
            <li className="w-6 h-6 border rounded-full" />
            <li className="w-6 h-6 border rounded-full bg-theme-blue" />
            <li className="w-6 h-6 border rounded-full" />
            <li className="w-6 h-6 border rounded-full" />
          </ul>
        </div>
      </div>
    </section>
  );
}
