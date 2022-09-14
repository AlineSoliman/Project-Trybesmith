import jwt = require('jsonwebtoken');
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import Users from '../interfaces/users.interface';
import Token from '../interfaces/token.interface';

const secret = 'segredo';

class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(users: Users): Promise<Token> {
    await this.model.create(users);
    const createToken = jwt.sign({ users }, secret);
    return { token: createToken };
  }
}

export default UserService;