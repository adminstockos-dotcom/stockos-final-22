
export async function POST(req: Request){
  const {empresa, mensaje, wa} = await req.json();
  // Conecta aquí tu WhatsApp Business API
  console.log(`WA API -> Empresa ${empresa} -> ${wa}: ${mensaje}`);
  return Response.json({ok:true, empresa, wa, status:'WA API Ready - Disparo automatico'});
}
