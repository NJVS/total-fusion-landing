import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Difference from "./components/Sections/Difference";
import Personalised from "./components/Sections/Personalised";
import Treatments from "./components/Sections/Treatments";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // scroll to top
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0)
  }, [])
  

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Treatments />
        <Personalised />
        <Difference />
      </main>
      <Footer />
    </>
  );
}

export default App;
