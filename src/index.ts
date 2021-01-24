import express, { Response, Request } from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import cors from 'cors'
import morgan from 'morgan'

import { connectToDB } from './models'

// Controllers
import { rootRouter } from './controllers/RootController'
import { mentorRouter } from './controllers/MentorController'

// run app
;(async function runApp() {
	const app = express()

	// Add basic middlewares
	app.use(cors())
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	app.use(morgan('combined'))
	app.use(cookieSession({ keys: ['testkey'] }))

	app.use('/', rootRouter)
	app.use('/', mentorRouter)

	// Connect to the database
	await connectToDB()

	app.listen('3002', () => {
		console.log('listening on port 3002')
	})
})()
