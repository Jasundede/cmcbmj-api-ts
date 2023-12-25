import type BrandType from '../type/brand.type'
import prisma from '../utils/client'

export const addNewBrand = async (payload: BrandType): Promise<any> => {
  return await prisma.brand.create({ data: { ...payload } })
}
