export interface IProductInterface {
  productId: string
  name: string
  description: string
  price: string
  priceWas: string
  available: 'TRUE' | 'FALSE'
  quantity: number
  lowOnStock: 'TRUE' | 'FALSE'
  promotionBadge: string
  imageUrl: string
}
