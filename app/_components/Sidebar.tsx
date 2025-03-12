interface SidebarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

export default function Sidebar({ setActiveSection, activeSection }: SidebarProps) {
  const links = ["Home", "About", "Stack", "Work", "Writing"];

  return (
    <nav className="flex flex-col gap-4 w-40"> {/* Fixed width for better layout */}
      {links.map((link) => (
        <button
          key={link}
          className={`relative text-lg font-[JetBrains_Mono] transition-all duration-300 
            ${activeSection === link ? "text-cyan-400" : "text-gray-400"} 
            hover:text-white group`}
          onClick={() => setActiveSection(link)}
          aria-current={activeSection === link ? "page" : undefined} // Accessibility fix
        >
          {link}
          <span
            className="absolute left-0 bottom-0 h-[2px] bg-cyan-400 scale-x-0 transition-transform duration-300 origin-left 
            group-hover:scale-x-100"
          />
        </button>
      ))}
    </nav>
  );
}
