export class Product {
  constructor(
    public productId = 0,
    public productName = '',
    public productBrand = '',
    public productPrice = '',
    public productDescription = '',
    public productImage = '',
    public sizes = [
      {
        sizeId: 0,
        sizeName: '',
      },
    ]
  ) {}
}
