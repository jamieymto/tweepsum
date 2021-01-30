import {CommonRoutesConfig} from '../common/common.routes.config';
import TweepSumGeneratorController from '../controllers/tweepSumGeneratorController';
import express from 'express';

export class TweepSumRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TweepSumRoutes');
    }

    configureRoutes() {
        this.app.route('/tweepsum')
            .post((req: express.Request, res: express.Response, next: express.NextFunction) => 
                TweepSumGeneratorController.create(req, res, next)
            );
        return this.app;
    }
}