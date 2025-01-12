/* eslint-disable react/prop-types */
import { Card, CardContent, CardFooter } from "@/components/ui/card"



export function ReviewCard({ company, logo, date, preview }) {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="relative h-12 w-12 shrink-0">
            <img
              src={logo}
              alt={company}
              width={48}
              height={48}
              className="rounded-sm object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{company}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
        <p className="mt-4 line-clamp-3 text-sm">{preview}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {/* <Link href={reviewLink} className="text-sm text-blue-600 hover:underline"> */}
          Read full review ›
        {/* </Link> */}
      </CardFooter>
    </Card>
  )
}

