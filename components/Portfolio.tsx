"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
    // Handler functions can be defined here
    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    const projects = [
        {
            name: "DocHub",
            description:
                "Live Collaborative Document Editor with Real-time comment, sharing and editing features using Next.js and Liveblocks.",
            technologies: ["Nextjs", "TailwindCSS", "LiveBlocks", "Clerk"],
            link: "https://dochub-bay.vercel.app/",
            code: "https://github.com/vinodpatil2002/dochub",
        },
        {
            name: "Peekaboo",
            description:
                "Real Time Video Call Application like Google Meet using StremClient.",
            technologies: ["Nextjs", "Stream", "Clerk", "TailwindCSS"],
            link: "https://peekaboo-omega.vercel.app/",
            code: "https://github.com/vinodpatil2002/peekaboo",
        },
        {
            name: "Reality Endeavours",
            description:
                "Real Estate Proprty Listing Website using React,Nodejs and MongoDB.",
            technologies: ["React", "Nodejs", "Mongodb", "Firebase", "Express"],
            link: "https://reality-endeavors.onrender.com/",
            code: "https://github.com/vinodpatil2002/mern-estate",
        },
    ];

    const experiences = [
        {
            company: "Pravinya Infotech.",
            role: "Full Stack Developer Intern",
            duration: "Jan 2024 - May 2024",
            responsibilities: [
                "Developed scalable web applications",
                "Implemented RESTful APIs",
                "Implemented firebase authentication and storage",
                "Collaborated with cross-functional teams",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-8">
                {/* Profile Section */}
                <Card className="bg-gray-900 border-gray-800 shadow-xl">
                    <CardHeader className="flex flex-col items-center space-y-4 pb-0">
                        <Image
                            src="/vinod.jpg"
                            alt="Profile"
                            width={150}
                            height={150}
                            className="rounded-full w-36 h-36 object-cover border-4 border-gray-800"
                            priority
                        />
                        <CardTitle className="text-center text-3xl font-bold text-gray-100">
                            Vinod Patil
                        </CardTitle>
                        <Badge
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 hover:bg-gray-300 hover:text-gray-800"
                        >
                            Software Developer
                        </Badge>
                    </CardHeader>

                    <CardContent className="text-center space-y-6 pt-6">
                        <p className="text-gray-400">
                            Passionate developer creating elegant solutions to
                            complex problems. Specialized in web technologies
                            and innovative software development.
                        </p>

                        {/* Skills Section */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-200">
                                Skills
                            </h2>
                            <div className="flex flex-wrap justify-center gap-2">
                                {[
                                    "React",
                                    "Next.js",
                                    "TypeScript",
                                    "Tailwind",
                                    "Node.js",
                                    "MongoDB",
                                    "Express",
                                ].map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="text-gray-300 border-gray-700 hover:bg-gray-800"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 pt-6">
                            <Button
                                variant="outline"
                                size="icon"
                                className="text-white-300 hover:bg-gray-300 border-gray-700"
                                onClick={() =>
                                    openLink(
                                        "https://github.com/vinodpatil2002"
                                    )
                                }
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="text-gray-300 hover:bg-gray-300 border-gray-700"
                                onClick={() =>
                                    openLink(
                                        "https://linkedin.com/in/vinod-n-patil"
                                    )
                                }
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>LinkedIn</title>
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="text-gray-300 hover:bg-gray-300 border-gray-700"
                                onClick={() =>
                                    openLink("mailto:vinodnspatil@gmail.com")
                                }
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Gmail</title>
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                </svg>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="text-gray-300 hover:bg-gray-300 border-gray-700"
                                onClick={() =>
                                    openLink("https://x.com/vinodcodes")
                                }
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>X</title>
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Experience Section */}
                <Card className="bg-gray-900 border-gray-800 shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-gray-100">
                            Experience
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gray-850 p-4 rounded-lg"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-200">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-400">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-gray-500 text-sm">
                                        {exp.duration}
                                    </span>
                                </div>
                                <ul className="list-disc list-inside text-gray-400 mt-2">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Projects Section */}
                <Card className="bg-gray-900 border-gray-800 shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-gray-100">
                            Projects
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-850 p-4 rounded-lg"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-semibold text-gray-200">
                                        {project.name}
                                    </h3>
                                    <div className="">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white-300 hover:bg-gray-200"
                                            onClick={() =>
                                                openLink(project.code)
                                            }
                                        >
                                            <svg
                                                role="img"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="white"
                                            >
                                                <title>GitHub</title>
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-gray-200 hover:text-gray-500"
                                            onClick={() =>
                                                openLink(project.link)
                                            }
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="text-gray-300 hover:bg-black"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Portfolio;
