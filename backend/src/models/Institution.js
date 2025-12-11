const mongoose = require('mongoose');

// Modelo actualizado para Sector SALUD
const InstitutionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String },
  sector: { type: String, required: true }, // Obligatorio
  code: { type: String, required: true, unique: true, uppercase: true }, 
  status: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' }
}, { timestamps: true });

InstitutionSchema.set('toJSON', { virtuals: true, versionKey: false, transform: (doc, ret) => { ret.id = ret._id; delete ret._id; } });

module.exports = mongoose.model('Institution', InstitutionSchema);