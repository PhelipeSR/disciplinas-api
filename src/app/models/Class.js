import mongoose, { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

autoIncrement.initialize(mongoose);

const ClassSchema = new mongoose.Schema(
	{
		code: {
			type: String,
			required: true,
			uppercase: true,
			trim: true
		},
		techer: {
			type: String,
			required: true,
			trim: true
		},
		schedule: {
			type: String,
			required: true,
			trim: true
		},
		disciplina: { type: Schema.Types.ObjectId, ref: 'Disciplina' },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

ClassSchema.plugin(autoIncrement.plugin, {
	model: 'Class',
	field: 'id',
	startAt: 1,
	incrementBy: 1,
});

export default mongoose.model('Class', ClassSchema);
