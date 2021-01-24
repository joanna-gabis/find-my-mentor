import MongoDB from 'mongodb'
import mongoose from 'mongoose'

import { DB_ADDRESS, DB_NAME, DB_PORT } from '../config'

// expose DB and connection
let connection
let db

const connectToDB = async () => {
	const url = `mongodb://${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`
	const { MongoClient } = MongoDB

	// connection = await MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    // db = connection.db(DB_NAME)


	return connection
}

export { connectToDB, connection, db }
