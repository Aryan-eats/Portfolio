import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Clients from "@/components/Clients";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaH } from "react-icons/fa6";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100" >
      <div className="max-w-7xl w-full">
        < FloatingNav navItems={navItems} />
         <Hero />
         <Grid /> 
         <RecentProject />
          <Clients /> 
         <Approach />
         <Footer />
         <ScrollToTop />
         
      </div>
    </main>
  );
}
