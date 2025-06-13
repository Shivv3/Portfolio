import { Sun, Moon } from "lucide-react";
import { useState } from "react";

// @ is the alias for the src directory in vite.config.js
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {

    // Creating a state to keep the track if we are in dark mode or light mode:
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Using useEffect to check the local storage for the theme preference when the component renders:
    useState(() => {
        // Getting the theme from local storage:
        const storedTheme = localStorage.getItem("theme");

        // If the theme is dark, set the state to true and add the dark class to the html
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }

        // If the theme is light, set the state to false and remove the dark class from the html
        else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    //A function to toggle the theme:
    const toggleTheme = () => {
        
        //If the dark mode is enabled:
        if (isDarkMode) {

             //removing the dark class from the html element:
            document.documentElement.classList.remove("dark");

            //Adding the updated state into local storage in order to persist the theme and ensure it remains consistent across page reloads:
            localStorage.setItem("theme", "light");
            
            //Setting the state to false:
            setIsDarkMode(false);
        }

        //If the dark mode is not enabled:
        else{

            //adding the dark class to the html element:
            document.documentElement.classList.add("dark");

            //Adding the updated state into local storage in order to persist the theme and ensure it remains consistent across page reloads:
            localStorage.setItem("theme", "dark");

            //Setting the state to true:
            setIsDarkMode(true);
        }
    };

    // Returning a button that toggles the theme:
    return (
    <button 
        onClick={toggleTheme} 
        className={cn(
            "top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"                                       
        )}
    > 
        {isDarkMode? <Sun className="h-6 w-6 text-yellow-300" />:<Moon className="h-6 w-6 text-blue-900" />}
    </button>)
}