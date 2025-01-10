import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, ArrowLeft } from 'lucide-react'

const teamMembers = [
  {
    name: "Tanishq Kandpal",
    role: "Frontend Developer (v0 Prompt Writer) ",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "Gaurav Rikhari",
    role: "Backend Developer (The guy who does all work)",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "Tanuj Nayal",
    role: "Just a Blackass Nigga",
    bio: "He's black",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "Abhinav Kaprwan",
    role: "He's there?",
    image: "/placeholder.svg?height=300&width=300"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4 text-white hover:text-purple-200 transition-colors flex items-center">
        <ArrowLeft className="mr-2" /> Back to Home
      </Link>
      <div className="absolute top-10 left-10 text-white/20">
        <Instagram size={120} />
      </div>
      <main className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">About Our Team</h1>
        <p className="text-xl text-purple-200 text-center max-w-3xl mx-auto mb-16">
          We're a passionate team of experts dedicated to helping you unlock the full potential of your Instagram presence. 
          With our diverse skills and experience, we're here to provide you with the best analytics and insights for your social media strategy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-black/30 border-none shadow-xl backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-purple-300 mb-3">{member.role}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="w-full text-center py-4 text-purple-200 z-10">
        <p>&copy; 2025 InstaAnalyzer. All rights reserved.</p>
      </footer>
    </div>
  )
}

