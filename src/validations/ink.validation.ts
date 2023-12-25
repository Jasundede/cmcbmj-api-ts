import Joi from 'joi'
import type InkType from '../type/ink.type'

export const addInkValidation = (
  payload: InkType
): Joi.ValidationResult<InkType> => {
  const schema = Joi.object({
    inkCode: Joi.string().required().messages({
      'string.base': 'Ink Code must be a type of text',
      'string.empty': 'Ink Code cannot be an empty field',
      'any.required': 'Ink Code is a required field'
    }),
    description: Joi.string().required().messages({
      'string.base': 'description must be a type of text',
      'string.empty': 'description cannot be an empty field',
      'any.required': 'description is a required field'
    }),
    viscosity: Joi.string()
      .allow(null, '')
      .messages({
        'string.base': 'Viscosity must be a type of text'
      })
      .default('17-18 Second'),
    toner: Joi.array()
      .allow(null, '')
      .messages({
        'string.base': 'Toner must be a type of text'
      })
      .default([]),
    additive: Joi.array()
      .allow(null, '')
      .messages({
        'string.base': 'Additive must be a type of text'
      })
      .default([]),
    medium: Joi.array()
      .allow(null, '')
      .messages({
        'string.base': 'Medium must be a type of text'
      })
      .default([])
  })
  return schema.validate(payload, { abortEarly: false })
}
