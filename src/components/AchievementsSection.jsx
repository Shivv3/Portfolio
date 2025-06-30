import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
    {
        id: 1,
        title: "JPMorgan Code for Good Mumbai",
        name: "Runner-Up Certificate",
        description: "Were among the Top 2 best teams in our problem statement among 30+ national finalist teams, shortlisted from 50,000+ applicants, for developing a collaboration platform to streamline NGO-led teaching in government schools.",
        image: "/src/assets/certificates/certificate1.png",
        link: "https://drive.google.com/file/d/1s2LpDZXGduTe2kZTei1f239abk35dp4m/view?usp=sharing"
    },
    {
        id: 2,
        title: "Mobile App Design in Figma",
        name: "Udemy",
        description: "Designed mobile app interfaces in Figma, from wireframes to interactive prototypes, focusing on user experience.",
        image: "/src/assets/certificates/figma-design.png",
        link: "https://www.udemy.com/certificate/figma-design"
    },
    {
        id: 3,
        title: "Introduction to Figma",
        name: "Simplilearn",
        description: "Completed a beginner-level course on Figma, covering UI design, prototyping, and collaborative workflows.",
        image: "/src/assets/certificates/figma-intro.png",
        link: "https://www.simplilearn.com/certificate/figma-intro"
    },
    {
        id: 4,
        title: "Foundations of Web Development",
        name: "Udemy",
        description: "Learned web development basics using CSS, React, Bootstrap, and JavaScript to build responsive, interactive interfaces.",
        image: "/src/assets/certificates/web-development.png",
        link: "https://www.udemy.com/certificate/web-development"
    },
    {
        id: 5,
        title: "Advanced React",
        name: "Coursera",
        description: "Mastered advanced React concepts, including hooks, context API, and performance optimization.",
        image: "/src/assets/certificates/react-advanced.png",
        link: "https://www.coursera.org/certificate/react-advanced"
    },
    {
        id: 6,
        title: "Machine Learning",
        name: "Stanford University",
        description: "Completed a comprehensive course on machine learning, covering supervised and unsupervised learning techniques.",
        image: "/src/assets/certificates/machine-learning.png",
        link: "https://www.coursera.org/certificate/machine-learning"
    }
];

export const AchievementsSection = () => {
    const [certs, setCerts] = useState(certifications);

    useEffect(() => {
        const interval = setInterval(() => {
            slideRight();
        }, 5000); // Change one certificate every 5 seconds

        return () => clearInterval(interval);
    }, [certs]);

    const slideLeft = () => {
        setCerts((prevCerts) => {
            const lastCert = prevCerts[prevCerts.length - 1];
            return [lastCert, ...prevCerts.slice(0, prevCerts.length - 1)];
        });
    };

    const slideRight = () => {
        setCerts((prevCerts) => {
            const firstCert = prevCerts[0];
            return [...prevCerts.slice(1), firstCert];
        });
    };

    return (
        <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Achievements & Certifications</span>
                </h2>

                <div className="relative overflow-hidden">
                    {/* Left Arrow */}
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary/10 p-3 rounded-full z-10 hover:bg-primary/20"
                        onClick={slideLeft}
                    >
                        <ChevronLeft className="h-6 w-6 text-primary" />
                    </button>

                    {/* Certificates */}
                    <div className="flex transition-transform duration-500 ease-in-out">
                        {certs.map((cert, index) => (
                            <div key={cert.id} className="w-1/3 flex-shrink-0 px-4">
                                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                                    <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                                    <h4 className="text-lg font-medium text-primary mb-4">{cert.title}</h4>
                                    <p className="text-muted-foreground mb-6">{cert.description}</p>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cosmic-button">
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary/10 p-3 rounded-full z-10 hover:bg-primary/20"
                        onClick={slideRight}
                    >
                        <ChevronRight className="h-6 w-6 text-primary" />
                    </button>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {certifications.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === 0 ? "bg-primary" : "bg-muted-foreground"}`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};
