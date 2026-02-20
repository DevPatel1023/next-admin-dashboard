"use client";

import { Badge } from "@/components/ui/badge";
import CRMCard, { CRMCardProps } from "./components/crmCard";

const cardsData: CRMCardProps[] = [
  {
    title: "New Leads",
    description: "Last Month",
    children: <div className="h-20">{/* chart goes here */}</div>,
    footer: (
      <div className="flex items-center justify-between w-full">
        <span className="text-xl font-medium">635</span>
        <Badge className="bg-green-500 text-white">+54.6%</Badge>
      </div>
    ),
  },
  {
    title: "Proposals Sent",
    description: "Last Month",
    children: <div className="h-20">{/* chart goes here */}</div>,
  },
  {
    title: "Proposals Sent",
    // description: (<div>Rev</div>),
    children: <div className="h-20">{/* chart goes here */}</div>,
  },
];

export default function CrmPage() {
  return (
    <div className="space-y-2">
      {/* cards */}
      <div  className=" grid grid-cols-2 gap-2">
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
