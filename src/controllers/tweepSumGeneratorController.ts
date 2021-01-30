import { Request, Response, NextFunction } from 'express';
import LoremIpsumGenerator from '../services/LoremIpsumGenerator';

class TweepSumGeneratorController {
    constructor() {    
      this.create = this.create.bind(this);
    }

    async create(req: Request, res: Response, next: NextFunction) {
      try {
        let {username} = req.body;
        let response = await LoremIpsumGenerator.generate(username);
        res.status(200).send(response);
      } catch (err) {
        next(err);
      }
      
    }
}

export default new TweepSumGeneratorController();