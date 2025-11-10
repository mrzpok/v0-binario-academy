export async function GET() {
  return Response.json({
    ok: true,
    service: "academy-frontend",
    ts: Date.now(),
  })
}
