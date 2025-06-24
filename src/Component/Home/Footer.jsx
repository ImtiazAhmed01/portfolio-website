import React, { useState } from 'react';

const Footer = () => {
    const [showPolicy, setShowPolicy] = useState(false);
    return (
        <footer className="bg-[#0F0F1D] text-white py-10 px-6 mt-10 text-center">

            <div className="mb-6">
                <h1 className="text-3xl font-extrabold">Imtiaz Ahmed</h1>
            </div>


            <nav className="flex justify-center gap-6 mb-6">
                <a className="hover:underline cursor-pointer" href="#aboutme">About Me</a>
                <a className="hover:underline cursor-pointer" href="#contact">Contact</a>
                <button
                    className="hover:underline text-white cursor-pointer"
                    onClick={() => setShowPolicy(true)}
                >
                    Privacy Policy
                </button>
            </nav>


            <div className="flex justify-center gap-6 mb-6">
                <a href="https://www.linkedin.com/in/imtiaz-ahmed-25a357201" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 fill-current hover:text-blue-500" viewBox="0 0 50 50">
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
                    </svg>
                </a>
                <a href="https://github.com/ImtiazAhmed01" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 fill-current hover:text-gray-400" viewBox="0 0 50 50">
                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 fill-current hover:text-blue-600" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
            </div>


            <div className="text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Imtiaz Ahmed. All rights reserved.</p>
            </div>
            {showPolicy && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
                    <div className="bg-white text-black max-w-lg w-full rounded-lg shadow-lg p-6 relative">
                        <button
                            className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
                            onClick={() => setShowPolicy(false)}
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                        <p className="text-sm mb-2">
                            This portfolio website is intended solely for showcasing my personal projects, skills, and achievements.
                        </p>
                        <p className="text-sm mb-2">
                            No personal data is collected or stored. Any information submitted via the contact form is securely transmitted using email and not saved on any server.
                        </p>
                        <p className="text-sm">
                            External links (e.g., GitHub, LinkedIn) are provided for convenience, and I am not responsible for their privacy practices.
                        </p>
                    </div>
                </div>
            )}

        </footer>

    );
};

export default Footer;