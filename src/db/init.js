// src/db/init.js
import mongoose from 'mongoose'

export async function initDatabase() {
  const DATABASE_URL = process.env.DATABASE_URL
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined')
  }

  mongoose.connection.on('open', () => {
    console.log('Successfully connected to the database.', DATABASE_URL)
  })

  mongoose.connection.on('error', (err) => {
    console.error('Database connection error:', err)
  })

  const connection = await mongoose.connect(DATABASE_URL)
  return connection
}
