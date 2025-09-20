# Caminho e Mistério — Next.js + Tailwind

## Como usar
1. Instale dependências:
   ```bash
   npm install
   ```
2. Rodar local:
   ```bash
   npm run dev
   # http://localhost:3000
   ```
3. Editar PDFs/links em `lib/data.ts`.
4. Deploy na Vercel:
   - Suba para o GitHub e importe no painel da Vercel.
   - (Opcional) Configure `PREVIEW_PASS` nas Environment Variables para proteger a URL de preview.
5. Domínio: conecte seu domínio no painel da Vercel.

## Onde editar conteúdo
- `components/CaminhoEMisterio.tsx` → estrutura e layout.
- `lib/data.ts` → lista de PDFs e Links úteis.
- Paleta A (primária `--vinho`) em `app/globals.css`.  Ajuste se quiser variáveis para `--dourado` e `--grafite`.
