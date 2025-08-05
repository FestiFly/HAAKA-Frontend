import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganizationIntro from "./pages/OrganizationIntro";
import TeamMembers from "./components/TeamMembers";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import { FloatingDockDemo } from "./components/Dock";
import Services from "./pages/Services"; 
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen relative">
        {/* Main content */}
        <Routes>
          <Route path="/" element={<OrganizationIntro />} />
          <Route path="/team" element={<TeamMembers />} />
          <Route path="/projects" element={<ProjectsShowcase />} />
          <Route path="/project/:title" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>

        {/* Floating Dock at bottom */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingDockDemo />
          </div>
        </div>
        {/* Chatbot component */}
        <div className="fixed bottom-0 right-0 m-4 z-10">
          <Chatbot />
        </div>
      </div>
    </Router>
  );
}

export default App;