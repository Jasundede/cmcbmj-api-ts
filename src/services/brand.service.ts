import type BrandType from '../type/brand.type'
import prisma from '../utils/client'

export const getAllBrand = async (): Promise<any> => {
  return await prisma.brand.findMany()
}

export const addNewBrand = async (payload: BrandType): Promise<any> => {
  return await prisma.brand.create({
    data: { ...payload }
  })
}

export const getSingleBrand = async (id: string): Promise<any> => {
  return await prisma.brand.findUnique({ where: { id } })
}

export const updateSingleBrand = async (
  id: string,
  payload: BrandType
): Promise<any> => {
  return await prisma.brand.update({
    where: {
      id
    },
    data: { ...payload }
  })
}

export const getExistBrand = async (brandCode: string): Promise<any> => {
  return await prisma.brand.findUnique({ where: { brandCode } })
}

export const deleteBrandById = async (id: string): Promise<any> => {
  return await prisma.brand.delete({ where: { id } })
}
