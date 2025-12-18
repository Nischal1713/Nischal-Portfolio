import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["html5", "css3", "js", "reactjs", "tailwindcss"]
    const backendSkills = ["python", "node.js", "express.js", "mysql", "mongodb"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="text-center flex-col justify-center items-center py-20">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">{" "} About Me</h2>
                <div className="mx-auto w-[70%] rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-center">
                        I am a highly skilled web developer with strong proficiency in HTML, CSS
                        and JavaScript, complemented by a portfolio project such as the Spotify Clone.
                        Possessing certifications from reputable platforms like NPTEL and Hacker
                        Rank in MySQL, and well‐versed in core Python, dedicated to crafting
                        efficient, user-friendly applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blur-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blur-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[o_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-gray-300">🏫 Education</h3>
                        <div className="prose prose-slate max-w-none">
                            <p>
                                <strong>Bachelor of Engineering in Computer Science</strong>
                                <br />
                                SJB Institute of Technology 2021-2025
                                <br />
                                <strong>CGPA:</strong> 7.78
                            </p>
                            <p>
                                <strong>Pre-University in Science</strong>
                                <br />
                                Narayana PU College 2019-2021
                                <br />
                                <strong>Percentage:</strong> 71.3%
                            </p>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience / 🏆 Training</h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="mb-6">
                                <h4 className="text-lg font-bold">Web Development Intern, WebSmart India (Jan 2025 - May 2025)</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Designed and optimized MySQL database schemas, reducing query execution time by 30% and improving dynamic content delivery speed by 50%.</li>
                                    <li>Collaborated closely with front-end developers to integrate server-side logic, resulting in a 25% increase in user interface responsiveness.</li>
                                    <li>Implemented security protocols, reducing potential vulnerabilities by 90% and enhancing system reliability and user data protection.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold">Pentagon Space (Jul 2025 - present)</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        The training program provides a comprehensive understanding of full-stack web development, empowering me to build scalable, secure, and user-friendly web applications.
                                    </li>
                                    <li>
                                        It covers both front-end and backend technologies, allowing me to contribute to both the client and server sides of web development.
                                    </li>
                                    <li>
                                        The course emphasizes practical learning, enabling me to apply my knowledge and build real-world projects.
                                    </li>
                                    <li>
                                        As a graduate, I believe that training like this will not only enhance my technical skills but also equip me with the confidence to pursue a career in web development.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    );
}