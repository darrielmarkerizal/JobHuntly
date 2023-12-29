import BannerSignUp from "@/components/organisms/BannerSignUp";
import Category from "@/components/organisms/Category";
import Clients from "@/components/organisms/Clients";
import FeaturedJobs from "@/components/organisms/FeaturedJobs";
import Hero from "@/components/organisms/Hero";
import LatestJobs from "@/components/organisms/LatestJobs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-32">
      <Hero />
      <Clients />
      <Category />
      <BannerSignUp />
      <FeaturedJobs />
      <LatestJobs />
    </div>
  );
}
