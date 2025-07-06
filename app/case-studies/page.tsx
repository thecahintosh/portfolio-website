import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, Target } from "lucide-react"
import { getCaseStudies } from "@/lib/data" 

export default async function BlogPage() {
  const blogs = await getBlogs() 

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-red-500/20 p-6">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Blogs</h1>
          <p className="text-gray-300 mt-2">My insights and stories on tech, ideas, and the world.</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="space-y-6">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="bg-gray-800/50 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-2">{blog.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base">{blog.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.duration}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-1" />
                    {blog.category}
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
