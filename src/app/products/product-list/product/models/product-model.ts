export class ProductModel {

  constructor(
    public id: number = null,
    public name: string = '',
    public model: string = '',
    public cost: number = 0,
    public booked?: boolean,
    public count?: number
  ) {
  }
}
