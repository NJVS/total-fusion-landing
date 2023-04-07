import { useEffect } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Difference from "./components/Sections/Difference";
import Personalised from "./components/Sections/Personalised";
import Treatments from "./components/Sections/Treatments";

function App() {
  // scroll to top
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
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
