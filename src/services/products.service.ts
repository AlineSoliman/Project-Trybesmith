import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Products from '../interfaces/products.interface';

class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Products[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;