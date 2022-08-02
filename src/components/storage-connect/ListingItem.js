import Image from "next/future/image";
import ListingImage from "~/images/Squooshed/listing-image.jpg";
import LocationIcon from "./icons/LocationIcon";
import SizeIcon from "./icons/SizeIcon";
import HouseIcon from "./icons/HouseIcon";
import PeopleIcon from "./icons/PeopleIcon";
export default function ListingItem({ listing }) {
  return (
    <article className="bg-[#F6F8FD] p-3 rounded-md">
      <Image
        className="rounded-lg overflow-hidden object-cover"
        src={ListingImage}
        alt="Listing image"
      />
      <h3 className="font-semibold text-2xl my-3">{listing.name}</h3>
      <ul className="grid grid-cols-2 gap-2">
        <li className="flex items-center space-x-2">
          <span>
            <LocationIcon />
          </span>
          <span>{listing.location}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>
            <HouseIcon />
          </span>
          <span>Total Units: {listing.totalUnits}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>
            <SizeIcon />
          </span>
          <span>Size: {listing.size}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>
            <PeopleIcon />
          </span>
          <span>Occupancy: {listing.occupancy}</span>
        </li>
      </ul>
      <div className="flex justify-center my-4">
        <button className="bg-theme-blue text-white rounded-md py-2 px-4 font-medium min-w-[200px]">
          View More Detail
        </button>
      </div>
    </article>
  );
}
