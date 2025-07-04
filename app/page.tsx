import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, Briefcase, BookOpen, MessageCircle, Mail } from "lucide-react"

const portfolioSections = [
  {
    title: "Projects",
    description: "Explore all my latest work and creative solutions",
    href: "/projects",
    icon: Briefcase,
    color: "border-red-500/20 hover:border-red-500/40",
  },
  {
    title: "My Blogs",
    description: "Where I write about what I feel",
    href: "/case-studies",
    icon: BookOpen,
    color: "border-orange-500/20 hover:border-orange-500/40",
  },
  {
    title: "About Me",
    description: "Get to know the person behind the work",
    href: "/about",
    icon: User,
    color: "border-red-500/20 hover:border-red-500/40",
  },
  {
    title: "Let's Talk",
    description: "Ready to start a conversation?",
    href: "/contact",
    icon: MessageCircle,
    color: "border-orange-500/20 hover:border-orange-500/40",
  },
]

const clients = [""]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-red-500/20 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-red-400 font-mono text-sm">Shivansh.exe</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/projects" className="text-gray-300 hover:text-red-400 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to My <span className="text-red-400">Digital Space</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Explore my work, discover my process, and let's create something amazing together.
              </p>
            </div>

            <div className="grid gap-4">
              {portfolioSections.map((section) => {
                const IconComponent = section.icon
                return (
                  <Card
                    key={section.href}
                    className={`bg-gray-800/50 border-2 ${section.color} transition-all duration-300 hover:bg-gray-800/70 group`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-red-400" />
                          <CardTitle className="text-white group-hover:text-red-400 transition-colors">
                            {section.title}
                          </CardTitle>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-300 mb-4">{section.description}</CardDescription>
                      <Link href={section.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start p-0 h-auto text-red-400 hover:text-red-300 hover:bg-transparent"
                        >
                          Explore →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4"></p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                {clients.map((client, index) => (
                  <span key={index} className="hover:text-red-400 transition-colors cursor-default">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-red-500/20 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Portfolio. Built with passion and code.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/contact" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
