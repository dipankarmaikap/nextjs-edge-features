import Image from "next/future/image";
import sellStorageimage from "~/images/sellstorage-image.svg";

export default function CallToActionTwo() {
  return (
    <section className="relative overflow-hidden bg-[#E8EFFF]">
      <div className="container mx-auto z-20 relative pt-20">
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <div className="left w-full md:w-1/2 px-4">
            <h2 className="font-semibold text-4xl text-theme-darkBlue">
              Do you have a Self Storage for Sale?
            </h2>
            <p className="my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc.
            </p>
            <button className="bg-theme-blue text-white rounded-md py-2 px-4 font-medium min-w-[200px]">
              Sell Your Self Storage
            </button>
          </div>
          <div className="right w-full md:w-1/2">
            <Image
              //   className="w-full h-full object-cover object-center"
              role="presentation"
              src={sellStorageimage}
              alt="Hero background image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
