import { OrderStatus } from '../interfaces/order-status';
import { Shop } from './shop';
import { Message } from '../services/msg';
import { Persistence } from '../services/persisten';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: Shop,
    private readonly message: Message,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this.message.sendMessage(
      `Seu pedido foi recebido, o total foi de ${this.cart.total()}`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
