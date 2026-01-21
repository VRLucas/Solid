import { CartItem } from '../interfaces/cartItem';
export class Shop {
  private readonly _itens: CartItem[] = [];

  addItem(item: CartItem): void {
    this._itens.push(item);
  }
  removeItem(index: number): void {
    this._itens.splice(index, 1);
  }
  get items(): Readonly<CartItem[]> {
    return this._itens;
  }
  total(): number {
    return +this._itens.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  clear(): void {
    console.log('Clearing shopping cart...');
    this._itens.length = 0;
  }
}
