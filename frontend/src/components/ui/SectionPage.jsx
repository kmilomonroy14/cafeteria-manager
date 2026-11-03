function SectionPage({ title, description }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </section>
  )
}

export default SectionPage
