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
    comparisons: Record<TimeRange, string[]>;
    recommendations: Record<TimeRange, string[]>;
  };
  
  type TimeRange = '1m' | '2m' | '6m' | '1y' | 'all';
  
  const postTypeAnalytics: Record<string, PostTypeData> = {
    static: {
      metrics: {
        engagementRate: 2.0,
        impressions: 100000,
        clickThroughRate: 3.0,
        averageComments: 40,
        averageLikes: 1000,
        saveRate: 1.5,
        shareRate: 0.8,
      },
      comparisons: {
        '1m': [
          "Base engagement rate of 2.0%, matching platform average",
          "100,000 monthly impressions with 3.0% CTR",
          "1,000 average likes with 40 comments per post (2.5:1 ratio)"
        ],
        '2m': [
          "Engagement rate up 20% to 2.4%",
          "Impressions increased 25% to 125,000",
          "Likes grew by 25% to 1,250, comments up to 50 (2.5:1 ratio maintained)"
        ],
        '6m': [
          "Engagement rate reached 3.0% (50% growth from month 1)",
          "Monthly impressions at 200,000 (100% increase)",
          "Average likes at 2,000 (100% growth), comments at 80"
        ],
        '1y': [
          "Engagement doubled to 4.0% from initial rate",
          "Impressions reached 300,000 (200% yearly growth)",
          "Likes tripled to 3,000, comments at 120 (maintaining ratio)"
        ],
        'all': [
          "Peak engagement rate of 5.0% (150% total growth)",
          "Maximum monthly impressions: 400,000",
          "Peak performance: 4,000 likes, 160 comments per post"
        ]
      },
      recommendations: {
        '1m': [
          "Increase posting frequency by 25% to reach 5 posts/week",
          "Target 3.0% CTR (currently at 2.0%)",
          "Aim for 50 comments per post (25% increase)"
        ],
        '2m': [
          "Push for 2.5% engagement rate (25% increase)",
          "Target 150,000 monthly impressions (25% growth)",
          "Aim for 1,500 likes per post (20% increase)"
        ],
        '6m': [
          "Target 3.5% engagement rate (75% total growth)",
          "Aim for 250,000 monthly impressions",
          "Push for 2,500 likes per post (150% total growth)"
        ],
        '1y': [
          "Goal: 4.5% engagement rate (125% total increase)",
          "Target 350,000 monthly impressions",
          "Aim for 3,500 likes per post (250% total growth)"
        ],
        'all': [
          "Maintain minimum 4.0% engagement rate",
          "Keep monthly impressions above 300,000",
          "Maintain 3,000+ likes per post average"
        ]
      }
    },
    carousel: {
      metrics: {
        engagementRate: 3.0,
        impressions: 150000,
        clickThroughRate: 4.0,
        averageComments: 60,
        averageLikes: 1500,
        saveRate: 2.0,
        shareRate: 1.0,
        slidesThroughRate: 60
      },
      comparisons: {
        '1m': [
          "Base engagement 50% higher than static (3.0% vs 2.0%)",
          "150,000 impressions (50% above static)",
          "60% slide-through rate on average"
        ],
        '2m': [
          "Engagement up to 3.6% (20% growth)",
          "187,500 impressions (25% increase)",
          "Slide-through rate improved to 65%"
        ],
        '6m': [
          "4.5% engagement rate (50% growth from month 1)",
          "300,000 impressions (100% growth)",
          "Slide-through rate at 70%"
        ],
        '1y': [
          "6.0% engagement rate (100% yearly growth)",
          "450,000 impressions (200% increase)",
          "75% slide-through rate achieved"
        ],
        'all': [
          "Peak engagement of 7.5% (150% total growth)",
          "Maximum 600,000 monthly impressions",
          "80% peak slide-through rate"
        ]
      },
      recommendations: {
        '1m': [
          "Target 65% slide-through rate (8% increase)",
          "Aim for 3.5% engagement (17% increase)",
          "Push for 200,000 monthly impressions"
        ],
        '2m': [
          "Reach 4.0% engagement rate (33% total growth)",
          "Target 250,000 monthly impressions",
          "Achieve 68% slide-through rate"
        ],
        '6m': [
          "Push for 5.0% engagement (67% total growth)",
          "Aim for 350,000 impressions",
          "Target 73% slide-through rate"
        ],
        '1y': [
          "Target 6.5% engagement (117% total growth)",
          "Goal: 500,000 monthly impressions",
          "Maintain 75% slide-through rate"
        ],
        'all': [
          "Maintain 6.0%+ engagement rate",
          "Keep impressions above 450,000",
          "Maintain 70%+ slide-through rate"
        ]
      }
    },
    reel: {
      metrics: {
        engagementRate: 4.0,
        impressions: 200000,
        clickThroughRate: 5.0,
        averageComments: 80,
        averageLikes: 2000,
        saveRate: 2.5,
        shareRate: 1.5,
        watchTime: 15.0
      },
      comparisons: {
        '1m': [
          "4.0% base engagement (2x static posts)",
          "200,000 impressions (2x static baseline)",
          "15 second average watch time"
        ],
        '2m': [
          "4.8% engagement rate (20% growth)",
          "250,000 impressions (25% increase)",
          "Watch time increased to 16.5 seconds"
        ],
        '6m': [
          "6.0% engagement rate (50% growth)",
          "400,000 impressions (100% increase)",
          "Average watch time: 18 seconds"
        ],
        '1y': [
          "8.0% engagement rate (100% yearly growth)",
          "600,000 impressions (200% increase)",
          "20 second average watch time"
        ],
        'all': [
          "Peak 10.0% engagement (150% total growth)",
          "800,000 maximum monthly impressions",
          "22 second peak average watch time"
        ]
      },
      recommendations: {
        '1m': [
          "Target 4.5% engagement (12.5% increase)",
          "Push for 225,000 monthly impressions",
          "Increase watch time to 16 seconds"
        ],
        '2m': [
          "Aim for 5.0% engagement (25% total growth)",
          "Target 300,000 monthly impressions",
          "Reach 17 second watch time"
        ],
        '6m': [
          "Push for 7.0% engagement (75% total growth)",
          "Goal: 500,000 monthly impressions",
          "Achieve 19 second watch time"
        ],
        '1y': [
          "Target 9.0% engagement (125% total growth)",
          "Aim for 700,000 monthly impressions",
          "Maintain 21 second watch time"
        ],
        'all': [
          "Maintain 8.0%+ engagement rate",
          "Keep impressions above 600,000",
          "Maintain 20+ second watch time"
        ]
      }
    }
  };
  
  export const getPostAnalytics = (postType: string, timeRange: TimeRange) => {
    const data = postTypeAnalytics[postType];
    if (!data) return null;
  
    // Mathematically consistent growth multipliers
    const timeMultipliers: Record<TimeRange, number> = {
      '1m': 1.0,    // Baseline
      '2m': 1.2,    // 20% growth
      '6m': 1.5,    // 50% growth
      '1y': 2.0,    // 100% growth
      'all': 2.5    // 150% growth
    };
  
    const multiplier = timeMultipliers[timeRange];
    const adjustedMetrics = { ...data.metrics };
    
    (Object.keys(adjustedMetrics) as Array<keyof PostMetrics>).forEach((key) => {
      if (typeof adjustedMetrics[key] === 'number') {
        adjustedMetrics[key] = Number((adjustedMetrics[key] * multiplier).toFixed(2));
      }
    });
  
    return {
      metrics: adjustedMetrics,
      comparisons: data.comparisons[timeRange],
      recommendations: data.recommendations[timeRange],
      timeRange,
      analyzed_at: new Date().toISOString()
    };
  };
  
  export const getInsightSummary = (postType: string, timeRange: TimeRange): string[] => {
    const data = postTypeAnalytics[postType];
    if (!data) return [];
  
    return [
      ...data.comparisons[timeRange],
      ...data.recommendations[timeRange].slice(0, 2)
    ];
  };
  
  export default {
    getPostAnalytics,
    getInsightSummary
  };