import type { NextPage } from "next";
import Layout from "~/components/Layout";
const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">About Page</h1>
      </div>
    </Layout>
  );
};

export default About;
