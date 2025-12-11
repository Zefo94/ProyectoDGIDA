const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  institutionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution', required: true },
  
  // Campos específicos de negocio
  budget: { type: Number, default: 0 },
  startDate: { type: Date },
  
  status: { type: String, default: 'Activo' }
}, { timestamps: true });

ProgramSchema.set('toJSON', { virtuals: true, versionKey: false, transform: (doc, ret) => { ret.id = ret._id; delete ret._id; } });

module.exports = mongoose.model('Program', ProgramSchema);