import { ArrowBigDown } from "lucide-react"

export const HeroSection = () => {
    return <section
     id = "home" 
     className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">

                {/* Heading of our hero page: */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>{" "}
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Shivam</span>{" "}
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Sinha</span>
                </h1>

                {/* Descrition of our hero page: */}
                <p className="text-m md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">Shivam Sinha is a third-year B.Tech student in Software Engineering at Delhi Technological University (DTU), graduating in July 2026 with a strong academic record (CGPA 9.48).
                   He is passionate about machine learning, data science, and software development, with hands-on experience in C++, Python, and frontend web technologies.
                   Shivam has worked on impactful projects such as credit card fraud detection, Indian Sign Language recognition, and resume classification, Hate Speech Detection using ML/NLP techniques.
                </p>

                {/* Button to view projects */}
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        {/* A button to indicate scrolling down: */}
        <div className="absolute bottom-2 tranform -translate-x-0.5 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowBigDown className="h-4 w-4 text-primary"/>
        </div>
    </section>
}