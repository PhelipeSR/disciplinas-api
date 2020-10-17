import { check, validationResult } from 'express-validator'

const disciplinaValidation = [
	check('code')
		.exists()
		.withMessage('Código não enviado.')
		.not()
		.isEmpty()
		.withMessage('Código não pode ser vazio.')
		.isNumeric()
		.withMessage('Código precisa ser um número.'),

		check('department')
		.exists()
		.withMessage('Departamento não enviado.')
		.not()
		.isEmpty()
		.withMessage('Departamento não pode ser vazio.'),

		check('name')
		.exists()
		.withMessage('Nome não enviado.')
		.not()
		.isEmpty()
		.withMessage('Nome não pode ser vazio.'),

		check('num_credits')
			.exists()
			.withMessage('Número de créditos não enviado.')
			.not()
			.isEmpty()
			.withMessage('Número de créditos não pode ser vazio.')
			.isInt()
			.withMessage('Número de créditos precisa ser um número inteiro.'),

		function (req, res, next) {
			try {
				const myValidationResult = validationResult.withDefaults({
					formatter: (error) => error.msg
				});

				myValidationResult(req).throw();
				return next();
		} catch (error) {
			return res.status(422).json({ error: error.mapped() });
		}
	}
]

module.exports = disciplinaValidation;
