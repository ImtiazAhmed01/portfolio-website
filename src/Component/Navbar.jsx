import React, { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("");

    useEffect(() => {
        setActivePath(window.location.pathname);
    }, []);

    const isActive = (path) =>
        activePath === path ? "border-b-2 border-yellow-400 text-orange-600" : "";

    return (
        <nav className="bg-[#FAF6F0] shadow-sm px-6 lg:px-12 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <span className="text-xl font-semibold">Imtiaz Ahmed</span>
                </div>

                <ul className="hidden lg:flex gap-6 font-medium">
                    <li>
                        <a href="/" className={`hover:text-orange-500 ${isActive("/")}`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/blogs" className={`hover:text-orange-500 ${isActive("/blogs")}`}>
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="/services" className={`hover:text-orange-500 ${isActive("/services")}`}>
                            Services
                        </a>
                    </li>
                </ul>

                <div className="flex gap-4">
                    <a href="https://github.com/ImtiazAhmed01" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-orange-400 text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                    </a>
                    <a href="https://www.linkedin.com/in/imtiaz-ahmed-25a357201" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-orange-400 text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                    </a>
                    <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-orange-400 text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                    </a>
                </div>
            </div>

            {menuOpen && (
                <ul className="flex flex-col gap-2 mt-4 lg:hidden font-medium">
                    <li>
                        <a href="/" className={`hover:text-orange-500 ${isActive("/")}`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/blogs" className={`hover:text-orange-500 ${isActive("/blogs")}`}>
                            Blog & News
                        </a>
                    </li>
                    <li>
                        <a href="/services" className={`hover:text-orange-500 ${isActive("/services")}`}>
                            Services
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
