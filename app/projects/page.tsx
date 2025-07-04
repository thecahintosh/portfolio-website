import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjects } from "@/lib/data";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-red-500/20 p-6">
        <div className="container mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-300 mt-2">
            A showcase of my recent work and creative solutions
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-800/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500/40 text-red-400 hover:bg-red-500/10"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500/40 text-red-400 hover:bg-red-500/10"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
