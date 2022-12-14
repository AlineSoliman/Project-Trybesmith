import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import ProductsController from './controllers/products.controller';
import UsersController from './controllers/users.controller';
import OrdersController from './controllers/orders.controller';

const app = express();

app.use(express.json());

const productsController = new ProductsController();

const usersController = new UsersController();

const ordersController = new OrdersController();

app.get('/products', productsController.getAll);

app.post('/products', productsController.create);

app.post('/users', usersController.create);

app.get('/orders', ordersController.getAll);

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

export default app;
