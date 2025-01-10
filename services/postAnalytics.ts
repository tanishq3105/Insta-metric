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
        engagementRate: 2.1,
        impressions: 650000,
        clickThroughRate: 3.2,
        averageComments: 45,
        averageLikes: 1200,
        saveRate: 1.8,
        shareRate: 0.9,
      },
      comparisons: {
        '1m': [
          "New to the platform - establishing baseline engagement",
          "Comparable performance to industry averages",
          "Building initial audience reach",
        ],
        '2m': [
          "15% improvement in engagement since first month",
          "Steady growth in save rates",
          "Audience retention improving"
        ],
        '6m': [
          "40% higher engagement than initial months",
          "Consistent growth in community interaction",
          "Established posting rhythm showing results"
        ],
        '1y': [
          "Double the engagement compared to launch",
          "Strong year-over-year growth in saves",
          "Reliable format for core audience"
        ],
        'all': [
          "Proven long-term performance",
          "Consistent upward trend in engagement",
          "Strong foundation for content strategy"
        ]
      },
      recommendations: {
        '1m': [
          "Focus on building consistent posting schedule",
          "Experiment with different content themes",
          "Engage with comments to build community"
        ],
        '2m': [
          "Analyze top-performing content themes",
          "Optimize posting times based on early data",
          "Start incorporating more call-to-actions"
        ],
        '6m': [
          "Repurpose top-performing content",
          "Develop content series based on engagement patterns",
          "Implement learnings from audience behavior"
        ],
        '1y': [
          "Scale successful content formats",
          "Create themed content calendars",
          "Focus on community-driven content"
        ],
        'all': [
          "Maintain proven content frameworks",
          "Innovate within successful parameters",
          "Leverage historical data for planning"
        ]
      }
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
      comparisons: {
        '1m': [
          "Higher initial engagement than static posts",
          "Strong save rates from launch",
          "Good slide-through completion rates"
        ],
        '2m': [
          "25% increase in slide-through rate",
          "Growing save rate trend",
          "Increasing audience retention"
        ],
        '6m': [
          "50% higher engagement than starting period",
          "Established as top-performing format",
          "Strong growth in share rates"
        ],
        '1y': [
          "Consistently outperforming other formats",
          "75% higher engagement than year start",
          "Excellent long-term save rates"
        ],
        'all': [
          "Most reliable format for engagement",
          "Sustained growth in all metrics",
          "Top performer for saves and shares"
        ]
      },
      recommendations: {
        '1m': [
          "Test different slide counts",
          "Experiment with content flow",
          "Focus on strong opening slides"
        ],
        '2m': [
          "Optimize based on slide-through data",
          "Develop multi-part series",
          "Incorporate audience feedback"
        ],
        '6m': [
          "Create content templates from top performers",
          "Establish branded carousel styles",
          "Scale successful formats"
        ],
        '1y': [
          "Innovate within proven frameworks",
          "Develop seasonal content strategies",
          "Focus on educational series"
        ],
        'all': [
          "Maintain high-performing templates",
          "Regular format refreshes",
          "Advanced storytelling techniques"
        ]
      }
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
        watchTime: 15.5
      },
      comparisons: {
        '1m': [
          "Strong initial viral potential",
          "High early adoption rates",
          "Good watch time metrics"
        ],
        '2m': [
          "30% increase in average watch time",
          "Growing viral reach",
          "Improving engagement patterns"
        ],
        '6m': [
          "60% higher reach than initial period",
          "Consistent viral hits",
          "Strong audience growth"
        ],
        '1y': [
          "100% increase in engagement",
          "Established viral formula",
          "Excellent growth trajectory"
        ],
        'all': [
          "Most viral content format",
          "Highest growth potential",
          "Best for audience expansion"
        ]
      },
      recommendations: {
        '1m': [
          "Focus on trending audio",
          "Test different video lengths",
          "Engage with Reels community"
        ],
        '2m': [
          "Analyze top-performing styles",
          "Develop signature transitions",
          "Build on successful formats"
        ],
        '6m': [
          "Create trending content series",
          "Establish brand voice in Reels",
          "Scale viral elements"
        ],
        '1y': [
          "Innovate within trending formats",
          "Develop content franchises",
          "Focus on community trends"
        ],
        'all': [
          "Maintain trending presence",
          "Regular format innovation",
          "Lead platform trends"
        ]
      }
    }
  };
  
  export const getPostAnalytics = (postType: string, timeRange: TimeRange) => {
    const data = postTypeAnalytics[postType];
    if (!data) return null;
  
    // Time multipliers now show increasing engagement over time
    const timeMultipliers: Record<TimeRange, number> = {
      '1m': 1,
      '2m': 1.15,
      '6m': 1.4,
      '1y': 1.8,
      'all': 2.2
    };
  
    const multiplier = timeMultipliers[timeRange];
    const adjustedMetrics = { ...data.metrics };
    
    // Adjust metrics based on time range
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
      ...data.recommendations[timeRange].slice(0, 2) // Only return top 2 recommendations
    ];
  };
  
  export default {
    getPostAnalytics,
    getInsightSummary
  };