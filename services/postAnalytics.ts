type PostMetrics = {
  engagementRate: number;
  impressions: number;
  clickThroughRate: number;
  averageComments: number;
  averageLikes: number;
  saveRate: number;
  shareRate: number;
  watchTime?: number; // Only for Reels
  slidesThroughRate?: number; // Only for Carousels
};

type PostTypeData = {
  metrics: PostMetrics;
  comparisons: string[];
  recommendations: string[];
};

const postTypeAnalytics: Record<string, PostTypeData> = {
  static: {
    metrics: {
      engagementRate: 2.1,
      impressions: 650000,
      clickThroughRate: 3.2,
      averageComments: 45,
      averageLikes: 1200,
      saveRate: 1.8,
      shareRate: 0.9,
    },
    comparisons: [
      "20% lower engagement than carousel posts",
      "50% fewer comments than Reels",
      "Generates 15% more saves than Reels",
      "30% lower reach compared to other formats"
    ],
    recommendations: [
      "Consider converting some static posts into carousels for higher engagement",
      "Use strong visual elements to compensate for format limitations",
      "Perfect for product showcases and announcements"
    ]
  },
  carousel: {
    metrics: {
      engagementRate: 3.8,
      impressions: 850000,
      clickThroughRate: 4.5,
      averageComments: 75,
      averageLikes: 2200,
      saveRate: 2.5,
      shareRate: 1.2,
      slidesThroughRate: 65
    },
    comparisons: [
      "20% higher engagement than static posts",
      "2.5x higher save rate than other formats",
      "Users spend 40% more time viewing carousels",
      "45% better reach than static posts"
    ],
    recommendations: [
      "Aim for 3-5 slides for optimal engagement",
      "Use the first slide as a strong hook",
      "Include a mix of information and visuals"
    ]
  },
  reel: {
    metrics: {
      engagementRate: 4.2,
      impressions: 1200000,
      clickThroughRate: 5.1,
      averageComments: 120,
      averageLikes: 3500,
      saveRate: 1.5,
      shareRate: 2.8,
      watchTime: 15.5 // seconds
    },
    comparisons: [
      "Drives 2x more comments than other formats",
      "3x higher share rate than static posts",
      "Reaches 80% more unique accounts",
      "35% higher engagement rate than carousels"
    ],
    recommendations: [
      "Keep videos under 30 seconds for optimal retention",
      "Use trending audio and effects",
      "Post Reels during peak engagement times"
    ]
  }
};

type TimeRange = '1m' | '2m' | '6m' | '1y' | 'all';

export const getPostAnalytics = (postType: string, timeRange: TimeRange) => {
  const data = postTypeAnalytics[postType];
  if (!data) return null;

  // Simulate different time ranges affecting the metrics
  const timeMultipliers: Record<TimeRange, number> = {
    '1m': 1,
    '2m': 0.95,
    '6m': 0.85,
    '1y': 0.75,
    'all': 0.65
  };

  const multiplier = timeMultipliers[timeRange];
  const adjustedMetrics = { ...data.metrics };
  
  // Adjust metrics based on time range
  (Object.keys(adjustedMetrics) as Array<keyof PostMetrics>).forEach((key) => {
    if (typeof adjustedMetrics[key] === 'number') {
      adjustedMetrics[key] = adjustedMetrics[key] * multiplier;
    }
  });

  return {
    ...data,
    metrics: adjustedMetrics,
    timeRange,
    analyzed_at: new Date().toISOString()
  };
};

export const getInsightSummary = (postType: string, timeRange: TimeRange): string[] => {
  const data = postTypeAnalytics[postType];
  if (!data) return [];

  return [
    ...data.comparisons,
    ...data.recommendations.slice(0, 2) // Only return top 2 recommendations
  ];
};

export default {
  getPostAnalytics,
  getInsightSummary
}; 