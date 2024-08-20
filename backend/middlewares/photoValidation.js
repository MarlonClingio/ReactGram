const { body } = require("express-validator")

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O Título é obrigátorio!")
      .isString()
      .withMessage("O Título é obrigátorio!")
      .isLength({ min: 3 })
      .withMessage("O Título deve possuir no mínino 3 caracteres."),
    body("image")
      .custom((value, { req }) => {
        if (!req.File) {
          throw new Error("A imagem é obrigátoria")
        }
        return true
      })
  ]
}

const photoUpdateValidation = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("O Título é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres.")
  ]
}

const commentValidation = () => {
  return [
    body("comment")
    .isString()
    .withMessage("O comentário é obrigátorio.")
  ]
}

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation
}