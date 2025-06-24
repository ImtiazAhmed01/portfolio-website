
import React from "react";
import { Pie } from "react-chartjs-2";
import frontend from "../../assets/frontend.json";
import backend from "../../assets/backend.json";
import tools from "../../assets/tools.json";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useInView } from "react-intersection-observer";

// Register Chart.js elements & plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const chartOptions = {
    animation: {
        duration: 1000,
    },
    plugins: {
        datalabels: {
            color: "#fff",
            font: {
                weight: "bold",
                size: 14,
            },
            formatter: (value, context) => {
                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1) + "%";
                return percentage;
            },
        },
        legend: {
            position: "right",
            labels: {
                color: "#000",
                font: {
                    size: 14,
                },
            },
        },
    },
};

const ChartSection = ({ title, data, side = "left" }) => {
    const chartData = {
        labels: data.map((s) => s.name),
        datasets: [
            {
                data: data.map((s) => s.percentage),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0"],
                borderWidth: 1,
            },
        ],
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const handleClick = (webUrl) => {
        console.log(webUrl)
        window.open(webUrl, '_blank');
    }

    return (
        <div className="px-2">
            <h3 className="text-3xl font-bold text-center underline">{title}</h3>
            <div className="flex flex-col md:flex-row items-center justify-between my-6 gap-6">
                {side === "left" && (
                    <div className="w-full md:w-1/2" ref={ref}>
                        {inView && <Pie data={chartData} options={chartOptions} />}
                    </div>
                )}

                <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {data.map((s, i) => (
                        <div key={i} className="bg-[#FFEB3B] text-black p-4 rounded-xl hover:shadow-lg transition">
                            <img src={s.icon} alt={s.name} className="w-10 h-10 mb-2" />
                            <h4 className="font-bold">{s.name}</h4>
                            <p className="text-sm">{s.description}</p>
                            <p className="text-sm font-bold">{s.percentage}%</p>
                            <button className="bg-[#2E1D10] hover:bg-[#2E1D10]/80 text-white font-bold py-2 px-3 rounded mt-2 -ml-2" onClick={() => handleClick(s.website)}> Visit website</button>
                        </div>
                    ))}
                </div>

                {side === "right" && (
                    <div className="w-full md:w-1/2" ref={ref}>
                        {inView && <Pie data={chartData} options={chartOptions} />}
                    </div>
                )}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="bg-yellow-100 p-6 min-h-screen" id="skills">
            <h2 className="text-3xl font-bold text-center mb-8">Skills Overview</h2>
            <ChartSection title="Frontend" data={frontend} side="right" />
            <ChartSection title="Backend" data={backend} side="left" />
            <ChartSection title="Tools" data={tools} side="right" />
        </div>
    );
};

export default Skills;


// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Animation } from "./Animation";
// import frontendData from "../../assets/frontend.json"
// import backendData from "../../assets/backend.json"
// import toolsData from "../../assets/tools.json"

// const Skills = () => {
//     const [frontendSkills, setFrontendSkills] = useState([]);
//     const [backendSkills, setBackendSkills] = useState([]);
//     const [tools, setTools] = useState([]);

//     useEffect(() => {
//         setFrontendSkills(frontendData);
//         setBackendSkills(backendData);
//         setTools(toolsData);
//     }, []);

//     const handleCardClick = (website) => {
//         if (website) {
//             window.open(website, "_blank");
//         }
//     };

//     return (
//         <div className="bg-[#FFEB3B] min-h-screen p-8" id="skills">
//             <h1 className="text-3xl font-bold text-white text-center mb-8">My Skills</h1>
//             <motion.h1
//                 initial="hidden"
//                 variants={Animation("up", 0.2)}
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.7 }}
//                 className="text-3xl font-bold text-black text-center mb-8"
//             >
//                 Frontend
//             </motion.h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {frontendSkills.map((skill, index) => (
//                     <motion.div
//                         key={index}
//                         className="skill-card bg-[#2E1D10] text-white p-4 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
//                         initial="hidden"
//                         variants={Animation("up", 0.2)}
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.7 }}
//                         onClick={() => handleCardClick(skill.website)}
//                     >
//                         <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
//                         <h3 className="text-xl font-bold">{skill.name}</h3>
//                         <p>{skill.description}</p>
//                     </motion.div>
//                 ))}
//             </div>

