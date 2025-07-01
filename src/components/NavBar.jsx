
// Importing the cn function from the utils module to conditionally apply class names.
import { cn } from "../lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

// A list of different items/links to be displayed in the NavBar: A list of objects where each object represents a navigation item with a name and a link.
const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {

    //Creating a state variable to manage the visibility of the navigation bar when scrolling:
    const [isScrolled, setIsScrolled] = useState(false);

    //A state to keep the track of If the menu of menu navbar is opened or not:
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Using useEffect to add an event listener for scroll events to update the isScrolled state:
    useEffect(() => {

        // Function to handle scroll events
        // This function checks the vertical scroll position and updates the isScrolled state accordingly.
        const handleScroll = () => {
            //Set to true if scrolled more than 10 pixels
            setIsScrolled(window.screenY > 10); 
        };

        // Adding the scroll event listener to the window object
        // This will call handleScroll function whenever the user scrolls the page.
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    return (

        // The main navigation bar component:
        // It uses the cn function to conditionally apply classes based on the isScrolled state.
        // The nav bar is fixed at the top of the page and has a transition effect when scrolling.
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
        )}> 


            {/* Container to hold the logo and navigation items */}
            <div className="container flex items-center justify-between">


                {/* Logo of my portfolio:*/}
                <a href = "#home" className="text-xl font-bold text-primary flex items-center">

                    {/* Not glowing text */}
                    <span className="relative z-10">

                        {/* Glowing text inside this span: */}
                        <span className="text-glow text-foreground"> Shivam Sinha</span>{" "}
                        
                        | Portfolio
                    </span>
                </a>


                {/* DESKTOP NAV BAR: HIDDEN FOR SMALL SCREENS*/}
                <div className="hidden md:flex space-x-8">

                    {/* For each item in the navbar: */}
                    {navItems.map((item,key) => (

                        // Create a link for each item:
                        <a key = {key} href = {item.href} className="text-foreground hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}

                    <ThemeToggle/>
                </div>



                {/* MOBILE NAV BAR: ONLY FOR SMALL SCREENS*/}

                {/* Adding a button to open the menu of navigation bar items: */}
                <button
                onClick={() => setIsMenuOpen((prev) => !prev)} 
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size = {24}/> : <Menu size = {24}/>}{" "}
                </button>


                {/* Menu Option in which all the links are present: Only visible then the menu is opened: */}
                <div className = {cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",

                    // If the menu is open, apply these styles:
                    isMenuOpen ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"
                )}>

                    {/* A div containing all the navigation items in the column format when menu option is clicked and opened*/}
                    <div className="flex flex-col space-y-8 text-xl">

                        {/* For each item in the navbar: */}
                        {navItems.map((item,key) => (

                            // Create a link for each item:
                            <a 
                                key = {key} 
                                href = {item.href} 
                                className="text-foreground hover:text-primary transition-colors duration-300"
                                onClick= {() => setIsMenuOpen(false)} // Close the menu when a link is clicked and the you are navigated to the link
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Adding a theme toggle button inside the menu: */}
                        <ThemeToggle/>

                    </div>
                </div>
            </div>
        </nav>
    );
}