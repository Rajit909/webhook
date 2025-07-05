import crypto from "crypto";

const verifySignature = (payload: string, signature: string, secret: string): boolean => {
  const hash = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return hash === signature;
};

export default verifySignature;
