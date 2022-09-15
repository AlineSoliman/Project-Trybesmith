import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Orders from '../interfaces/orders.interface';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Orders[]> {
    const orders = await this.model.getAll();
    console.log(orders);
    
    return orders;
  }
}

export default OrdersService;