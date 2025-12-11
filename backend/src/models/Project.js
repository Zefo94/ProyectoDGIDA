const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  
  // Gestión de Proyecto
  manager: { type: String },
  progress: { type: Number, min: 0, max: 100, default: 0 },
  startDate: { type: Date },
  endDate: { type: Date },
  
  status: { type: String, default: 'Activo' }
}, { timestamps: true });

ProjectSchema.set('toJSON', { virtuals: true, versionKey: false, transform: (doc, ret) => { ret.id = ret._id; delete ret._id; } });

module.exports = mongoose.model('Project', ProjectSchema);