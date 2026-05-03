import mongoose from "mongoose";

// definindo o schema do bloqueio de data, com os campos professional, date e reason, todos obrigatórios
const blockedDateSchema = new mongoose.Schema({
  professional: { type: mongoose.Schema.Types.ObjectId, ref: "Professional", required: true },
  date: { type: Date, required: true },
  reason: { type: String, required: true },
})

export default mongoose.model("BlockedDate", blockedDateSchema);