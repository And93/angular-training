export class ProductModel {

  constructor(
    public name: string,
    public model: string,
    public cost: number,
    public booked?: boolean,
    public count?: number
  ) {
  }
}
