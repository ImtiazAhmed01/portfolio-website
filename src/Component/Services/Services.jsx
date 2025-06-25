import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import servicesData from "../../assets/services.json";


const ServiceCard = ({ plan, openModal }) => (
    <div className="border border-yellow-400 bg-orange-400/40 p-5 rounded-lg shadow hover:shadow-lg hover:shadow-orange-400 transition-all duration-300 flex flex-col">

        {plan.image && (
            <img
                src={plan.image}
                alt={plan.title || plan.tier}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
        )}

        <h3 className="text-xl font-bold mb-1">{plan.tier}</h3>
        {plan.title && <h4 className="text-lg font-semibold mb-1">{plan.title}</h4>}
        <p className="font-semibold">{plan.price}</p>
        <p className="text-sm my-2">{plan.description}</p>
        <p className="text-sm font-medium">{plan.delivery}</p>
        <p className="text-sm font-medium mb-2">{plan.revisions}</p>

        <ul className="list-disc list-inside text-sm mb-3">
            {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))}
        </ul>

        <button
            onClick={openModal}
            className="mt-auto bg-[#2E1D10] text-white px-4 py-2 rounded hover:bg-[#2E1D10]/80"
        >
            Contact Me
        </button>
    </div>
);


const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredData, setFilteredData] = useState(servicesData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const form = useRef();

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredData(servicesData);
        } else {
            setFilteredData(
                servicesData.filter((item) => item.category === selectedCategory)
            );
        }
    }, [selectedCategory]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i16di8x', 'template_rc0ke4g', form.current, {
                publicKey: 'HKrsrYC-31ttxYPQL',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const categories = [
        "All",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development"
    ];

    return (
        <section className="py-10 px-5 bg-[#FAF6F0] relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">
                    Web Development Services
                </h2>

                <div className="flex justify-center flex-wrap gap-4 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-[#2E1D10] text-white"
                                : "bg-white text-[#2E1D10] border-yellow-400"
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredData.map((service, idx) => (
                    <div key={idx} className="mb-16">
                        <h3 className="text-2xl font-bold text-[#2E1D10] mb-6">
                            {service.category}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {service.plans.map((plan, index) => (
                                <ServiceCard
                                    key={index}
                                    plan={plan}
                                    openModal={() => setIsModalOpen(true)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-[95%] max-w-4xl rounded-lg shadow-lg relative p-6 overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={() => {
                                setIsModalOpen(false);
                                setSent(false);
                            }}
                            className="absolute top-2 right-4 text-2xl text-gray-700 hover:text-red-500"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center">Let's Connect</h2>

                        {/* Form Section */}
                        <form ref={form} onSubmit={sendEmail} className="bg-[#2E1D10] text-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full p-2 rounded-lg bg-gray-900 text-gray-100 focus:outline-none" placeholder="John Doe" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full p-2 rounded-lg bg-gray-900 text-gray-100 focus:outline-none" placeholder="email@example.com" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required className="w-full p-2 rounded-lg bg-gray-900 text-gray-100 focus:outline-none" placeholder="Write your message..." rows="4"></textarea>
                            </div>
                            <button type="submit" className="px-6 py-2 bg-yellow-400 hover:bg-yellow-600 text-black font-semibold rounded-lg">Submit</button>
                            {sent && <p className="text-green-500 mt-2">Your message has been sent.</p>}
                        </form>

                        {/* Divider */}
                        <hr className="my-6 border-gray-300" />

                        {/* Contact + Social Section */}
                        <div className="grid md:grid-cols-2 gap-8 text-[#2E1D10]">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                                <p className="flex justify-center md:justify-start items-center mb-2">
                                    <span className="mr-2"><img width="24" height="24" src="https://img.icons8.com/emoji/48/mobile-phone.png" alt="mobile-phone" /></span> +8801872062931
                                </p>
                                <p className="flex justify-center md:justify-start items-center mb-2">
                                    <span className="mr-2"><img width="24" height="24" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" /></span>
                                    +8801872062931
                                </p>
                                <p className="flex justify-center md:justify-start items-center mb-2">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#D44638" d="M44 10.5v27c0 1.8-1.5 3.3-3.3 3.3H7.3C5.5 40.8 4 39.3 4 37.5v-27C4 8.7 5.5 7.2 7.3 7.2h33.3c1.8 0 3.4 1.5 3.4 3.3z" /><path fill="#fff" d="M24 27.2L4.5 12.8 4 12l20 15.6L44 12v.8L24 27.2z" /></svg>
                                    </span> imtiazahm21@gmail.com
                                </p>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4">Social</h3>
                                <div className="flex justify-center md:justify-start gap-6">
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
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Services;
