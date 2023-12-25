import type InkType from '../type/ink.type'
import prisma from '../utils/client'

export const getAllData = async (): Promise<any> => {
  return await prisma.ink.findMany()
}

export const addData = async (payload: InkType): Promise<any> => {
  return await prisma.ink.create({ data: { ...payload } })
}

export const getSingleInk = async (id: string): Promise<any> => {
  return await prisma.ink.findUnique({ where: { id } })
}

export const getInkExist = async (inkCode: string): Promise<any> => {
  return await prisma.ink.findUnique({ where: { inkCode } })
}
export const updateSingleInk = async (
  id: string,
  payload: InkType
): Promise<any> => {
  return await prisma.ink.update({
    where: {
      id
    },
    data: { ...payload }
  })
}

export const deleteSingleInk = async (id: string): Promise<any> => {
  return await prisma.ink.delete({
    where: { id }
  })
}
