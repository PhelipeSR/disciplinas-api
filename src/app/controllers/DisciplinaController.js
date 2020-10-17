import Disciplina from '../models/Disciplina';
import _Class from '../models/Class';


class DisciplinaController {
	async index(req, res) {
		const searchText = req.query.search ?? '';
		const page = req.query.page ?? 0;
		const numElements = Number(req.query.length) ?? 10;

		try {
			const disciplinas = await Disciplina.find({
				$or: [
					// { code: { '$regex': searchText, '$options': 'i' } },
					{ name: { '$regex': searchText, '$options': 'i' } },
					{ department: { '$regex': searchText, '$options': 'i' } }
				]
			}).populate('classes').limit(numElements).skip(numElements * page).sort({ name: 'asc' });

			return res.status(200).json(disciplinas);
		} catch (error) {
			console.log(error)
			return res.status(500).json({ error: { generic: error } });
		}
	}

	async show(req, res) {
		const { id } = req.params;

		try {
			const disciplina = await Disciplina.findOne({ id }).populate('classes');

			if (!disciplina)
				return res.status(422).json({ error: { generic: 'Disciplina não encontrada.' } });

			return res.status(200).json(disciplina);
		} catch (error) {
			return res.status(500).json({ error: { generic: error } });
		}
	}

	async store(req, res) {
		const { code, department, name, num_credits, classes } = req.body;

		try {
			if (await Disciplina.findOne({ code }))
				return res.status(400).json({ error: { generic: 'Código já cadastrado.' } });

			const disciplina = await Disciplina.create({ code, department, name, num_credits });

			await Promise.all(classes.map(async _class => {
				const disciplinaClass = new _Class({ ..._class, disciplina: disciplina._id });
				await disciplinaClass.save();
				disciplina.classes.push(disciplinaClass);
			}));

			await disciplina.save();

			return res.status(201).json(disciplina);
		} catch (error) {
			return res.status(500).json({ error: { generic: error } });
		}
	}

	async update(req, res) {
		const { id } = req.params;
		const { code, department, name, num_credits, classes } = req.body;

		try {
			if (await Disciplina.findOne({ id, code: { $ne: code } }))
				return res.status(400).json({ error: { generic: 'Código já cadastrado.' } });

			const disciplinaToUpdate = await Disciplina.findOneAndUpdate({ id }, {
				code,
				department,
				name,
				num_credits
			}, { new: true });

			if (!disciplinaToUpdate)
				return res.status(422).json({ error: { generic: 'Disciplina não encontrada.' } });

			disciplinaToUpdate.classes = [];
			await _Class.deleteMany({disciplina: disciplinaToUpdate._id})

			await Promise.all(classes.map(async _class => {
				const disciplinaClass = new _Class({ ..._class, disciplina: disciplinaToUpdate._id });
				await disciplinaClass.save();
				disciplinaToUpdate.classes.push(disciplinaClass);
			}));

			await disciplinaToUpdate.save();

			return res.status(200).json(disciplinaToUpdate);
		} catch (error) {
			return res.status(500).json({ error: { generic: error } });
		}
	}

	async delete(req, res) {
		const { id } = req.params;

		try {
			const disciplinaToDelete = await Disciplina.findOneAndDelete({ id });

			if (!disciplinaToDelete)
				return res.status(422).json({ error: { generic: 'Disciplina não encontrada.' } });

			await _Class.deleteMany({disciplina: disciplinaToDelete._id});

			return res.status(204).json();
		} catch (error) {
			return res.status(500).json({ error: { generic: error } });
		}
	}
}

export default new DisciplinaController();
