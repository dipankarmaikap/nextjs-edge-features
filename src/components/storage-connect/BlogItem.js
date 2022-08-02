import Image from "next/future/image";
import ListingImage from "~/images/Squooshed/listing-image.jpg";
import LocationIcon from "./icons/LocationIcon";
import SizeIcon from "./icons/SizeIcon";
import HouseIcon from "./icons/HouseIcon";
export default function BlogItem({ listing }) {
  return (
    <article className="bg-[#F6F8FD] p-3 rounded-md">
      <Image
        className="rounded-lg overflow-hidden object-cover"
        src={ListingImage}
        alt="Listing image"
      />
      <h3 className="font-semibold text-2xl my-3">{listing.name}</h3>
      <ul className="flex space-x-2">
        <li className="flex items-center space-x-2">
          <span>
            <LocationIcon />
          </span>
          <span>5hrs ago</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>
            <HouseIcon />
          </span>
          <span>Buy</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>
            <SizeIcon />
          </span>
          <span>Raza</span>
        </li>
      </ul>
      <div className="flex justify-center my-4">
        <button className="bg-theme-blue text-white rounded-md py-2 px-4 font-medium min-w-[200px]">
          Read More
        </button>
      </div>
    </article>
  );
}
