import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <li><a href="#" className="hover:text-orange-500">Home</a></li>
                    <li><a href="#" className="hover:text-orange-500">Blog & News</a></li>
                    <li><a href="#" className="hover:text-orange-500">Services</a></li>
                </ul>

                <div className="flex gap-4">
                    <a href="#" className="hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" className="fill-current">
                            <path d="M24 4.557c-...z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" className="fill-current">
                            <path d="M19.615 3.184c-...z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" className="fill-current">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642...z" />
                        </svg>
                    </a>
                </div>
            </div>



            {menuOpen && (
                <ul className="flex flex-col gap-2 mt-4 lg:hidden font-medium">
                    <li><a href="#" className="hover:text-orange-500">Home</a></li>
                    <li><a href="#" className="hover:text-orange-500">Blog & News</a></li>
                    <li><a href="#" className="hover:text-orange-500">Services</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
