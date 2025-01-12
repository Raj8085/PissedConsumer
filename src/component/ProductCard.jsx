/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card"


export function ProductCard({ title, image, price, originalPrice }) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative">
        <div className="absolute left-2 top-2 z-10 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
          20% OFF
        </div>
        <div className="relative aspect-square">
          <img
            src={image}
            alt={title}
            className="object-cover"
          />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 line-clamp-2 min-h-[48px] text-sm font-medium">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="font-bold">${price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

