import { get, controller } from './controllerDecorators'
import express, { Request, Response } from 'express'
import { MentorService } from '../services/MentorService'

export const mentorRouter = express.Router()

const mentorService = new MentorService()

@controller('/mentors', mentorRouter)
export class MentorController {
	@get('')
	getMentors(req: Request, res: Response): void {
		res.send(`All mentors`)
	}

	@get('/:id')
	getMentor(req: Request, res: Response): void {
		const { id } = req.params
		console.log(id)
		res.send(`Mentor by id`)
	}
}
