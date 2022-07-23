import type { NextPage } from "next";
import Image from "next/future/image";
import Layout from "~/components/Layout";
const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <Image
          style={{ objectFit: "cover" }}
          src="https://dipankarmaikap.com/wp-content/uploads/2020/12/IBM-cloud-Thumb.png"
          width={500}
          height={300}
        />
        <Image
          style={{ objectFit: "cover" }}
          src="https://blt.gmweb.pl/wp-content/uploads/Low-res-Digital-Top-250-Graphic.jpg"
          width={500}
          height={300}
        />
      </div>
    </Layout>
  );
};

export default Home;
