import { PrismaClient, User } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const {user} = prisma

export const create =  async (input: User): Promise<User> => {
    return await user.create({data: input})
}

export const findOne = async (input: string): Promise<User | null> => {
    return (input.includes("@")) ? await user.findUnique({ where: { email: input } }) : await user.findUnique({ where: { id: input } })
}

export const validatePassword = async function (password: string, pwd: string): Promise<boolean> {
    return await bcrypt.compare(password, pwd)
}