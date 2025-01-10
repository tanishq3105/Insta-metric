import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, ArrowLeft } from "lucide-react"

const teamMembers = [
  {
    name: "Tanishq Kandpal",
    role: "Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEC7rbyNKh6ww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701789936768?e=1741824000&v=beta&t=z-Wctkusz6a6CBjsFim3ziNb1t3BMQhDk0qaPAyL9cQ",
    bio: "Passionate about building interactive and user-friendly front-end experiences."
  },
  {
    name: "Gaurav Rikhari",
    role: "Backend Developer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGzXdKndbITbA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714238051342?e=1741824000&v=beta&t=cw6pO1Dg_afzYedgIwovDecLN3CMgKckbM3V5OLTG3k",
    bio: "Focused on building scalable and secure back-end systems."
  },
  {
    name: "Tanuj Nayal",
    role: "Backend Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH5FVCXPWt14w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727795582409?e=1741824000&v=beta&t=88M495hqMQ7LOaVJXNGXmxnadhcp2U0vYdZF-411KcQ",
    bio: "Specializing in database optimization and server management."
  },
  {
    name: "Abhinav Kaprwan",
    role: "Frontend Developer",
    image: "https://img.freepik.com/premium-vector/geek-boy-vector-illustration_949611-2886.jpg",
    bio: "Creating beautiful and intuitive user interfaces with a focus on UX."
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
          We are a passionate team of experts dedicated to helping you unlock the full potential of your Instagram presence. 
          With our diverse skills and experience, we are here to provide you with the best analytics and insights for your social media strategy.
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
