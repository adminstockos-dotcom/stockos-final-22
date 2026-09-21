
"use client";
import { useSearchParams } from 'next/navigation';
export default function PanelPage(){
  const params = useSearchParams();
  const empresa = params?.get('empresa') || 'virtualclass';
  return (<iframe src={`/PANEL-EMPRESA-FINAL-BLINDADO-6MODULOS.html?empresa=${encodeURIComponent(empresa)}`} style={{width:'100%',height:'100vh',border:'none'}} title="Panel Empresa"/>)
}
