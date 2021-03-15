import {Request,Response} from 'express';
import {getRepository} from 'typeorm';
import {User} from '../models/User'
class UserController {
  async create(request:Request, response:Response){
    const {name,email} = request.body;
    const body = request.body;
    const userRepository = getRepository(User);
    const user = userRepository.create({name,email})
    return response.send();
  }
}

export{UserController}
