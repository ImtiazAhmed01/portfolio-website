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
