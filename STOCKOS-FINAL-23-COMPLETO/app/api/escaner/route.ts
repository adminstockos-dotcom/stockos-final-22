
export async function POST(req: Request){
  const body = await req.json();
  // Aqui conectas N8N: guarda enlaces, dispara escaneo 7AM/2PM
  console.log('Escáner request', body);
  return Response.json({ok:true, msg:'Escáner guardado - Empresa aislada - 7AM/2PM programado', empresa: body.empresa});
}
export async function GET(){
  return Response.json({status:'Escáner A/B/C Ready', horario:['7AM','2PM'], webhook:'/api/n8n'});
}
