import mongoose from 'mongoose'

interface Options {
  mongoUrl: string
  dbName: string
}

export class MongoDatabase {
  static async connect (options: Options): Promise<boolean> {
    const { mongoUrl, dbName } = options

    try {
      await mongoose.connect(mongoUrl, {
        dbName
      })

      console.log('Mongo connected')
      return true
    } catch (error) {
      console.log('Mongo connection failed')
      throw error
    }
  }
}
