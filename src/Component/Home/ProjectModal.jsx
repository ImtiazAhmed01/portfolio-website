import React from "react";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-[#FFEB3B] text-black rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-xl font-bold text-gray-300 hover:text-white"
                >
                    ✕
                </button>

                <h1 className="text-3xl font-bold mb-4">{project.project_name}</h1>

                <div className="mb-6">
                    <a
                        href={project.details?.live_project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#2E1D10] text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
                    >
                        🔗 Visit Live Project
                    </a>
                </div>

                <img src={project.project_image} alt={project.project_name} className="w-full rounded-lg mb-4" />
                <p className="text-lg mb-4">{project.details?.brief_description}</p>

                <h3 className="text-xl font-semibold mt-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {(project.details?.main_technology_stack || []).map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-semibold mt-6">Challenges Faced</h3>
                <p className="ml-6">{project.details?.challenges_faced}</p>

                <h3 className="text-xl font-semibold mt-6">Potential Improvements</h3>
                <p className="ml-6">{project.details?.potential_improvements}</p>

                <div className="mt-6">
                    <a
                        href={project.details?.github_repository_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2E1D10] font-extrabold underline"
                    >
                        GitHub Repo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
