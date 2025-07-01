import { cn } from "../lib/utils";
import { useState, useEffect, useRef } from "react";

// Creating an array of skills to be displayed in the SkillsSection component: We have an object for each skill:
const skills = [

    //frontend:
    {name: "HTML", level:95, category: "Frontend"},
    {name: "CSS", level:95, category: "Frontend"},
    {name: "JavaScript", level: 90, category: "Frontend"},
    {name: "React", level: 85, category: "Frontend"},
    {name: "Tailwind CSS", level: 80, category: "Frontend"},

    //Machine Learning & AI:
    {name: "Python", level: 90, category: "Machine Learning & AI"},
    {name: "Keras", level: 80, category: "Machine Learning & AI"},
    {name: "Scikit-learn", level: 90, category: "Machine Learning & AI"},
    {name: "FAST APIs", level: 95, category: "Machine Learning & AI"},
    {name: "Natural Language Processing", level: 90, category: "Machine Learning & AI"},
    {name: "BERT", level: 85, category: "Machine Learning & AI"},
    {name: "Generative-AI", level: 70, category: "Machine Learning & AI"},


    // Developer Tools:
    {name: "Git", level: 95, category: "Developer Tools"},
    {name: "GitHub", level: 90, category: "Developer Tools"},   
    {name: "Docker", level: 90, category: "Developer Tools"},
    {name: "VS Code", level: 90, category: "Developer Tools"},
    {name: "PyCharm", level: 70, category: "Developer Tools"},
    {name: "StarUML", level: 70, category: "Developer Tools"},

    // Core CS Concepts:
    {name: "Data Structures & Algorithms", level: 90, category: "Core CS Concepts"},
    {name: "Object-Oriented Programming", level: 85, category: "Core CS Concepts"},
    {name: "Operating Systems", level: 80, category: "Core CS Concepts"},
    {name: "DBMS", level: 85, category: "Core CS Concepts"},
    {name: "SQL", level: 90, category: "Core CS Concepts"},
    {name: "Computer Networks", level: 80, category: "Core CS Concepts"},
    {name: "Compiler Design", level: 75, category: "Core CS Concepts"},

    //DSA:
    {name: "Arrays", level: 90, category: "DSA"},
    {name: "Linked Lists", level: 85, category: "DSA"},
    {name: "Trees", level: 80, category: "DSA"},
    {name: "Graphs", level: 85, category: "DSA"},
    {name: "Stacks", level: 90, category: "DSA"},
    {name: "Queues", level: 85, category: "DSA"},
    {name: "Tries", level: 80, category: "DSA"},
    {name: "Heaps", level: 85, category: "DSA"},
    {name: "Dynamic Programming (DP)", level: 90, category: "DSA"},

    // Libraries & Tools:
    {name: "Scikit-learn", level: 90, category: "Libraries & Tools"},
    {name: "NumPy", level: 85, category: "Libraries & Tools"},
    {name: "Pandas", level: 90, category: "Libraries & Tools"},
    {name: "Matplotlib", level: 80, category: "Libraries & Tools"},
    {name: "Seaborn", level: 85, category: "Libraries & Tools"},
    {name: "TensorFlow", level: 90, category: "Libraries & Tools"},
    {name: "Spacy", level: 80, category: "Libraries & Tools"},
    {name: "NLTK", level: 85, category: "Libraries & Tools"},
]

// Creating a list of categories to filter skills by category:
const categories = ["All", "Frontend", "Machine Learning & AI", "Developer Tools", "Core CS Concepts", "DSA", "Libraries & Tools"];

export const SkillsSection = () => {

    //Creating a state to help us choose the category of skills to display:
    const [activecategory, setActiveCategory] = useState('All');
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

    //Filtering skills based on the active category:
    const filteredSkills = skills.filter(skill  => activecategory === 'All' || skill.category === activecategory);

    return (
    <section 
        id = "skills" 
        className="py-24 px-4 relative bg-secondary/30"
        ref={sectionRef}
        >
            <div className={cn("container mx-auto max-w-full px-8", isVisible ? "opacity-100 animate-slide-in" : "opacity-0")}>

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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

                    {/* Looping through the filtered-skilss arrays: */}
                    {filteredSkills.map((skill, key) => (

                        <div
                            key={key}
                            className={cn(
                                "bg-card p-4 rounded-md shadow-xs card-hover opacity-0",
                                isVisible ? "animate-fade-in" : ""
                            )}
                            style={{ animationDelay: `${key * 0.05}s` }}
                        >

                            {/* A div contain skill name + skill% */}
                            <div className="text-left mb-2">
                                <h3 className="text-sm font-semibold mb-1">{skill.name}</h3>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-primary h-2 rounded-full animate-[grow_1.5s_ease-out]" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <p className="text-xs text-secondary mt-1 text-right">{skill.level}% proficiency</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>

    </section>
    )
}