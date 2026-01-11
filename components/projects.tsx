import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
}: ProjectCardProps) => {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-accent">
                <Image
                    src={image}
                    alt={title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                    {liveUrl && (
                        <Button
                            variant="default"
                            className="rounded-full"
                            asChild
                        >
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="mr-1 h-4 w-4" />
                                Live Demo
                            </a>
                        </Button>
                    )}
                    {githubUrl && (
                        <Button
                            variant="outline"
                            className="rounded-full shadow-none"
                            asChild
                        >
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubLogo className="mr-1 h-4 w-4" />
                                View Code
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Customer Churn Prediction System",
            description:
                "A machine learning–driven churn prediction project featuring a FastAPI backend for batch inference and a Next.js dashboard that visualizes customer-level risk, summary metrics, and probabilistic insights from CSV-based data.",
            image: "/customer-churn.png",
            technologies: [
                "Next.js",
                "TypeScript",
                "FastAPI",
                "Scikit-learn",
                "Python",
                "Pandas",
                "Matplotlib",
            ],
            liveUrl: "https://churn-prediction-frontend-theta.vercel.app/",
            githubUrl:
                "https://github.com/vinodpatil2002/churn-prediction-backend/",
        },
        {
            title: "Reality Endeavors",
            description:
                "A modern MERN-based real estate marketplace featuring secure FirebaseAuth + JWT authentication, Redux Toolkit–powered state management, advanced property search and CRUD listings, successfully validated through real-world deployment with 22+ active users.",
            image: "/reality.png",
            technologies: [
                "React",
                "Node.js",
                "Firebase",
                "JWT",
                "MongoDB",
                "Redux Toolkit",
            ],
            liveUrl: "https://reality-endeavors.onrender.com/",
            githubUrl: "https://github.com/vinodpatil2002/mern-estate",
        },
        {
            title: "RightsApp API",
            description:
                "A backend-focused social media project featuring modular, high-performance RESTful APIs for authentication, posts, and comments, integrated with AWS S3 for media storage and Firebase for real-time messaging.",
            image: "/rightsapp.png",
            technologies: [
                "Node.js",
                "Express",
                "MongoDB",
                "AWS S3",
                "Firebase",
            ],
            liveUrl: "https://github.com/vinodpatil2002/rightsapp-api",
            githubUrl: "https://github.com/vinodpatil2002/rightsapp-api",
        },
        {
            title: "DocHub",
            description:
                "A real-time collaborative document editing platform built with Next.js, TypeScript, and Liveblocks, featuring secure Clerk-based authentication, live presence and comments, full document sharing workflows, and a responsive Tailwind UI validated by early user testing.",
            image: "/dochub.png",
            technologies: [
                "Next.js",
                "TypeScript",
                "Liveblocks",
                "Clerk",
                "TailwindCSS",
            ],
            liveUrl: "https://dochub-bay.vercel.app/",
            githubUrl: "https://github.com/vinodpatil2002/dochub",
        },
    ];

    return (
        <section id="projects" className="relative py-20 px-6">
            <div className="max-w-screen-md mx-auto">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">
                        Projects
                    </Badge>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Featured Work
                    </h2>
                    <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
                        Showcasing some of my best projects and technical
                        achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* More Projects CTA */}
                <div className="mt-12 text-center p-8 rounded-xl border border-dashed border-accent bg-accent/20">
                    <h3 className="text-xl font-semibold mb-2">
                        Want to see more?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        I have many more projects on GitHub. Check out my
                        profile to explore the full collection!
                    </p>
                    <Button className="rounded-full" asChild>
                        <a
                            href="https://github.com/vinodpatil2002"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubLogo className="mr-2 h-4 w-4" />
                            View All Projects on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
