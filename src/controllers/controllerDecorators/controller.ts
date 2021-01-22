import 'reflect-metadata'
import { Methods } from './Methods'
import { MetadataKeys } from './MetadataKeys'
import express, { NextFunction, RequestHandler, Request, Response } from 'express'

function bodyValidators(keys: string[]): RequestHandler {
	return function (req: Request, res: Response, next: NextFunction) {
		if (!req.body) {
			res.status(422).send('Invalid request')
			return
		}

		for (let key of keys) {
			if (!req.body[key]) {
				res.status(422).send('Invalid request')
				return
			}
		}

		next()
	}
}

export function controller(routePrefix: string, router: express.Router) {
	return function (target: Function) {
		for (let key in target.prototype) {
			const routeHandler = target.prototype[key]
			const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
			const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key)
			const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || []
			const requiredProperties = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || []

			const validateRequest = bodyValidators(requiredProperties)

			if (typeof path !== 'undefined') {
				router[method](routePrefix + path, ...middlewares, validateRequest, routeHandler)
			}
		}
	}
}
