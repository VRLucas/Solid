type Product = {
  name: string;
  price: number;
};
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _itens: Product[] = [];
  private _orderStatus: OrderStatus = 'open';
  addItem(item: Product): void {
    this._itens.push(item);
  }
  removeItem(index: number): void {
    this._itens.splice(index, 1);
  }
  get items(): Readonly<Product[]> {
    return this._itens;
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  total(): number {
    return +this._itens.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }
  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido foi recebido, o total foi de ${this.total()}`);
    this.saveOrder();
    this.clear();
  }
  isEmpty(): boolean {
    return this._itens.length === 0;
  }
  sendMessage(msg: string): void {
    console.log('Message sent:', msg);
  }
  saveOrder(): void {
    console.log('Order saved successfully');
  }
  clear(): void {
    console.log('Clearing shopping cart...');
    this._itens.length = 0;
  }
}
const cart = new ShoppingCart();
cart.addItem({ name: 'Pen', price: 3.49 });
cart.addItem({ name: 'Book', price: 12.99 });
cart.addItem({ name: 'pencil', price: 1.3 });
cart.addItem({ name: 'Notebook', price: 12.99 });
console.log(cart.items);
console.log(cart.orderStatus);
cart.checkout();
console.log(cart.orderStatus);
