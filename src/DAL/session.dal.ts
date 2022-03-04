import { PrismaClient, Session } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const {session} = prisma

export const create = async (
  user_id: string,
  userAgent: string
): Promise<Session> => {
  return await session.create({data: { user_id, userAgent }});
};

export const findOne = async (id: string): Promise<Session | null> => {
  return await session.findUnique({ where: { id } });
};

export const findAll = async (
  user_id: string,
  valid: boolean
): Promise<Session[]> => {
  return await session.findMany({ where: { user_id, valid } });
};

export const update = async (
  user_id: string,
  valid: boolean
): Promise<Session> => {
  return await session.update({ where: { user_id }, data: { valid } });
};
