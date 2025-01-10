'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Instagram, Sparkles, ArrowLeft, TrendingUp, Users, Eye, Hash, Star } from 'lucide-react'
import { Loader } from '../../components/ui/loader'
import postAnalytics from '@/services/postAnalytics'

// Define the interface for the analytics data
interface AnalyticsData {
  metrics: {
    engagementRate: number;
    clickThroughRate: number;
    impressions: number;
    averageComments: number;
    saveRate: number;
  };
}

export default function AnalyzePage() {
  const [postType, setPostType] = useState('')
  const [timeRange, setTimeRange] = useState<'1m' | '2m' | '6m' | '1y' | 'all'>('1m')
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [insightsList, setInsightsList] = useState<string[]>([])

  const handleAnalyze = () => {
    if (postType && timeRange) {
      setIsLoading(true)
      setTimeout(() => {
        const analytics = postAnalytics.getPostAnalytics(postType, timeRange)
        const insights = postAnalytics.getInsightSummary(postType, timeRange)
        setAnalyticsData(analytics)
        setInsightsList(insights)
        setShowResults(true)
        setIsLoading(false)
      }, 2000)
    }
  }

  const getInsights = () => [
    {
      title: "Engagement Ratio",
      value: analyticsData ? `${analyticsData.metrics.engagementRate.toFixed(2)}%` : "0%",
      icon: TrendingUp,
      description: "Total engagements (likes + comments) divided by impressions",
    },
    {
      title: "Click-Through Rate",
      value: analyticsData ? `${analyticsData.metrics.clickThroughRate.toFixed(1)}%` : "0%",
      icon: Users,
      description: "Percentage of viewers who clicked on the post",
    },
    {
      title: "Total Impressions",
      value: analyticsData ? analyticsData.metrics.impressions.toLocaleString() : "0",
      icon: Eye,
      description: "Number of times the post was viewed",
    },
    {
      title: "Average Comments",
      value: analyticsData ? analyticsData.metrics.averageComments.toLocaleString() : "0",
      icon: Hash,
      description: "Average number of comments per post",
    },
    {
      title: "Save Rate",
      value: analyticsData ? `${analyticsData.metrics.saveRate.toFixed(1)}%` : "0%",
      icon: Star,
      description: "Percentage of viewers who saved the post",
    },
  ]

  const insights = getInsights()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4 text-white hover:text-purple-200 transition-colors flex items-center">
        <ArrowLeft className="mr-2" /> Back to Home
      </Link>
      <div className="absolute top-10 left-10 text-white/20">
        <Instagram size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-white/20">
        <Sparkles size={120} />
      </div>
      <Card className="w-full max-w-4xl bg-black/30 border-none shadow-2xl backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Instagram Post Analyzer</CardTitle>
          <CardDescription className="text-gray-300">
            Gain insights into different types of Instagram posts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="post-type" className="text-sm font-medium text-gray-200">
                Post Type
              </label>
              <Select onValueChange={setPostType}>
                <SelectTrigger id="post-type" className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select post type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="static" className="hover:bg-gray-700">Static Images</SelectItem>
                  <SelectItem value="carousel" className="hover:bg-gray-700">Carousels</SelectItem>
                  <SelectItem value="reel" className="hover:bg-gray-700">Reels</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="time-range" className="text-sm font-medium text-gray-200">
                Time Range
              </label>
              <Select onValueChange={(value) => setTimeRange(value as '1m' | '2m' | '6m' | '1y' | 'all')} defaultValue="1m">
                <SelectTrigger id="time-range" className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="all" className="hover:bg-gray-700">All Time</SelectItem>
                  <SelectItem value="1y" className="hover:bg-gray-700">Past 1 Year</SelectItem>
                  <SelectItem value="6m" className="hover:bg-gray-700">Past 6 Months</SelectItem>
                  <SelectItem value="2m" className="hover:bg-gray-700">Past 2 Months</SelectItem>
                  <SelectItem value="1m" className="hover:bg-gray-700">Past 1 Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button 
            onClick={handleAnalyze} 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            disabled={!postType || !timeRange || isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Analyze'}
          </Button>
          {isLoading && (
            <div className="mt-8" aria-live="polite" aria-busy="true">
              <Loader />
            </div>
          )}
          {showResults && !isLoading && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {insights.map((insight, index) => (
                  <Card key={index} className="bg-black/30 border-none">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <insight.icon className="h-8 w-8 text-purple-400 mb-2" />
                      <h3 className="text-lg font-semibold text-white mb-1">{insight.title}</h3>
                      <p className="text-2xl font-bold text-purple-300 mb-1">{insight.value}</p>
                      <p className="text-xs text-gray-400 mt-2">{insight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="mt-8 bg-black/30 border-none">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">Performance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {insightsList.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
