
export default function Page(){
  if(typeof window !== 'undefined'){
    window.location.href = '/landing-final.html';
    return null as any;
  }
  return (
    <html><head><meta httpEquiv="refresh" content="0;url=/landing-final.html" /></head><body>Cargando STOCKOS...</body></html>
  );
}
