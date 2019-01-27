export class ProductModel {

  constructor(
    public name: string,
    public model: string,
    public cost: number,
    public count: number | string,
    public booked?: boolean
  ) {
    this.count = this.count === 0
      ? 0
      : this.count < 10
        ? ' Attention! Product\'s count less then 10' : '> 10';
  }
}
