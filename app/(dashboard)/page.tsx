"use client";

import { FaArrowTrendUp } from "react-icons/fa6";
import DashboardCard from "./components/DashboardCard";
import { FaArrowTrendDown } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AreaChart from "@/app/(dashboard)/components/AreaChart";
import DashboardTable from "./components/DashboardTable";
import { columns } from "./components/columns";
import { dataDashboard } from "./components/dataDashboard";

const data = [
  {
    title: "Total Revenue",
    icon: FaArrowTrendUp,
    badgeno: "+15.5 %",
    number: "$1,250.00",
    trend: "Trending up this month",
    description: "Visitors for the last 6 months",
  },
  {
    title: "New Customers",
    icon: FaArrowTrendDown,
    badgeno: "-20%",
    number: "1,234",
    trend: "Down 20% this period",
    description: "Acquisition needs attention",
  },
  {
    title: "Active Accounts",
    icon: FaArrowTrendUp,
    badgeno: "+12.5 %",
    number: "45,678",
    trend: "Strong user retention",
    description: "Engagement exceed targets",
  },
  {
    title: "Growth Rate",
    icon: FaArrowTrendUp,
    badgeno: "+4.5 %",
    number: "4.5 %",
    trend: "Steady performance increase",
    description: "Meets growth projections",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Example content placeholder */}
      <div
        className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4`}
      >
        {data.map((d, i) => (
          <div key={i}>
            <DashboardCard
              title={d.title}
              icon={d.icon}
              badgeno={d.badgeno}
              number={d.number}
              trend={d.trend}
              description={d.description}
            />
          </div>
        ))}
      </div>

      {/* chart */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>

          <CardContent>
            <AreaChart />
          </CardContent>
        </Card>
      </div>

      {/* table */}
      <div>
        {/* options */}
        <div></div>
        {/* table component */}
        <DashboardTable columns={columns} data={dataDashboard} />
      </div>
    </div>
  );
}
