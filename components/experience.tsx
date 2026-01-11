import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer L1",
      company: "AUM Technical Services",
      period: "Nov 2025 - Present",
      description:
        "Developed and integrated secure backend APIs for enterprise applications, leveraging n8n for workflow automation while handling API configuration, testing, debugging, and deployment-ready integrations.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "WSO2 API Manager", "n8n", "CRM Systems"],
    },
    {
      title: "Backend Developer & CTO",
      company: "Resify India",
      period: "Mar 2025 - Jun 2025 ",
      description:
        "Led the development and scaling of Resify’s core AI-driven research feedback platform, designing a secure Node.js–MongoDB backend, ensuring OWASP-compliant security with Snyk, and driving the team to successfully launch the MVP and onboard early users.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Hugging Face API", "Snyk", "AWS","Razorpay","OAuth2.0"],
    },
    {
      title: "Backend Developer",
      company: "RightsApp",
      period: "Dec 2024 - Feb 2025",
      description:
        "Led backend development for a social media platform by building scalable, modular APIs with Node.js, Express, and MongoDB, deploying services on AWS EC2 with S3 media integration, and coordinating chat system integration using Firebase.",
      technologies: ["Node.js", "JavaScript", "AWS", "Express", "MongoDB", "Firebase", "Twilio" ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Pravinya Infotech",
      period: "Jan 2024 - May 2024",
      description:
        "Led end-to-end development of a dynamic real estate platform, building a responsive React–Tailwind frontend, scalable Node.js–MongoDB backend APIs, and implementing secure authentication using Firebase and JWT.",
      technologies: ["Node.js", "JavaScript", "JWT", "Express", "MongoDB", "Firebase", "TailwindCSS" ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
