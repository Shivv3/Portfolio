import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id = "about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                {/* About Me Heading: */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                {/* About Me Content*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* About me Description: LEFT SECTION: */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer and Tech Creator</h3>

                        <p className="text-muted-foreground">He has also actively participated in national-level hackathons like Smart India Hackathon and secured top ranks in coding competitions.</p>

                        <p className="text-muted-foreground">With certifications from Stanford in machine learning and a consistent focus on real-world problem solving, he aims to build scalable, intelligent systems</p>

                        {/* Creating buttons to reach out to my ids and personal ids: */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get in Touch</a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-white transition-colors duration-600">Download CV</a>
                        </div>
                    </div>

                    {/* About Me Image: RIGHT SECTION: */}
                    <div className="grid grid-cols-1 gap-6">

                        {/* Containing the skills related to code: */}
                        <div className="gradient-border p-6 card-hover bg-foreground/10">
                            <div className="flex items-start gap-4">

                                {/* Logo of Code */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className = "h-6 w-6 text-primary"/>
                                </div>

                                {/* Content */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating Responsive websites and web Applications with modern technologies like React, Node.js, and Express.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover bg-foreground/10">
                            <div className="flex items-start gap-4">

                                {/* Logo of User */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className = "h-6 w-6 text-primary"/>
                                </div>

                                
                                {/* Content */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive and user-friendly interfaces that enhance user experience and engagement.
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
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion, ensuring timely delivery and quality standards.
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