// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { motion } from "framer-motion";
// // import { useNavigate } from "react-router-dom";

// // const Projects = () => {
// //     const [projects, setProjects] = useState([]);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         axios
// //             .get("https://portfolio-server-three-lemon.vercel.app/projects")
// //             .then((response) => setProjects(response.data))
// //             .catch((error) => console.error("Error fetching projects:", error));
// //     }, []);

// //     return (
// //         <div className="container mx-auto p-8" id='projects'>
// //             <h1 className="text-3xl font-bold text-[#00FF88] text-center my-6">My Projects</h1>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
// //                 {projects.map((project) => (
// //                     <motion.div
// //                         key={project._id}
// //                         className="bg-neutral-900 text-white p-6 rounded-lg shadow-lg  hover:-transition-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
// //                         whileHover={{ scale: 1.05 }}

// //                     >
// //                         <img src={project.project_image} alt={project.project_name} className="w-full rounded-lg mb-4" />
// //                         <h3 className="text-xl font-bold">{project.project_name}</h3>
// //                         <button className="mt-4 bg-[#00FF88] text-black px-4 py-2 rounded cursor-pointer" onClick={() => navigate(`/projects/${project._id}`)}>
// //                             Details
// //                         </button>
// //                     </motion.div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Projects;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// import projectsData from "../../assets/projects.json";
// import { useNavigate } from "react-router";

// const Projects = () => {
//     const [projects, setProjects] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         setProjects(projectsData);
//     }, []);

//     return (
//         <div className="container mx-auto p-8" id='projects'>
//             <h1 className="text-3xl font-bold text-[#00FF88] text-center my-6">My Projects</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
//                 {projects.map((project, index) => (
//                     <motion.div
//                         key={index}
//                         className="bg-neutral-900 text-white p-6 rounded-lg shadow-lg  hover:-transition-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
//                         whileHover={{ scale: 1.05 }}
//                     >
//                         <img src={project.project_image} alt={project.project_name} className="w-full rounded-lg mb-4" />
//                         <h3 className="text-xl font-bold">{project.project_name}</h3>
//                         <button className="mt-4 bg-[#00FF88] text-black px-4 py-2 rounded cursor-pointer" onClick={() => navigate(`/projects/${index}`)}>
//                             Details
//                         </button>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Projects;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectsData from "../../assets/projects.json";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="container mx-auto p-8" id="projects">
            <h1 className="text-3xl font-bold text-center my-6">My Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#2E1D10] text-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400 transition-transform"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={project.project_image} alt={project.project_name} className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold">{project.project_name}</h3>
                        <button
                            className="mt-4 bg-[#FFEB3B] text-black font-bold py-2 px-3 rounded cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            Details
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Projects;
