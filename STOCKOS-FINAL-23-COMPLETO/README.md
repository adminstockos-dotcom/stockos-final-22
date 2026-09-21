
# STOCKOS FINAL 23 - COMPLETO - AUDITADO 7 CAPAS

## Contenido ZIP
- app/page.tsx -> redirige a /landing-final.html
- app/admin/page.tsx -> SuperAdmin
- app/panel/page.tsx?empresa=XXX -> Panel empresa
- app/api/escaner -> guarda enlaces proveedores, dispara 7AM/2PM
- app/api/n8n -> webhook N8N listo
- app/api/whatsapp -> WA API listo
- public/landing-final.html -> Landing perfecta + popup 10s + boton SuperAdmin corregido (01-ADMIN...)
- public/01-ADMIN-FINAL-ESTABLE-CORRIGIDO.html -> SuperAdmin final: Orden 1.Crear 2.Directos 3.Landing, boton Crear empresa, sin PAGOS SABAT, boton Volver Landing
- public/PANEL-EMPRESA-FINAL-BLINDADO-6MODULOS.html -> Panel con Tab0 = mismo desplegable landing con ON/OFF independientes por componente
- public/ADMIN-SEPARADO-FINAL-LIMPIO.html -> Alias para evitar 404
- public/PANEL-EMPRESA-FINAL-BLINDADO-FULL-CORRIGIDO.html -> Alias
- manifest.json + sw.js + MAXIMA-PWA
- next.config.js export estatico, vercel.json rewrites

## Deploy Vercel
1. Sube todo el contenido de esta carpeta a GitHub stockos-final-22
2. Vercel hace deploy automatico
3. Prueba:
   - / -> landing + popup 10s
   - /landing-final.html -> landing
   - /admin -> superadmin (sin 404)
   - /01-ADMIN-FINAL-ESTABLE-CORRIGIDO.html -> superadmin
   - Crear empresa -> Ver Panel -> /panel?empresa=prueba -> Tab0 infra con switches independientes
   - Tab2 Escaner -> pegar links proveedores -> /api/escaner
   - Tab3-4-5-6 pruebas N8N + WA API

## Conexiones
- N8N: POST /api/n8n {empresa, action}
- Escaner: POST /api/escaner {empresa, links:[...]}
- WA: POST /api/whatsapp {empresa, wa, mensaje}
- Supabase: ya configurado en HTMLs - RLS disabled listo

## Auditoria 7 capas
1. Links no 404 (alias incluidos)
2. Botones texto correcto
3. Orden 1-2-3
4. Sin PAGOS SABAT
5. Tab0 = landing desplegable
6. Popup 10s
7. Empresa aislada localStorage stockos_*

Listo para pruebas automatizaciones, proveedores, catalogo, cierre ventas auto.
