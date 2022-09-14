import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const users = req.body;

    const usersCreated = await this.usersService.create(users);
    res.status(StatusCodes.CREATED).json(usersCreated);
  };
}

export default UsersController;