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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left text-xs font-semibold">

                    {/* About me Description: LEFT SECTION: */}
                    <div className={`space-y-3 ${isVisible ? "opacity-100 animate-slide-in-left" : "opacity-0"}`}>
                        <p className="text-muted-foreground">Hey there! I’m Shivam Sinha 👋 — a curious coder, machine learner, and design thinker from DTU (🧑‍🎓 CGPA: 9.48).</p>

                        <p className="text-muted-foreground">I turn ideas into impact using a mix of 🧠 logic, 🤖 machine learning, 🎨 frontend flair, and a ton of ☕ coffee! I’ve solved 900+ DSA puzzles 🧩, trained models to read resumes 📄, detect hate speech 💬, and even classify logs using BERT + GenAI 🔍⚡.</p>

                        <p className="text-muted-foreground text-left">Currently interning at Bira91 🍺, I’m structuring chaotic supply chain data with SAP and making it ready for dashboards 📊.</p>
                        <p className="text-muted-foreground text-left">🛠️ My stack?</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4 text-start font-semibold">
                            <li>Frontend: React ⚛️ + Tailwind 💅</li>
                            <li>Backend: Python 🐍 + FastAPI 🚀</li>
                            <li>ML/AI: Scikit-learn 📘, TensorFlow 🔢, BERT 🧠, GenAI 🔮</li>
                        </ul>
                        <p className="text-muted-foreground text-left">🏆 Highlights:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4 text-start font-semibold">
                            <li>🥈 Runner-Up @ JPMorgan Code for Good Mumbai (Top 2 out of 30+ finalists!)</li>
                            <li>🎙️ Quarterfinalist & Adjudicator @ IIT Bombay’s British Parliamentary Debate</li>
                            <li>🚀 Built & Deployed SmartLog AI — a GenAI log classifier with 50+ unsupervised clusters</li>
                            <li>🧠 Cracked 900+ DSA problems across LeetCode, Codeforces, GFG, Code360</li>
                        </ul>

                        <p>Off the clock? I love decoding debates 🎤 as much as debugging code 🐞. Let’s just say — if it’s complex, meaningful, or fun, I’m all in! 💪🎯</p>

                        {/* Creating buttons to reach out to my ids and personal ids: */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get in Touch</a>

                            <a href="/public/2K25_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-white transition-colors duration-600" download>Download CV</a>
                        </div>
                    </div>

                    {/* About Me Image: RIGHT SECTION: */}
                    <div className={`grid grid-cols-1 gap-6 min-w-[500px] text-xs ${isVisible ? "opacity-100 animate-slide-in-right" : "opacity-0"}`}>
                        {/* Containing the skills related to code: */}
                        <div className="gradient-border p-6 card-hover bg-foreground/10">
                            <div className="flex items-start gap-4">

                                {/* Logo of Code */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className = "h-6 w-6 text-primary"/>
                                </div>

                                {/* Content */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">🖥️ Frontend Magic ✨</h4>
                                    <h4 className="font-semibold text-base mb-1">Bringing ideas to life, one pixel at a time</h4>
                                    <p className="text-muted-foreground">
                                       I craft responsive & smooth UIs using React ⚛️, Tailwind CSS 💅, and JS. From interactive dashboards to sleek components, I love making things that feel as good as they look! 🎨📱
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
                                    <h4 className="font-semibold text-lg mb-2">🤖 Machine Learning & GenAI 🔮</h4>
                                    <h4 className="font-semibold text-base mb-1">Training models to do human things</h4>
                                    <p className="text-muted-foreground">
                                        Whether it’s BERT reading logs 📄, TF-IDF matching resumes 🧾, or GenAI explaining errors 🤯 — I build intelligent apps with real-world impact. Powered by TensorFlow 🔢, Sklearn 📘, and a lot of data! 📊
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
                                    <h4 className="font-semibold text-lg mb-2">🧠 DSA + Problem Solving ⚔️</h4>
                                    <h4 className="font-semibold text-base mb-1">Because clean code starts with smart thinking</h4>
                                    <p className="text-muted-foreground">
                                        I’ve solved over 900+ problems on LeetCode, GFG & Codeforces — from DP 🧩 to Graphs 🌐. It’s like brain yoga 🧘‍♂️ but with bugs and breakpoints 😅.
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