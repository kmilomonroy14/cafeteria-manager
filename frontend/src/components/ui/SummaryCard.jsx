function SummaryCard({ title }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
      <h2 className="text-sm font-medium text-slate-400">{title}</h2>
      <div className="mt-4 h-8 text-2xl font-semibold text-slate-600">—</div>
      <div className="mt-3 h-2 w-24 rounded-full bg-slate-800" />
    </section>
  )
}

export default SummaryCard
