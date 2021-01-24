import { get, post, patch, del, controller, bodyValidator } from './controllerDecorators'
import express, { Request, Response } from 'express'
import { MentorService } from '../services/MentorService'

export const mentorRouter = express.Router()

const mentorService = new MentorService()

@controller('/mentors', mentorRouter)
export class MentorController {
	@get('')
	async getMentors(req: Request, res: Response): void {
		const mentors = await mentorService.getAllMentors()
		res.send(mentors)
	}

	@get('/:id')
	@bodyValidator('name', 'location', 'stack')
	async getMentor(req: Request, res: Response) {
		const { id } = req.params
    console.log(id)
    const mentor = await mentorService.getMentorById(id)
		res.send(mentor)
	}

	@post('')
	async addMentor(req: Request, res: Response) {
    const { name, location, stack } = req.body
    const mentorId = await mentorService.createMentor({ name, location, stack })
		// const { id } = req.params
		// console.log(id)

		res.send(mentorId)
	}

	@patch('/:id')
	editMentor(req: Request, res: Response) {
		const { id } = req.params
		console.log(id)
		res.send(`Patch mentor`)
	}

	@del('/:id')
	removeMentor(req: Request, res: Response) {
		const { id } = req.params
		console.log(id)
		res.send(`Delete mentor`)
	}
}
