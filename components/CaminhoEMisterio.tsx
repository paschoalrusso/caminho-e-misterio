'use client';
import { useState } from 'react';
import { pdfs, linksExternos } from '@/lib/data';
import { historiasLinks } from "@/lib/data";


export default function CaminhoEMisterio() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: 'Início', href: '#inicio' },
    { label: 'Percursos', href: '#percursos' },
    { label: 'Textos & Materiais', href: '#materiais' },
    { label: 'Agenda & Música', href: '#agenda' },
    { label: 'Contato', href: '#contato' },
  ];

  const percursos = [
    { icon: '🕯️', title: 'Mistagogia para Adultos', desc: 'Itinerários que integram doutrina, oração e experiência litúrgica (RICA).' },
    { icon: '📖', title: 'Doutrina & Catequese', desc: 'Credo, Mandamentos, Sacramentos e Oração (CIC) em linguagem clara.' },
    { icon: '⛪', title: 'Liturgia & Música', desc: 'Missa, Ano Litúrgico e seleção musical (IGMR/Ritual Romano) com listas de cânticos.' },
    { icon: '🧰', title: 'Recursos de Estudo', desc: 'Planos, fichas, roteiros de encontros e bibliografia comentada.' },
  ];

  const agenda = [
    { when: 'Percurso 1 — Querigma & Fé', what: '3 encontros: Deus existe? Deus me ama? Por que cremos que Jesus é o Filho de Deus?' },
    { when: 'Percurso 2 — Sacramentos', what: 'Batismo, Eucaristia e Reconciliação com vivências comunitárias.' },
    { when: 'Percurso 3 — Vida de Oração', what: 'Lectio Divina e introdução à Liturgia das Horas para leigos.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl" style={{ backgroundColor: 'var(--vinho)' }} />
            <span className="font-semibold tracking-tight">Caminho & Mistério</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-sm hover:text-slate-900 transition">{n.label}</a>
            ))}
            <a href="#contato" className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm font-medium transition"
               style={{ borderColor: 'var(--vinho)', color: 'var(--vinho)' }}
            >
              Assine a newsletter
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2"
                  onClick={() => setOpen(v => !v)} aria-label="Abrir menu">☰</button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 px-4 pb-3">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-sm">{n.label}</a>
            ))}
          </div>
        )}
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Catequese para adultos: <span className="underline decoration-slate-300">clara</span>,<br/>
              <span className="underline decoration-slate-300">fiel</span> e <span className="underline decoration-slate-300">experiencial</span>.
            </h1>
            <p className="mt-5 text-slate-600 md:text-lg max-w-xl">
              Conteúdo bíblico, doutrinário e litúrgico em linguagem acessível, com roteiros de encontros e materiais para comunidades.
              Mistagogia: da compreensão à vida sacramental.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#percursos" className="rounded-xl text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md"
                 style={{ backgroundColor: 'var(--vinho)' }}>Ver percursos</a>
              <a href="#materiais" className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-slate-50"
                 style={{ borderColor: 'var(--vinho)', color: 'var(--vinho)' }}>Acessar materiais</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
              <span>Sagrada Escritura • Tradição • Magistério • CIC • IGMR • RICA</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-3xl border border-slate-200 shadow-sm bg-white p-4">
              <div className="h-full w-full rounded-2xl grid place-items-center bg-slate-100">
                <div className="text-center">
                  <div className="text-7xl">🕊️</div>
                  <p className="mt-2 text-slate-600">Percursos, roteiros litúrgicos e cadernos de músicas</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rotate-2 rounded-2xl bg-white border shadow p-4 w-56">
              <p className="text-xs text-slate-500">Percurso ativo</p>
              <p className="font-semibold">Roteiro do Batismo</p>
              <p className="text-xs" style={{ color: '#047857' }}>passo a passo para pais e padrinhos</p>
            </div>
          </div>
        </div>
      </section>

      <section id="percursos" className="py-16 md:py-20 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Percursos</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Caminhos formativos com materiais para encontros presenciais e grupos de estudo. Cada percurso traz objetivos,
            textos bíblicos, referências ao Catecismo e proposta de oração.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {percursos.map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Agenda & Música</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {agenda.map((a, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
                <p className="text-xs text-slate-500">{a.when}</p>
                <p className="mt-2 font-medium">{a.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="materiais" className="py-16 md:py-20 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Textos & Materiais</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            PDFs e links para estudo pessoal e encontros. Ao clicar, o arquivo abre em nova aba.
            Hospede os PDFs no Google Drive/Dropbox/OneDrive/Notion e cole o link abaixo.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {pdfs.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                 className="block rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md">
                <p className="text-xs text-slate-500">PDF</p>
                <p className="mt-2 font-medium">{p.title}</p>
                <span className="mt-3 inline-flex text-sm underline">Abrir</span>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Links úteis</h3>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-700">
              {linksExternos.map((l, idx) => (
                <li key={idx}><a className="underline" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-slate-200 p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white">
            <h3 className="text-xl md:text-2xl font-semibold">Pronto para aprofundar a fé?</h3>
            <p className="mt-2 text-slate-600 max-w-3xl">
              Roteiros, textos e cadernos de músicas para paróquias, grupos de adultos e ministérios.
              Conteúdo fiel, linguagem clara e foco na vida sacramental.
            </p>
            <a href="#contato" className="mt-5 inline-flex rounded-xl text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md"
               style={{ backgroundColor: 'var(--vinho)' }}>Inscrever-se na newsletter</a>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 md:py-20 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Contato</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <form className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Nome</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="voce@email.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm">Mensagem</label>
                <textarea className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" rows={5} placeholder="Conte brevemente sua necessidade" />
              </div>
              <button type="button" className="mt-4 rounded-xl text-white px-4 py-2 text-sm font-medium"
                      style={{ backgroundColor: 'var(--vinho)' }}>Enviar</button>
              <p className="mt-3 text-xs text-slate-500">Ao enviar, você concorda com nossa política de privacidade.</p>
            </form>

            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <p className="text-sm text-slate-600">Peça os materiais completos ou entre em contato pastoral:</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>📧 contato@caminhoemistério.org</li>
                <li>📞 +55 (11) 99999-9999</li>
                <li>📍 São Paulo • SP • Brasil</li>
                <li>🔗 <a href="#" className="underline">Instagram</a> · <a href="#" className="underline">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Caminho e Mistério — Todos os direitos reservados.
      </footer>
    </div>
  );
}
