import type { NextPage } from "next";
import Image from "next/image";
import ImageNew from "next/future/image";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-4xl font-bold">Hello NextJS</h1>
      <Image
        src="https://dipankarmaikap.com/wp-content/uploads/2020/12/IBM-cloud-Thumb.png"
        width={500}
        height={300}
      />
      <ImageNew
        style={{ objectFit: "cover" }}
        src="https://dipankarmaikap.com/wp-content/uploads/2020/12/IBM-cloud-Thumb.png"
        width={500}
        height={300}
      />
      <Image
        src="https://blt.gmweb.pl/wp-content/uploads/Low-res-Digital-Top-250-Graphic.jpg"
        width={500}
        height={300}
      />
      <ImageNew
        style={{ objectFit: "cover" }}
        src="https://blt.gmweb.pl/wp-content/uploads/Low-res-Digital-Top-250-Graphic.jpg"
        width={500}
        height={300}
      />
    </div>
  );
};

export default Home;
