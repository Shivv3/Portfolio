import { Briefcase, Code, Milestone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
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
        <section id="about" className="py-24 px-4 relative" ref={sectionRef}>
            <div className="container mx-auto max-w-5xl">

                {/* About Me Heading: */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <h2 className="text-2xl font-bold mb-8">Driven by Data, Defined by Design, Blended with Logic</h2>

                {/* About Me Content*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">

                    {/* About me Description: LEFT SECTION: */}
                    <div className={`space-y-6 ${isVisible ? "opacity-100 animate-slide-in-left" : "opacity-0"}`}>
                        <p className="text-muted-foreground">Hii, I'm Shivam Sinha — a <span className="font-semibold">Software Engineering</span> student at DTU <span className="font-semibold">(CGPA: 9.48)</span>, passionate about building scalable and intelligent tech solutions.</p>

                        <p className="text-muted-foreground">With certifications from <span className="font-semibold">Stanford</span> in Machine Learning, I specialize in <span className="font-semibold">ML, NLP, React, Tailwind CSS and problem-solving</span>. I've actively participated and achieved a <span className="font-semibold">RunnerUp</span> position at <span className="font-semibold">JPMorgan Code for Good Hackathon'25 in Mumbai</span>. I've solved <span className="font-semibold">500+ DSA problems</span>  on LeetCode (Top 13%).</p>

                        <p className="text-muted-foreground text-left">Some of my recent work includes:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4 text-start font-semibold">
                            <li>Resume Classifier using NLP</li>
                            <li>Hate Speech Detection with ML, Deep Learning and NLP</li>
                        </ul>

                        <p>Beyond code, my communication game is just as strong — I've reached final rounds at IIT Bombay's British Parliamentary Debate, proving that I can both talk the talk and walk the tech.</p>

                        <p className="text-muted-foreground">Whether it's a model, interface, or algorithm — I build with purpose, precision, and passion.</p>

                        {/* Creating buttons to reach out to my ids and personal ids: */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get in Touch</a>

                            <a href="/FinalYear-Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-white transition-colors duration-600" download>Download CV</a>
                        </div>
                    </div>

                    {/* About Me Image: RIGHT SECTION: */}
                    <div className={`grid grid-cols-1 gap-6 ${isVisible ? "opacity-100 animate-slide-in-right" : "opacity-0"}`}>
                        {/* Containing the skills related to code: */}
                        <div className="gradient-border p-6 card-hover bg-foreground/10">
                            <div className="flex items-start gap-4">

                                {/* Logo of Code */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className = "h-6 w-6 text-primary"/>
                                </div>

                                {/* Content */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend Development</h4>
                                    <p className="text-muted-foreground">
                                        Building beautiful, responsive, and user-centric web applications. Using <span className="font-semibold">React, Tailwind CSS, HTML/CSS, and JavaScript</span>, I craft interfaces that aren't just visually sleek but also blazing fast. From wireframes to deployment.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover bg-foreground/10">
                            <div className="flex items-start gap-4">

                                {/* Logo of User */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Milestone className = "h-6 w-6 text-primary"/>
                                </div>

                                
                                {/* Content */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Machine Learning & NLP</h4>
                                    <p className="text-muted-foreground">
                                        With hands-on experience in <span className="font-semibold">Scikit-learn, TensorFlow, BERT, and NLTK</span>, I build smart systems that interpret and analyze human language. From classifying thousands of resumes with 99% accuracy to detecting hate speech with deep learning — I engineer models that understand and respond to the world.
                                    </p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover bg-foreground/10 ">
                            <div className="flex items-start gap-4">

                                {/* Logo of Briefcase: */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className = "h-6 w-6 text-primary"/>
                                </div>

                                {/* Content: */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Structures & Algorithms</h4>
                                    <p className="text-muted-foreground">
                                        Problem-solving is my superpower. With 500+ problems solved on LeetCode and a solid grip on core concepts like dynamic programming, graphs, and greedy algorithms
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            
        </section>
    )
}