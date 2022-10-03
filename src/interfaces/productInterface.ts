export interface IProductInterface {
  productId: string
  name: string
  description: string
  price: string
  priceWas: string
  available: 'TRUE'
  quantity: number
  lowOnStock: boolean
  promotionBadge: string
  imageUrl: string
}
