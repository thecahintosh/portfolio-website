import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MessageCircle, Twitter, Linkedin } from "lucide-react"
import { Users } from "lucide-react" // Using a generic icon for Peerlist (or you can use a custom SVG)

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-red-500/20 p-6">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Let's Talk</h1>
          <p className="text-gray-300 mt-2">Connect with me through the links below.</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gray-800/50 border border-red-500/20">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-red-400" />
                    <CardTitle className="text-white">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">singh.2004.shivansh@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border border-orange-500/20">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-orange-400" />
                    <CardTitle className="text-white">Github</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">thecahintosh</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-gray-800/50 border border-yellow-500/20">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <CardTitle className="text-white">Peerlist</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://peerlist.io/shivansh"
                    target="_blank"
                    className="text-gray-300 hover:underline"
                  >
                    peerlist.io/shivansh
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border border-blue-400/20">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Twitter className="w-5 h-5 text-blue-400" />
                    <CardTitle className="text-white">Twitter</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://x.com/ShivanshSi69754"
                    target="_blank"
                    className="text-gray-300 hover:underline"
                  >
                    @ShivanshSi69754
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border border-blue-600/20">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                    <CardTitle className="text-white">LinkedIn</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link
                    href=""
                    target="_blank"
                    className="text-gray-300 hover:underline"
                  >
                    Shivansh Singh
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
