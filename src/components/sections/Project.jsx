import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Spotify Clone",
            description: "Developed a fully responsive Spotify-style music player using HTML5, CSS3, and JavaScript, featuring seamless playback controls and dynamic playlist management. Implemented interactive JavaScript functionality to enable smooth transitions, real-time updates, and enhanced user experience. Designed mobile-first, accessible UI layouts using modern CSS techniques, improving cross-device usability and engagement. Optimized front-end performance to ensure fast load times.",
            technologies: ["HTML5", "CSS3", "JS"],
            link: "https://github.com/Nischal1713/spotify-clone",
        },
        {
            title: "Project 2",
            description: "Project 2 description",
            technologies: ["node.js", "express.js", "mongodb"],
            link: "#",
        },
        {
            title: "Project 3",
            description: "Project 3 description",
            technologies: ["python", "django", "mysql"],
            link: "#",
        },
    ];

    return (
        <section id='projects' className='min-h-screen flex items-center py-20'>
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-5xl text-center md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                        {" "} Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl shadow-lg border-white/10 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                            >
                                <h3 className="text-xl text-gray-400 font-bold mb-4">
                                    {project.title}
                                </h3>
                                <p>{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blur-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        View project ➡️
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};