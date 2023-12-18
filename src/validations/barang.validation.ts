import Joi from 'joi'
import type BarangType from '../type/barang.type'

export const inputBarangValidation = (
  payload: BarangType
): Joi.ValidationResult<BarangType> => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      'string.base': 'Name must be a type of text',
      'string.empty': 'Name cannot be an empty field',
      'any.required': 'Name is a required field'
    }),
    qty: Joi.number().required().messages({
      'number.base': 'Qty must be a type of number',
      'number.empty': 'Qty cannot be an empty field',
      'any.required': 'Qty is a required field'
    }),
    price: Joi.number().required().messages({
      'number.base': 'Price must be a type of number',
      'number.empty': 'Price cannot be an empty field',
      'any.required': 'Price is a required field'
    })
  })
  return schema.validate(payload, { abortEarly: false })
}
