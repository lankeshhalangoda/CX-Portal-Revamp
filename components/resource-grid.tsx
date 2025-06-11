import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, MoreHorizontal, Share2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ResourceGrid() {
  return (
    <div className="mt-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Resources</h2>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="summaries">Summaries</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="case-studies" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((r) => r.type === "Case Study")
              .map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="summaries" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((r) => r.type === "Summary")
              .map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="other" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((r) => !["Case Study", "Summary"].includes(r.type))
              .map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div
          className="h-40 w-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center"
          style={{ backgroundColor: resource.color }}
        >
          <FileText className="h-12 w-12 text-white" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <Badge
            variant={resource.type === "Case Study" ? "default" : resource.type === "Summary" ? "outline" : "secondary"}
          >
            {resource.type}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Download</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardTitle className="mt-4 line-clamp-1">{resource.title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-2">{resource.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-6 pt-4">
        <div className="text-xs text-muted-foreground">Updated {resource.updated}</div>
        <Button size="sm" variant="ghost" className="gap-1">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

interface Resource {
  id: string
  title: string
  description: string
  type: "Case Study" | "Summary" | "Introduction" | "Brochure" | "RFP"
  updated: string
  color: string
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Emojot Introduction",
    description: "Latest company introduction deck.",
    type: "Introduction",
    updated: "2 days ago",
    color: "#3383bb",
  },
  {
    id: "2",
    title: "Emojot Intro Brochure",
    description: "Latest company introduction pdf.",
    type: "Brochure",
    updated: "1 week ago",
    color: "#3383bb",
  },
  {
    id: "3",
    title: "Case Study: VOP",
    description: "How Emojot supported a leading healthcare provider to systemize patient engagement.",
    type: "Case Study",
    updated: "2 weeks ago",
    color: "#D83482",
  },
  {
    id: "4",
    title: "Case Study: VOE",
    description: "How Emojot supported a high-end apparel manufacturer to empower VOE.",
    type: "Case Study",
    updated: "3 weeks ago",
    color: "#215A91",
  },
  {
    id: "5",
    title: "Case Study: VOC",
    description: "How Emojot supported a world class automobile service provider to revitalize dealership engagement.",
    type: "Case Study",
    updated: "1 month ago",
    color: "#4396D7",
  },
  {
    id: "6",
    title: "Executive Summary: VOX",
    description: "The generic executive summary about Emojot capabilities.",
    type: "Summary",
    updated: "1 month ago",
    color: "#D73480",
  },
]
