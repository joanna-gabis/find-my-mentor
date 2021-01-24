import mongoose from 'mongoose'

export const mentorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	stack: {
		type: Array,
		required: true,
	},
})

export const Mentor = mongoose.model('Mentor', mentorSchema)

export const getMentors = async () => {
  try {
    return await Mentor.find()
  } catch (err) {
    return []
  }

}

export const getMentor = async mentorId => await Mentor.findById(mentorId)

export const createMentor = async mentorData => {
  const mentor = new Mentor(mentorData)
  console.log(mentor)
	await mentor.save()
	return mentor._id
}


export const removeMentor = async mentorId => {
	const result = await Mentor.deleteOne({
		_id: mentorId,
	}).exec()

	return result.deletedCount
}
