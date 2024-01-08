import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import LineGradient from "./components/LineGardient";
import Myskills from "./scenes/Myskills";
import Myprojects from "./scenes/Myprojects"
import Testimonials from "./scenes/Testimonials"
import Contacts from "./scenes/Contacts"
import WorkExperience from "./scenes/WorkExperince";
import Footer from "./scenes/Footer";
function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width :1060px)");
  const [isTopOfPage, setisTopofPage] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopofPage(true);
      if (window.scrollY !== 0) setisTopofPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />

        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Myskills />
        <LineGradient />
        <div className="w-5/6 mx-auto ">
          <WorkExperience />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto ">
          <Myprojects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto ">
          <Testimonials />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto ">
          <Contacts />
        </div>
        <Footer />




      </div>
    </div>
  );
}

export default App;
