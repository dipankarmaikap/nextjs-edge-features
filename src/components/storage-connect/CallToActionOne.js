import Image from "next/future/image";
import SvgBGImage from "~/images/test.svg";
import buystorageImage from "~/images/buystorage-image.svg";

export default function CallToActionOne() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto z-20 relative pt-20">
        <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap items-center">
          <div className="left w-full md:w-1/2">
            <Image
              //   className="w-full h-full object-cover object-center"
              role="presentation"
              src={buystorageImage}
              alt="Hero background image"
            />
          </div>
          <div className="right w-full md:w-1/2 px-4">
            <h2 className="font-semibold text-4xl text-theme-darkBlue">
              Do you want to buy a Self Storage?
            </h2>
            <p className="my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc.
            </p>
            <button className="bg-theme-blue text-white rounded-md py-2 px-4 font-medium min-w-[200px]">
              Buy a Self Storage
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1]">
        <Image
          className="w-full h-full object-cover object-center"
          role="presentation"
          src={SvgBGImage}
          alt="Hero background image"
        />
      </div>
    </section>
  );
}
