"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons";

type CardProps = {
  title: string;
  icon: IconType;
  badgeno: string;
  number: string;
  trend: string;
  description: string;
};

export default function DashboardCard({
  title,
  icon,
  badgeno,
  number,
  trend,
  description,
}: CardProps) {
  const Icon = icon;

  return (
    <Card className="@container w-full h-full bg-linear-to-b from-white to-blue-50">
      <CardHeader className="space-y-1">
        <CardTitle className="text-gray-400 font-normal">
          {title}
        </CardTitle>

        <CardDescription>
          <div className="flex justify-between items-center">
            <span className="text-3xl @lg:text-2xl font-medium text-black">
              {number}
            </span>

            <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-2 py-1 text-black text-sm @lg:text-xs">
              <Icon />
              <span>{badgeno}</span>
            </div>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="flex items-center gap-1 text-black font-medium mb-2 @lg:text-sm">
          {trend}
          <Icon />
        </p>

        <p className="text-gray-400 font-normal @lg:text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}