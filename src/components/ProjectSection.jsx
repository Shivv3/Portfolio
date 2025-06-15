 
import {ArrowRight, ExternalLink,Github} from "lucide-react"

//An array of projects to be displayed in the ProjectSection component:
const projects = [
    {
        id:1,
        title: "Project One",
        description: "This is the first project.",
        image: "/projects/project1.jpg",
        tags: ["HTML", "CSS", "JavaScript"], 
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id:2,
        title: "Project Two",
        description: "This is the second project.",
        image: "/projects/project2.jpg",
        tags: ["React", "Node.js", "Express"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id:3,
        title: "Project Three",
        description: "This is the third project.",
        image: "/projects/project3.jpg",
        tags: ["Python", "Django", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#"
    }
];



//Creating a project section component:
export const ProjectSection = () => {
    return (
        <section id = "project" className="py-24 px-4 relative">

            {/* Div containing the heading: FEATURED PROJECTS */}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance and user experience.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Looping over the projects: */}
                    {projects.map((project) => (

                        // Creating a card for each project:
                        <div 
                            key = {project.id} 
                            className="ground bg-card rounded-lg overflow-hidden shadow-xs card-hover p-2"
                        >
                            {/* Image of thr card: */}
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></img>
                            </div>

                            {/* Tags of the card: */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-1 justify-center"> 

                                    {/* Looping over the tags: */}
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            {/* Title and description of the project: */}
                            <div className="p-4 border-t border-secondary/10">
                                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-1">{project.description}</p>
                            </div>


                            {/* Links to the project: */}
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-4 p-3">

                                    {/* Demo Link */}
                                    <a 
                                        href={project.demoUrl} 
                                        target = "_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        {" "}<ExternalLink size = {20} />
                                    </a>

                                    {/* Github Link: */}
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        {" "}<Github  size = {20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Link button to our github account: */}
                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/Shivv3" 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                    >
                        Check My Github <ArrowRight size = {16}/>
                    </a>
                </div>
            </div>

        </section>
    )
};