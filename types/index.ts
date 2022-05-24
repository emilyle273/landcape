
export interface News {
  images?: string[]
  title: string
  createAt: string
  description: string
  price: number
  acreage: number
  _id: string
  location?: {
    lng: string
    lat: string
  },
  address?: {
    city: string
    district: string
    ward: string
  }
}

export interface Option {
  label: string
  value: string
}

export interface User {
  email: string
  password: string
  role?: number
  phone?: string
  lastName?: string
  firstName?: string
}
