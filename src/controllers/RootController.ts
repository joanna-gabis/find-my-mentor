import { get, controller } from './controllerDecorators'
import express, { Request, Response } from 'express'

export const rootRouter = express.Router()

@controller('', rootRouter)
export class RootController {
	@get('')
	getIndex(req: Request, res: Response): void {
		res.send(`<div>Index</div>`)
	}

	@get('/login')
	getLogin(req: Request, res: Response): void {
		res.send(`<div>Login</div>`)
	}
}
