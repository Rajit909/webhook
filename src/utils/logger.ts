import mongoose from 'mongoose';

const webhookSchema = new mongoose.Schema({
  requestId: String,
  timestamp: { type: Date, default: Date.now },
  method: String,
  path: String,
  headers: Object,
  query: Object,
  body: mongoose.Schema.Types.Mixed,
});

const WebhookLog = mongoose.model('WebhookLog', webhookSchema);

async function logToDatabase(data: any) {
  const log = new WebhookLog(data);
  await log.save();
}

export { logToDatabase, WebhookLog };
