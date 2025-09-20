export const metadata = {
  title: 'Caminho e Mistério',
  description: 'Catequese de adultos: clara, fiel e experiencial.'
}
import './globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
