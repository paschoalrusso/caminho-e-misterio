import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const isPreview = url.hostname.includes('vercel.app') && !url.hostname.startsWith('www.')
  if (!isPreview) return NextResponse.next()

  const auth = req.headers.get('authorization')
  const PASS = process.env.PREVIEW_PASS || 'batismo2025'
  const expected = 'Basic ' + Buffer.from('admin:' + PASS).toString('base64')
  if (auth === expected) return NextResponse.next()

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Preview"' },
  })
}
