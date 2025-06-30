import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

//An array of projects to be displayed in the ProjectSection component:
const projects = [
    {
        id:1,
        title: "Covsent",
        description: `A Robust hate speech detection model leveraging both traditional machine 
                        learning (Logistic Regression, Random Forest, Gradient Boosting) and advanced deep learning 
                        techniques (Neural Networks).`,
        image: "/assets/projects/project1.png", // Updated path
        tags: ["HTML", "CSS", "JavaScript", "BERT", "Scikit-Learn", "Flask", "TensorFlow","Natural Language Processing", "Git", "Docker"],
        demoUrl: "#",
        githubUrl: "https://github.com/komal2203/nlp_project"
    },
    {
        id: 2,
        title: "SmartLog Classifier AI",
        description: `Built a 3-way hybrid log classification system using Regex, BERT, and GenAI (Gemini 2.5 Flash) to process 2,500+ logs from 6 systems. Features a dynamic React.js dashboard for log processing, stats visualization, and categorized output downloads.`,
        image: "/assets/projects/project2.png", // Updated path
        tags: ["Python", "NLP", "FastAPI", "React.js", "Tailwind CSS", "Vite", "BERT", "Gen-AI", "Regex", "Joblib", "Git", "Docker"],
        demoUrl: "https://drive.google.com/file/d/1bb_JI3DcNXefgUKthANVY5fGdQGy3zDH/view?usp=sharing",
        githubUrl: "https://github.com/Shivv3/log-classification-system"
    },
    {
        id: 3,
        title: "JobMatch Pro",
        description: `Built an interactive dashboard for resume analysis, enabling users to upload resumes, view predictions with confidence scores, and track recent predictions. Achieved 90% accuracy using Logistic Regression, Random Forest, and Neural Network models.`,
        image: "/assets/projects/project3.png", // Updated path
        tags: ["Python", "FastAPI", "HTML", "CSS", "JavaScript", "Scikit-learn", "NLP", "TensorFlow", "Regex", "WordCloud", "Docker", "Git"],
        demoUrl: "https://drive.google.com/file/d/1gv13ph3lGNSg6I8k3GayTkGJSaUdKUiS/view?usp=sharing",
        githubUrl: "https://github.com/Shivv3/Resume_Analyzer_Project"
    }
];



//Creating a project section component:
export const ProjectSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="project" className="py-24 px-4 relative" ref={sectionRef}>
            <div className="container mx-auto max-w-5xl">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`ground bg-card rounded-lg overflow-hidden shadow-xs card-hover p-2 opacity-0 ${
                                isVisible ? "animate-fade-in animate-slide-in-left" : ""
                            }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Tags */}
                            <div className="p-6 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                                <div className="flex flex-wrap gap-2 mb-1 justify-center">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Title and Description */}
                            <div
                                className="p-4 border-t border-secondary/10 opacity-0 animate-fade-in"
                                style={{ animationDelay: `${index * 0.4}s` }}
                            >
                                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-1">{project.description}</p>
                            </div>

                            {/* Links */}
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-4 p-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Link */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Shivv3"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};