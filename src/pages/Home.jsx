import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*1. Theme Toggle */}
            {/* <ThemeToggle /> : Now it is placed inside the nav bar in the flex container*/}

            {/*2. Background effects */}
            <StarBackground />

            {/*3. Navbar */}
            <NavBar />

            {/*4. Main content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/*5. Footer */}
        </div>
    );
}