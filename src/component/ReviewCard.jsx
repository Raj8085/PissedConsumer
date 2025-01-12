/* eslint-disable react/prop-types */
import { Card, CardContent, CardFooter } from "@/components/ui/card"



export function ReviewCard({ company, resolutionTime, preview }) {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="mb-2 text-sm text-muted-foreground">
          Resolution time: {resolutionTime}
        </div>
        <div>
          <span className="font-semibold">{company}:</span>
          <span className="ml-1">{preview}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {/* <Link href={reviewLink} className="text-sm text-blue-600 hover:underline"> */}
          Read full review ›
        {/* </Link> */}
      </CardFooter>
    </Card>
  )
}