//             <motion.h1
//                 initial="hidden"
//                 variants={Animation("up", 0.2)}
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.7 }}
//                 className="text-3xl font-bold text-black text-center my-8"
//             >
//                 Backend
//             </motion.h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {backendSkills.map((skill, index) => (
//                     <motion.div
//                         key={index}
//                         className="skill-card bg-[#2E1D10] text-white p-4 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
//                         initial="hidden"
//                         variants={Animation("up", 0.2)}
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.7 }}
//                         onClick={() => handleCardClick(skill.website)}
//                     >
//                         <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
//                         <h3 className="text-xl font-bold">{skill.name}</h3>
//                         <p>{skill.description}</p>
//                     </motion.div>
//                 ))}
//             </div>

//             <motion.h1
//                 initial="hidden"
//                 variants={Animation("up", 0.2)}
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.7 }}
//                 className="text-3xl font-bold text-black text-center my-8"
//             >
//                 Development & Tools
//             </motion.h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {tools.map((tool, index) => (
//                     <motion.div
//                         key={index}
//                         className="skill-card bg-[#2E1D10] text-white p-4 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
//                         initial="hidden"
//                         variants={Animation("up", 0.2)}
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.7 }}
//                         onClick={() => handleCardClick(tool.website)}
//                     >
//                         <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-2" />
//                         <h3 className="text-xl font-bold">{tool.name}</h3>
//                         <p>{tool.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Skills;

// 📁 Components: SkillsClassic.js (current version), SkillsWithProgress.js, SkillsWithTabs.js, SkillsWithPieChart.js

// ✅ SkillsClassic.js — (your original version, preserved)

// ✅ SkillsWithProgress.js
// import React from "react";
// import skills from "../../assets/frontend.json"; // Similar approach for backend/tools

// const SkillBar = ({ name, percentage }) => (
//     <div className="mb-4">
//         <div className="flex justify-between text-sm text-black">
//             <span>{name}</span><span>{percentage}%</span>
//         </div>
//         <div className="w-full bg-gray-300 h-2 rounded-full">
//             <div className="bg-green-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
//         </div>
//     </div>
// );

// const SkillsWithProgress = () => {
//     return (
//         <div className="bg-yellow-100 p-8 min-h-screen">
//             <h2 className="text-3xl font-bold text-center mb-6">Frontend Skills</h2>
//             <div className="max-w-xl mx-auto">
//                 {skills.map((skill, i) => (
//                     <SkillBar key={i} name={skill.name} percentage={skill.percentage} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SkillsWithProgress;


// // ✅ SkillsWithTabs.js
// import React, { useState } from "react";
// import frontend from "../../assets/frontend.json";
// import backend from "../../assets/backend.json";
// import tools from "../../assets/tools.json";

// const categories = {
//     Frontend: frontend,
//     Backend: backend,
//     Tools: tools,
// };

// const SkillsWithTabs = () => {
//     const [active, setActive] = useState("Frontend");

//     return (
//         <div className="bg-yellow-50 min-h-screen p-6">
//             <h1 className="text-3xl font-bold text-center mb-6">My Skills</h1>
//             <div className="flex justify-center space-x-4 mb-8">
//                 {Object.keys(categories).map((cat) => (
//                     <button
//                         key={cat}
//                         className={`px-4 py-2 rounded-full font-semibold ${active === cat ? "bg-black text-white" : "bg-gray-300"
//                             }`}
//                         onClick={() => setActive(cat)}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {categories[active].map((skill, idx) => (
//                     <div key={idx} className="bg-black text-white p-4 rounded-xl">
//                         <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
//                         <h3 className="text-xl font-bold">{skill.name}</h3>
//                         <p className="text-sm">{skill.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SkillsWithTabs;


