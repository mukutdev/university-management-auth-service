import { User } from './user.schema'

export const findLastUserId = async () => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  console.log(lastUserId)
  return lastUserId?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const lastId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return lastId
}
