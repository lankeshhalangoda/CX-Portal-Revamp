import { ArrowUpRight, BarChart3, FileText, Users } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatsCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">127</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 flex items-center">
              +4.6% <ArrowUpRight className="ml-1 h-3 w-3" />
            </span>
          </p>
        </CardContent>
        <CardFooter className="p-2">
          <p className="text-xs text-muted-foreground">12 new resources this month</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">32</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 flex items-center">
              -1.3% <ArrowUpRight className="ml-1 h-3 w-3 rotate-90" />
            </span>
          </p>
        </CardContent>
        <CardFooter className="p-2">
          <p className="text-xs text-muted-foreground">3 users active now</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Resource Views</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,892</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 flex items-center">
              +12.3% <ArrowUpRight className="ml-1 h-3 w-3" />
            </span>
          </p>
        </CardContent>
        <CardFooter className="p-2">
          <p className="text-xs text-muted-foreground">245 views in the last 7 days</p>
        </CardFooter>
      </Card>
    </div>
  )
}
