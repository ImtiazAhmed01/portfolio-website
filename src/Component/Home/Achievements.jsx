import React, { useState, useEffect } from "react";
import achievementsData from "../../assets/achievements.json";

const Achievements = () => {
    const [selectedType, setSelectedType] = useState("all");
    const [filteredAchievements, setFilteredAchievements] = useState([]);

    useEffect(() => {
        if (selectedType === "all") {
            setFilteredAchievements(achievementsData);
        } else {
            setFilteredAchievements(achievementsData.filter(item => item.type === selectedType));
        }
    }, [selectedType]);

    return (
        <div className=" min-h-screen text-white py-12 px-6" id="achievements">
            <h1 className="text-4xl font-bold text-center text-black mb-8">My Achievements</h1>


            <div className="flex justify-center gap-4 mb-10">
                {["all", "certificate", "hackathon"].map((type) => (
                    <button
                        key={type}
                        className={`px-5 py-2 rounded-full font-semibold transition-all ${selectedType === type
                            ? "bg-yellow-400 text-[#2E1D10]"
                            : "bg-[#2E1D10] hover:bg-yellow-400 hover:text-[#2E1D10]"
                            }`}
                        onClick={() => setSelectedType(type)}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAchievements.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#2E1D10]/80 p-5 rounded-xl shadow-xl hover:shadow-yellow-400 transition-transform hover:scale-105"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                        <p className="text-sm text-gray-300 mb-2">{item.type === "certificate" ? item.issuer : item.organization}</p>
                        <p className="text-sm mb-2">{new Date(item.date).toDateString()}</p>

                        {item.type === "hackathon" && (
                            <>
                                <p className="text-sm font-semibold">Role: {item.role}</p>
                                <p className="text-sm font-semibold text-yellow-400">🏆 {item.result}</p>
                            </>
                        )}

                        {/* Action Button */}
                        <a
                            href={item.type === "certificate" ? item.certificate_url : item.project_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-white transition"
                        >
                            {item.type === "certificate" ? "View Certificate" : "View Project"}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
