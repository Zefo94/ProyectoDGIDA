const mongoose = require('mongoose');

const ProcedureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  institutionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution', required: true },
  
  // Campos específicos de Trámites
  requirements: { type: String }, // Guardado como texto separado por comas
  isDigital: { type: Boolean, default: false },
  cost: { type: Number, default: 0 },
  durationDays: { type: Number, default: 1 },
  
  status: { type: String, default: 'Activo' }
}, { timestamps: true });

ProcedureSchema.set('toJSON', { virtuals: true, versionKey: false, transform: (doc, ret) => { ret.id = ret._id; delete ret._id; } });

module.exports = mongoose.model('Procedure', ProcedureSchema);