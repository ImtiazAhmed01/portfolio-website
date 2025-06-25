import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../assets/images/pngtree-man-developer-with-laptop-png-image_11623646.png"
const Banner = () => {
    const handleResumeAction = () => {
        window.open(
            "https://drive.google.com/file/d/1eidWndFBsogT_QG2XkaYBtG6aoK1x0KI/view?usp=drive_link",
            "_blank"
        );


        const downloadLink = document.createElement("a");
        downloadLink.href = "https://drive.google.com/uc?export=download&id=1eidWndFBsogT_QG2XkaYBtG6aoK1x0KI";
        downloadLink.download = "Imtiaz_Ahmed_Resume.pdf";
        downloadLink.click();
    };
    return (
        <div className="px-12 pt-2">
            <section className="flex flex-col md:flex-row items-center justify-between  mt-3 md:px-12 py-12 md:py-20 relative bg-[#2E1D10] gap-10 rounded-xl" id="/">

                <div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={image}
                        alt="Imtiaz Ahmed"
                        className="w-80 h-80 rounded-full shadow-lg"
                    />
                </div>


                <div
                    className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="text-lg text-white">Hello, I'm</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                        Imtiaz Ahmed
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-white font-semibold mt-2">
                        <Typewriter
                            words={["Full Frontend Developer"]}
                            loop={false}
                            cursor
                            cursorStyle="..."
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                    <p className="text-gray-300 mt-4">
                        Passionate about building efficient and scalable web applications.
                    </p>


                    <a
                        onClick={handleResumeAction}
                        className="inline-block mt-6 px-6 py-3 text-white bg-orange-400 rounded transition-all duration-300 hover:bg-[#00CC66]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Download Resume
                    </a>

                    <div className="flex gap-10 mt-5">
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
                <div
                    className="hidden md:flex flex-col items-center gap-6 absolute right-4 top-1/2 transform -translate-y-1/2 lg:mr-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >

                </div>

            </section>

        </div>
    );
};

export default Banner;