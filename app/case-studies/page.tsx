import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, Target } from "lucide-react"
import { getCaseStudies } from "@/lib/data"

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-red-500/20 p-6">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Blogs</h1>
          <p className="text-gray-300 mt-2">My Insights?</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="bg-gray-800/50 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-base">{study.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {study.category}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Result</h4>
                    <p className="text-gray-300 text-sm">{study.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
