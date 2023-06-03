import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.schema'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  try {
    // Set default user password if not provided
    if (!user.password) {
      user.password = config.default_user_pass as string
    }

    const id = await generateUserId()
    user.id = id

    const createdUser = await User.create(user)

    if (!createdUser) {
      throw new Error('Some problem in creating the account')
    }

    return createdUser
  } catch (error) {
    throw new Error('Unable to create user') // Rethrow the error to be caught by the error handler
  }
}

export default {
  createUser,
}
