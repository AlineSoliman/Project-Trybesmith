import { Pool } from 'mysql2/promise';
import Products from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Products[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Products[];
  }
}