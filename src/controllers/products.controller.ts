import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/products.service';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const products = req.body;

    const productsCreated = await this.productService.create(products);
    res.status(StatusCodes.CREATED).json(productsCreated);
  };
}

export default ProductsController;