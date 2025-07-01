import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="relative bg-card border-t border-border mt-12 pt-8 pb-8 flex flex-col items-center justify-center">
            {/* Gradient divider */}
            <div className="w-full h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 mb-8 rounded-full" />

            {/* Centered Arrow Button */}
            <a
                href="#home"
                className="flex items-center justify-center mb-6"
                aria-label="Back to Top"
            >
                <span className="inline-flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/40 transition-colors shadow-lg p-4">
                    <ArrowUp size={36} className="text-primary drop-shadow-lg" />
                </span>
            </a>

            {/* Footer Text */}
            <p className="text-lg font-semibold text-primary drop-shadow-sm tracking-wide text-center">
                <span className="text-2xl">✨</span>
                <span className="mx-2 text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                    &copy; {new Date().getFullYear()} Shivam Sinha
                </span>
                <span className="text-2xl">✨</span>
                <br />
                <span className="text-muted-foreground text-base font-normal">
                    All Rights Reserved. | Crafted with{" "}
                    <span className="text-pink-500">♥</span> &amp; Code
                </span>
            </p>
        </footer>
    )
}