'use client'

import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Cell, Pie, PieChart as RechartsPieChart } from "recharts"

const lineChartData = [
  { name: "Jan", engagement: 4000 },
  { name: "Feb", engagement: 3000 },
  { name: "Mar", engagement: 5000 },
  { name: "Apr", engagement: 4500 },
  { name: "May", engagement: 6000 },
  { name: "Jun", engagement: 5500 },
  { name: "Jul", engagement: 7000 },
]

const pieChartData = [
  { name: "Static Images", value: 400 },
  { name: "Carousels", value: 300 },
  { name: "Reels", value: 300 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function LineChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={lineChartData}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="engagement" name="Engagement" stroke="#8884d8" strokeWidth={2} dot={false} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PieChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

