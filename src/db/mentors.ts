import Mongo from 'mongodb'
import { db } from './index'

const { ObjectID } = Mongo
const getCollection = () => db.collection('mentors')

export const addOrder = async mentor => {
	const result = await getCollection().insertOne(mentor)
	return result.insertedId
}
