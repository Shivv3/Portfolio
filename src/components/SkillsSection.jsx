import {cn} from "../lib/utils";
import { useState } from "react";


// Creating an array of skills to be displayed in the SkillsSection component: We have an object for each skill:
const skills = [

    //frontend:
    {name: "HTML/CSS", level:95, category: "frontend"},
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 85, category: "frontend"},
    {name: "Tailwind CSS", level: 80, category: "frontend"},
    {name: "Next.js", level: 75, category: "frontend"},
    {name: "TypeScript", level: 70, category: "frontend"},

    //backend:
    {name: "Node.js", level: 80, category: "backend"},
    {name: "Express", level: 75, category: "backend"},
    {name: "MongoDB", level: 70, category: "backend"},
    {name: "PostgreSQL", level: 65, category: "backend"},
    {name: "GraphQL", level: 60, category: "backend"},
    {name: "REST APIs", level: 70, category: "backend"},

    //tools:
    {name: "Git", level: 85, category: "tools"},
    {name: "Docker", level: 70, category: "tools"},
    {name: "Webpack", level: 65, category: "tools"},
    {name: "Babel", level: 60, category: "tools"},
    {name: "CI/CD", level: 55, category: "tools"},
    {name: "VS Code", level: 90, category: "tools"},
    {name: "Postman", level: 80, category: "tools"},

    //design:
    {name: "Figma", level: 80, category: "design"},
    {name: "Adobe XD", level: 75, category: "design"},
    {name: "Sketch", level: 70, category: "design"},
]

//Creating a list of categories to filter skills by category:
const categories = ["all", "frontend", "backend", "tools", "design"];

export const SkillsSection = () => {

    //Creating a state to help us choose the category of skills to display:
    const [activecategory, setActiveCategory] = useState('all');

    //Filtering skills based on the active category:
    const filteredSkills = skills.filter(skill  => activecategory === 'all' || skill.category === activecategory);

    return (
    <section 
        id = "skills" 
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">

                {/* Heading: */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span></h2>


                {/* Category Filter section: */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {

                        // Looping through the categories array to create buttons for each category:
                        // Using cn function to conditionally apply classes based on the active category:
                        categories.map((category, key) => (

                            // A button for each category to filter skills:
                            <button
                                key={key}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activecategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                                )}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>


                {/* List of skills displayed: */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Looping through the filtered-skilss arrays: */}
                    {filteredSkills.map((skill, key) => (

                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                            {/* A div contain skill name + skill% */}
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-primary h-2.5 rounded-full animate-[grow_1.5s_ease-out]" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <p className="text-sm text-secondary mt-1 text-right">{skill.level}% proficiency</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>

    </section>
    )
}