import type { NextPage } from "next";
import { Fragment } from "react";
import HeroSection from "~/components/storage-connect/HeroSection";
import FeaturedListingSection from "~/components/storage-connect/FeaturedListingSection";
import ActiveListingSection from "~/components/storage-connect/ActiveListingSection";
import Footer from "~/components/storage-connect/Footer";
import BlogSection from "~/components/storage-connect/BlogSection";
import ContactSection from "~/components/storage-connect/ContactSection";
import CallToActionOne from "~/components/storage-connect/CallToActionOne";
import CallToActionTwo from "~/components/storage-connect/CallToActionTwo";
const Home: NextPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <FeaturedListingSection />
      <ActiveListingSection />
      <CallToActionTwo />
      <CallToActionOne />
      <BlogSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
