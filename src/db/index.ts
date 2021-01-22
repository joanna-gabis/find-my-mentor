import MongoDB from 'mongodb'

import { DB_ADDRESS, DB_NAME, DB_PORT } from '../config'

// expose DB and connection
let connection
let db

const connectToDB = async () => {
	const url = `mongodb://${DB_ADDRESS}:${DB_PORT}`
	const { MongoClient } = MongoDB

	connection = await MongoClient.connect(url, { useUnifiedTopology: true })
	db = connection.db(DB_NAME)

	return connection
}

export { connectToDB, connection, db }
