import Joi from 'joi'
import type BrandType from '../type/brand.type'

export const addBrandValidation = (
  payload: BrandType
): Joi.ValidationResult<BrandType> => {
  const schema = Joi.object({
    brandCode: Joi.string().required().messages({
      'string.base': 'Brand Code must be a type of text',
      'string.empty': 'Brand Code cannot be an empty field',
      'any.required': 'Brand Code is a required field'
    }),
    description: Joi.string().required().messages({
      'string.base': 'Description must be a type of text',
      'string.empty': 'Description cannot be an empty field',
      'any.required': 'Description is a required field'
    }),
    endUser: Joi.string().allow(null, '').messages({
      'string.base': 'End User must be a type of text'
    }),
    family: Joi.string().allow(null, '').messages({
      'string.base': 'Family must be a type of text'
    }),
    criteria: Joi.string().allow(null, '').default('HINGE LID BOARD').messages({
      'string.base': 'Criteria must be a type of text'
    }),
    substrate: Joi.string().allow(null, '').messages({
      'string.base': 'Substrate must be a type of text'
    }),
    consType: Joi.string().allow(null, '').default('NML').messages({
      'string.base': 'Consignment Type must be a type of text'
    }),
    bufferRatio: Joi.number().allow(null, '').default(1.1).messages({
      'number.base': 'Consignment Type must be a type of number'
    })
  })
  return schema.validate(payload, { abortEarly: false })
}
