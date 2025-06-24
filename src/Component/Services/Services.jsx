import React, { useEffect, useState } from "react";
import servicesData from "../../assets/services.json";

const ServiceCard = ({ plan }) => (
    <div className="border p-5 rounded-lg shadow hover:shadow-lg transition-all duration-300 bg-white">
        <h3 className="text-xl font-bold text-purple-700 mb-1">{plan.tier}</h3>
        {plan.title && <h4 className="text-lg font-semibold mb-1">{plan.title}</h4>}
        <p className="text-gray-700 font-semibold">{plan.price}</p>
        <p className="text-sm text-gray-500 my-2">{plan.description}</p>
        <p className="text-sm font-medium text-green-700">{plan.delivery}</p>
        <p className="text-sm font-medium text-blue-700 mb-2">{plan.revisions}</p>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-3">
            {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))}
        </ul>
        <button className="mt-auto bg-[#9538E2] text-white px-4 py-2 rounded hover:bg-purple-600" href="#contact">
            Contact Me
        </button>
    </div>
);

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredData, setFilteredData] = useState(servicesData);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredData(servicesData);
        } else {
            setFilteredData(
                servicesData.filter((item) => item.category === selectedCategory)
            );
        }
    }, [selectedCategory]);

    const categories = [
        "All",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development"
    ];

    return (
        <section className="py-10 px-5 bg-[#FAF6F0]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">
                    Web Development Services
                </h2>

                <div className="flex justify-center flex-wrap gap-4 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded border text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-[#9538E2] text-white"
                                : "bg-white text-[#9538E2] border-[#9538E2]"
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredData.map((service, idx) => (
                    <div key={idx} className="mb-16">
                        <h3 className="text-2xl font-bold text-[#9538E2] mb-6">
                            {service.category}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {service.plans.map((plan, index) => (
                                <ServiceCard key={index} plan={plan} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