// ✅ SkillsWithPieChart.js
// import React from "react";
// import { Pie } from "react-chartjs-2";
// import frontend from "../../assets/frontend.json";
// import backend from "../../assets/backend.json";
// import tools from "../../assets/tools.json";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// ChartJS.register(ArcElement, Tooltip, Legend);

// const ChartSection = ({ title, data, side = "left" }) => {
//     const chartData = {
//         labels: data.map((s) => s.name),
//         datasets: [
//             {
//                 data: data.map((s) => s.percentage),
//                 backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0"],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <div className="flex flex-col md:flex-row items-center justify-between my-12 gap-6">
//             {side === "left" && <div className="w-full md:w-1/2"><Pie data={chartData} /></div>}

//             <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {data.map((s, i) => (
//                     <div key={i} className="bg-[#FFEB3B] text-black p-4 rounded-xl">
//                         <img src={s.icon} alt={s.name} className="w-10 h-10 mb-2" />
//                         <h4 className="font-bold">{s.name}</h4>
//                         <p className="text-sm">{s.description}</p>
//                     </div>
//                 ))}
//             </div>

//             {side === "right" && <div className="w-full md:w-1/2"><Pie data={chartData} /></div>}
//         </div>
//     );
// };

// const SkillsWithPieChart = () => {
//     return (
//         <div className="bg-yellow-100 p-6 min-h-screen">
//             <h2 className="text-3xl font-bold text-center mb-8">Skills Overview</h2>
//             <ChartSection title="Frontend" data={frontend} side="right" />
//             <ChartSection title="Backend" data={backend} side="left" />
//             <ChartSection title="Tools" data={tools} side="right" />
//         </div>
//     );
// };

// export default SkillsWithPieChart;

// import React from "react";
// import { Pie } from "react-chartjs-2";
// import frontend from "../../assets/frontend.json";
// import backend from "../../assets/backend.json";
// import tools from "../../assets/tools.json";
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// // Register elements and plugin
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const chartOptions = {
//     plugins: {
//         datalabels: {
//             color: "#fff",
//             font: {
//                 weight: "bold",
//                 size: 14,
//             },
//             formatter: (value, context) => {
//                 const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
//                 const percentage = ((value / total) * 100).toFixed(1) + "%";
//                 return percentage;
//             },
//         },
//         legend: {
//             position: "right",
//             labels: {
//                 color: "#000",
//                 font: {
//                     size: 14,
//                 },
//             },
//         },
//     },
// };

// const ChartSection = ({ title, data, side = "left" }) => {
//     const chartData = {
//         labels: data.map((s) => s.name),
//         datasets: [
//             {
//                 data: data.map((s) => s.percentage),
//                 backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0"],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <div className="flex flex-col md:flex-row items-center justify-between my-12 gap-6">
//             {side === "left" && (
//                 <div className="w-full md:w-1/2">
//                     <Pie data={chartData} options={chartOptions} />
//                 </div>
//             )}

//             <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {data.map((s, i) => (
//                     <div key={i} className="bg-black text-white p-4 rounded-xl">
//                         <img src={s.icon} alt={s.name} className="w-10 h-10 mb-2" />
//                         <h4 className="font-bold">{s.name}</h4>
//                         <p className="text-sm">{s.description}</p>
//                     </div>
//                 ))}
//             </div>

//             {side === "right" && (
//                 <div className="w-full md:w-1/2">
//                     <Pie data={chartData} options={chartOptions} />
//                 </div>
//             )}
//         </div>
//     );
// };

// const SkillsWithPieChart = () => {
//     return (
//         <div className="bg-yellow-100 p-6 min-h-screen">
//             <h2 className="text-3xl font-bold text-center mb-8">Skills Overview</h2>
//             <ChartSection title="Frontend" data={frontend} side="right" />
//             <ChartSection title="Backend" data={backend} side="left" />
//             <ChartSection title="Tools" data={tools} side="right" />
//         </div>
//     );
// };

// export default SkillsWithPieChart;