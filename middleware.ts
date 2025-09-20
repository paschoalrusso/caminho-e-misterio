import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const hostname = req.nextUrl.hostname

  // ⚠️ NÃO proteger o domínio de produção:
  if (
    hostname === 'caminho-e-misterio.vercel.app'
    // || hostname === 'www.seu-dominio.com.br' // (quando tiver domínio próprio, pode liberar aqui também)
  ) {
    return NextResponse.next()
  }

  // ✅ Opcional: manter proteção só para PREVIEWS (subdomínios com “-” gerados pela Vercel)
  const isPreviewSubdomain = hostname.includes('-') && hostname.endsWith('.vercel.app')
  if (!isPreviewSubdomain) {
    return NextResponse.next()
  }

  // Proteção básica para PREVIEW
  const auth = req.headers.get('authorization')
  const PASS = process.env.PREVIEW_PASS || 'batismo2025'
  const expected = 'Basic ' + Buffer.from('admin:' + PASS).toString('base64')
  if (auth === expected) return NextResponse.next()

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Preview"' },
  })
}
