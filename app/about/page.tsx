import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Code, Palette, Zap } from "lucide-react"
import { getAboutData } from "@/lib/data"

export default async function AboutPage() {
  const aboutData = await getAboutData()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-red-500/20 p-6">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-gray-300 mt-2">Get to know the person behind the work</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Bio Section */}
          <Card className="bg-gray-800/50 border border-red-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Hello, I'm {aboutData.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed text-lg">{aboutData.bio}</p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 border border-red-500/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-red-400" />
                  <CardTitle className="text-white">Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {aboutData.skills.development.map((skill) => (
                    <div key={skill} className="text-gray-300 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border border-orange-500/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-orange-400" />
                  <CardTitle className="text-white">Design</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {aboutData.skills.design.map((skill) => (
                    <div key={skill} className="text-gray-300 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border border-red-500/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-red-400" />
                  <CardTitle className="text-white">Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {aboutData.skills.tools.map((skill) => (
                    <div key={skill} className="text-gray-300 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Timeline */}
          <Card className="bg-gray-800/50 border border-orange-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {aboutData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-orange-500/30 pl-6 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{exp.role}</h3>
                      <span className="text-orange-400 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-red-400 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
