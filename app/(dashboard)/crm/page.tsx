"use client";

import { Badge } from "@/components/ui/badge";
import CRMCard, { CRMCardProps } from "./components/crmCard";
import { FaWallet } from "react-icons/fa";
import { TbCoin } from "react-icons/tb";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { leadsChartConfig, leadsChartData, proposalsChartConfig, proposalsChartData, revenueChartConfig, revenueChartData } from "./components/crm.config";

const cardsData: CRMCardProps[] = [
  {
    title: (
      <h1>
        New Leads
      </h1>
    ),
    description: (
      <p>
        Last Month
      </p>
    ),
    children: (
      <div className="h-auto w-full">
        <ChartContainer config={leadsChartConfig} className="size-full">
          <BarChart accessibilityLayer data={leadsChartData} barSize={8}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              background={{ fill: "var(--color-background)", radius: 4, opacity: 0.07 }}
                dataKey="newLeads"
                stackId="a"
                fill="var(--color-newLeads)"
                radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="disqualified"
              stackId="a"
              fill="var(--color-disqualified)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>

      </div>
    ),
    footer: (
      <div className="flex items-center justify-between w-full">
        <span className="text-xl font-medium">635</span>
        <Badge variant="ghost" className="text-green-500">+54.6%</Badge>
      </div>
    ),
  },
  {
    title: (
      <h1>
        Proposals Sent
      </h1>
    ),
    description: (
      <p>
        Last Month
      </p>
    ),
    children: (<div className="h-aut0 w-full">
      <ChartContainer className="size-full min-h-24" config={proposalsChartConfig}>
        <AreaChart
          data={proposalsChartData}
          margin={{
            left: 0,
            right: 0,
            top: 5,
          }}
        >
          <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} hide />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="proposalsSent"
            fill="var(--color-proposalsSent)"
            fillOpacity={0.05}
            stroke="var(--color-proposalsSent)"
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ChartContainer>
    </div>),
    footer: (
      <div className="flex items-center justify-between w-full">
        <span className="text-xl font-medium">635</span>
        <Badge variant="ghost" className="text-green-500">+54.6%</Badge>
      </div>
    ),
  },
  {
    title: (
      <div className="bg-green-500/20 text-green-600 border border-green-500/40 backdrop-blur-sm p-2 rounded-sm">
        <FaWallet size={25} />
      </div>
    ),
    children: (<div>
      <h1>
        Revenue
      </h1>
      <p>Last 6 Months</p>
      <h1>
        $56,050
      </h1>
    </div>),
    footer: (
      <Badge className="bg-green-500/20 text-green-600 border border-green-500/40 backdrop-blur-sm">+22.2%</Badge>
    )
  },
  {
    title: (
      <div className="bg-red-500/20 text-red-600 border border-red-500/40 backdrop-blur-sm p-2 rounded-sm">
        <TbCoin size={25} />
      </div>
    ),
    children: (<div>
      <h1>
        Project Won
      </h1>
      <p>Last 6 Months</p>
      <h1>
        136
      </h1>
    </div>),
    footer: (
      <Badge className="bg-red-500/20 text-red-600 border border-red-500/40 backdrop-blur-sm">-2.5%</Badge>
    )
  },
  {
    title: (
      <h1 className="text-xl">
        Revenue Growth
      </h1>
    ),
    description: (
      <p>
        Year to Date(YTD)
      </p>
    ),
    children: <div className="h-20">
           <ChartContainer config={revenueChartConfig} className="h-24 w-full">
            <LineChart
              data={revenueChartData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="revenue"
                stroke="var(--color-revenue)"
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
    </div>,
    footer: (
      <div className="flex items-center justify-between w-full">
        <span className="text-gray-500 text-sm font-normal">+35% growth since last year</span>
      </div>
    ),
  },
];

export default function CrmPage() {
  return (
    <div className="space-y-2">
      {/* cards */}
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        {cardsData.map((d: CRMCardProps, i) => (
          <div key={i}>
            <CRMCard
              title={d.title}
              description={d.description}
              children={d.children}
              footer={d.footer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
