import InfoCard from "../Components_mini/InfoCard";
import SocialLinks from "../Components_mini/SocialLinks";
import Projects from "../Components_mini/Projects";
import Skills from "../Components_mini/Skills";
import Tools from "../Components_mini/Tools";
import Achivement from "../Components_mini/Achivement";
import Intrest from "../Components_mini/Intrest";
import Quotes from "../Components_mini/Quotes";
import Contact from "../Components_mini/Contact";
import Cursore from "./Cursore";

const Home = () => {
  return (
    <div className="bg-[#0E0C10] w-full min-h-screen md:p-6 xl:pt-10 2xl:inline-flex noise">
      <div className="max-w-screen-xl flex md:m-auto flex-col gap-6 justify-center items-center ">
        <Cursore />
        <div className="border border-[#242229] p-5 rounded-2xl">
          {/* ✅ Mobile layout (default) */}
          <div className="flex flex-col gap-6 md:hidden w-full">
            <InfoCard />
            <SocialLinks />
            <Projects />
            <Skills />
            <Tools />
            <Achivement />
            <Quotes />
            <Intrest />
            <Contact />
          </div>

          {/* ✅ md & lg layout (2 columns) */}
          <div className="hidden md:flex xl:hidden flex-row md:gap-6 lg:gap-6 w-full ">
            {/* Left Column */}
            <div className="flex flex-col gap-6 w-1/2">
              <InfoCard />
              <SocialLinks />
              <Achivement />
              <Quotes />
              <Intrest />
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-6 w-1/2">
              <Projects />
              <Skills />
              <Tools />
              <Contact />
            </div>
          </div>

          {/* ✅ xl layout (2 rows × 3 columns) */}
          <div className="hidden xl:flex flex-col gap-6 w-full xl:ml-0">
            {/* Row 1 */}
            <div className="flex flex-row gap-6 w-full">
              <div className="flex flex-col gap-6 w-1/3">
                <InfoCard />
                <SocialLinks />
              </div>
              <div className="w-1/3">
                <Projects />
              </div>
              <div className="flex flex-col gap-6 w-1/3">
                <Skills />
                <Tools />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-row gap-6 w-full">
              <div className="w-1/3">
                <Achivement />
              </div>
              <div className="flex flex-col gap-6 w-1/3">
                <Quotes />
                <Intrest />
              </div>
              <div className="w-1/3">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
