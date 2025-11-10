export async function getAPIConfig() {
  return {
    paymentPublicKey: process.env.NEXT_PUBLIC_PAYMENT_PUBLIC_KEY || "",
    appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  }
}
