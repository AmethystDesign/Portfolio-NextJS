import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/ui/FloatingNavbar";
import Certification from "@/components/Certification";
import WorkExperience from "@/components/WorkExperience";
import Works from "@/components/Works";
import Approach from "@/components/Approach";
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <WorkExperience />
        <Works />
        <Certification />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};
export default Home;
