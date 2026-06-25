import { Landing } from "@/sections/Landing";
import { About } from "@/sections/About";
import { Servers } from "@/sections/Servers";
import { Staff } from "@/sections/Staff";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Gallery } from "@/sections/Gallery";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
      <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            {/* This makes the Landing page your home page */}
            <Route path="/" element={<Landing />} />
            
            {/* These create the actual separate pages */}
            <Route path="/about" element={<About />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
    );

}

export default App
