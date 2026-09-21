
export async function POST(req: Request){
  const data = await req.json();
  // Webhook N8N -> WA API -> Disparo + Link + Despachos
  return Response.json({ok:true, received:data, next:'WA API Disparo hora pico'});
}
