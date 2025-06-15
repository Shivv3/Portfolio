import { ArrowBigDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 pb-20 md:pb-0"
        >
            <div className="container max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center justify-center m-2">
                <div className="w-full md:w-1/4 flex justify-center items-center mb-8 md:mb-0 relative">
                    <div className="relative z-10">
                        <img
                            src="./src/assets/images/profile.png"
                            alt="Shivam Sinha"
                            className="rounded-full w-80 h-80 object-cover shadow-lg scale-90 hover:scale-100 transition-transform duration-300 ease-in-out md:scale-120 md:hover:scale-130"
                        />
                    </div>
                </div>

                {/* Right: Existing Hero Content */}
                <div className="w-full md:w-3/4 flex flex-col items-center">
                    {/* Heading & Description */}
                    <div className="w-full text-center flex flex-col items-center space-y-6">
                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I'm </span>{" "}
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">Shivam</span>{" "}
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Sinha</span>
                        </h1>

                        {/* Description */}
                        <h3 className="text-m md:text-3xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2 font-bold">Turning <span className="text-primary">Unique Ideas</span> into Code</h3>
                        <h3 className="text-m md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 font-bold">AI/ML Enthusiast | 500+ DSA Problems Solved | <span className="text-primary">Frontend Developer</span> | Debator</h3>
                        <p className="text-m md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            A <span className="font-semibold">Software Engineering</span> student at <span className="font-semibold">Delhi Technological University</span> with <span className="font-semibold"> CGPA: 9.48 </span>, blending logic with <span className = "font-semibold">creativity</span> to build real-world technology solutions.
                        </p>
                    </div>
                    {/* Button centered below content */}
                    <div className="pt-6 opacity-0 animate-fade-in-delay-4 w-full flex justify-center mb-6 md:mb-0">
                        <a href="#project" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Down Button */}
            <div className="absolute bottom-2 tranform -translate-x-0.5 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowBigDown className="h-4 w-4 text-primary" />
            </div>
        </section>
    )
}