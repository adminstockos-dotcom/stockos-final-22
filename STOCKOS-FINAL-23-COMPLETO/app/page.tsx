
export default function Page(){
  if(typeof window!=='undefined'){ window.location.href='/landing-final.html'; }
  return (<iframe src="/landing-final.html" style={{width:'100%',height:'100vh',border:'none'}} title="STOCKOS Landing"/>)
}
