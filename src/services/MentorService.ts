import { getMentors, getMentor, createMentor } from '../models/Mentor'

export class MentorService {
	async getAllMentors() {
		return await getMentors()
  }

  async getMentorById(id) {
    return await getMentor(id)
  }

  async createMentor(mentorData) {
    try {
      // validate if mentorData has all properties
      return await createMentor(mentorData)

    } catch (err) {

    }
  }
}
