"use client";
import { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Content from "./_components/MainContent";

export default function Home() {
  const [section, setSection] = useState("Home");

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white p-10">
      <div className="flex gap-20 max-w-4xl"> {/* Added max-width to container */}
        {/* Sidebar */}
        <div className="flex-shrink-0"> {/* Prevents sidebar from shrinking */}
          <Sidebar setActiveSection={setSection} activeSection={section} />
        </div>

        {/* Main Content */}
        <div className="flex-shrink-0"> {/* Prevents content from shrinking */}
          <Content section={section} />
        </div>
      </div>
    </div>
  );
}