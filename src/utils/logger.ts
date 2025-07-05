import mongoose from 'mongoose';

const webhookSchema = new mongoose.Schema({
  method: String,
  headers: Object,
  query: Object,
  body: mongoose.Schema.Types.Mixed,
  timestamp: { type: Date, default: Date.now }
});

const WebhookLog = mongoose.model('WebhookLog', webhookSchema);

async function logToDatabase(data: any) {
  const log = new WebhookLog(data);
  await log.save();
}

export { logToDatabase, WebhookLog };
