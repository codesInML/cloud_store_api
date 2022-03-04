import * as UserDAL from '../DAL/user.dal'
import { User } from "@prisma/client"

export async function createUser (payload: User): Promise<User> {
    return await UserDAL.create(payload)
}

export async function validatePassword({email, password}: {
    email: string
    password: string
}): Promise<User | false> {
    const user = await UserDAL.findOne(email)

    if (!user) return false

    const isValid = await UserDAL.validatePassword(password, user.password)

    if (!isValid) return false

    return user
}