import './Stats.css'

const stats = [
  { value: '20+', label: 'Families Helped' },
  { value: '4+', label: 'Years of Experience' },
  { value: '2', label: 'Locations' },
]

function Stats() {
  return (
    <section className="stats" aria-label="Stern Life at a glance">
      <ul className="stats__list">
        {stats.map(({ value, label }) => (
          <li className="stats__item" key={label}>
            <strong className="stats__value">{value}</strong>
            <span className="stats__label">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stats
