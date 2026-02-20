"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type CRMCardProps = {
  title?: string
  description?: string
  action?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export default function CRMCard({
  title,
  description,
  action,
  children,
  footer,
  className,
}: CRMCardProps) {
  return (
    <Card className={cn(
      "bg-linear-to-b from-white to-blue-50/50",
      className
    )}>
      {(title || description || action) && (
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="space-y-1">
            {title && (
              <CardTitle className="text-sm font-medium ">
                {title}
              </CardTitle>
            )}
            {description && (
              <CardDescription className="text-xs">
                {description}
              </CardDescription>
            )}
          </div>

          {action && <div>{action}</div>}
        </CardHeader>
      )}

      {children && <CardContent>{children}</CardContent>}

      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}