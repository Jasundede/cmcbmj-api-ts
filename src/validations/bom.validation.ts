import Joi from 'joi'
import type BomType from '../type/bom.type'

export const addBomValidation = (
  payload: BomType
): Joi.ValidationResult<BomType> => {
  const schema = Joi.object({
    brandId: Joi.string().required().messages({
      'string.base': 'Brand Id must be a type of text',
      'string.empty': 'Brand Id cannot be an empty field',
      'any.required': 'Brand Id is a required field'
    }),
    inkId: Joi.string().required().messages({
      'string.base': 'Ink Id must be a type of text',
      'string.empty': 'Ink Id cannot be an empty field',
      'any.required': 'Ink Id is a required field'
    }),
    stdQty: Joi.number().allow(null, '').default(0.5).messages({
      'number.base': 'Std Qty Type must be a type of number'
    }),
    actQty: Joi.number().allow(null, '').default(0.5).messages({
      'number.base': 'Act Qty Type must be a type of number'
    })
  })
  return schema.validate(payload, { abortEarly: false })
}
