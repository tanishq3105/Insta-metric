import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, BarChart2, PieChart, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <nav className="w-full max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center z-10">
        <div className="flex items-center space-x-2">
          <Instagram className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">InstaAnalyzer</span>
        </div>
        <div className="space-x-4">
          <Link href="/analyze" className="text-white hover:text-purple-200 transition-colors">
            Analyze
          </Link>
          <Link href="/about" className="text-white hover:text-purple-200 transition-colors">
            About
          </Link>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
          Unlock Your Instagram Insights
        </h1>
        <p className="text-xl text-purple-200 text-center max-w-2xl mb-12">
          Analyze your Instagram posts, understand your audience, and optimize your content strategy with powerful analytics and comparative insights.
        </p>
        <Link href="/analyze">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Analyzing
          </Button>
        </Link>
      </main>
      <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/30 border-none shadow-xl backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Comparative Insights</h3>
              <p className="text-purple-200">Get detailed comparisons of your posts performance against your account average.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border-none shadow-xl backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BarChart2 className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Monthly Performance</h3>
              <p className="text-purple-200">Track your engagement trends over time with interactive line charts.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border-none shadow-xl backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <PieChart className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Content Distribution</h3>
              <p className="text-purple-200">Visualize your content mix and optimize your posting strategy.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="w-full text-center py-4 text-purple-200 z-10">
        <p>&copy; 2025 InstaAnalyzer. All rights reserved.</p>
      </footer>
    </div>
  )
}
