import mongoose, { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import _Class from './Class';

autoIncrement.initialize(mongoose);

const DisciplinaSchema = new mongoose.Schema(
	{
		code: {
			type: Number,
			required: true,
			unique: true
		},
		department: {
			type: String,
			required: true,
			trim: true
		},
		name: {
			type: String,
			required: true,
			trim: true
		},
		num_credits: {
			type: Number,
			required: true,
		},
		classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

DisciplinaSchema.plugin(autoIncrement.plugin, {
	model: 'Disciplina',
	field: 'id',
	startAt: 1,
	incrementBy: 1,
});

export default mongoose.model('Disciplina', DisciplinaSchema);
