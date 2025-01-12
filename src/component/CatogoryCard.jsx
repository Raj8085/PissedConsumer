/* eslint-disable react/prop-types */
import { ShoppingBag, Radio, Truck, Phone, Monitor, Film, Building2, Store, Shield, UtensilsCrossed, ShoppingCart } from 'lucide-react'
import { Card } from "../components/ui/card"

const iconMap = {
  "Footwear and Clothing": ShoppingBag,
  "Media": Radio,
  "Transportation and Logistics": Truck,
  "Telecommunications": Phone,
  "Software": Monitor,
  "Games and Movies": Film,
  "Financial Services": Building2,
  "Auctions and Marketplaces": Store,
  "Insurance": Shield,
  "Food Delivery": UtensilsCrossed,
  "E-commerce": ShoppingCart,
  "Supermarkets and Malls": Store
}



export function CategoryCard({ title }) {
  const Icon = iconMap[title] || Store

  return (
      <Card className="flex items-center gap-3 p-4 transition-colors hover:bg-gray-50">
        <Icon className="h-6 w-6 text-gray-600" />
        <span className="font-medium">{title}</span>
      </Card>
  )
}

