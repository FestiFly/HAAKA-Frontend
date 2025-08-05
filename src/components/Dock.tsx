import { useNavigate } from "react-router-dom";
import { FloatingDock } from "../components/UI/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconCloudComputing,
  IconStack2,
} from "@tabler/icons-react";
import team from "..//assets/projects/team-svgrepo-com.svg"

export function FloatingDockDemo() {
  const navigate = useNavigate();

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white " />
      ),
      href: "/",
      onClick: () => navigate("/"),
    },
    {
      title: "Services",
      icon: (
        <IconCloudComputing className="h-full w-full text-white" />
      ),
      href: "/services",
      onClick: () => navigate("/services"),
    },
    {
      title: "Projects",
      icon: (
        <IconStack2 className="h-full w-full text-white" />
      ),
      href: "/projects",
      onClick: () => navigate("/projects"),
    },
    {
      title: "Team",
      icon: (
        <img src={team} alt="Team Icon" className="h-full w-full opacity-80" />
      ),
      href: "/team",
      onClick: () => navigate("/team"),
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white" />
      ),
      href: "https://github.com/Festifly", // replace with actual repo/org
      onClick: () => window.open("https://github.com/Festifly", ""),
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
    </div>
  );
}