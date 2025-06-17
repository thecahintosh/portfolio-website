import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MessageCircle, Send } from "lucide-react"
import { submitContactForm } from "@/lib/actions"

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
          <p className="text-gray-300 mt-2">Ready to start a conversation? I'd love to hear from you.</p>
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
                  <p className="text-gray-300">hello@portfolio.dev</p>
                </CardContent>
              </Card>
            <Card className="bg-gray-800/50 border border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={submitContactForm} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-red-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-red-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="bg-gray-700 border-gray-600 text-white focus:border-red-400"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="bg-gray-700 border-gray-600 text-white focus:border-red-400"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
