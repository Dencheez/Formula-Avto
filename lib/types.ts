export interface Vehicle {
  id: string
  title: string
  price: number
  pricePerMonth?: number
  priceType?: "sale" | "rent"
  year: number
  mileage: number
  engine: string
  transmission: string
  drive: string
  bodyType: string
  location: string
  timeAgo: string
  images: string[]
  badges?: string[]
  hasCredit?: boolean
  discount?: number
  originalPrice?: number
}

export interface Category {
  id: string
  name: string
  icon: string
  image?: string
}

export interface Service {
  id: string
  name: string
  icon: string
}

export interface FilterState {
  category: string
  subcategories: string[]
  region: string
  priceFrom: string
  priceTo: string
  sellerType: "all" | "private" | "company"
  marketPriceOnly: boolean
}
