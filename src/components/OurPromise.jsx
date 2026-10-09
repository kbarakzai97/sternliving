import './OurPromise.css'

const promises = [
  {
    title: 'Personalized Care',
    text: 'Every resident receives an individualized service plan based on their physical, emotional, and cognitive needs. We adapt as those needs change.',
  },
  {
    title: 'Safe & Dementia-Friendly Environment',
    text: 'Our homes are structured to support residents living with Alzheimer’s disease and other forms of dementia. We provide increased supervision, structured routines, and a calm residential setting that promotes security and familiarity.',
  },
  {
    title: 'Family Partnership',
    text: 'Families are not outsiders — they are partners. We maintain open communication and encourage involvement in care decisions.',
  },
  {
    title: 'Respect and Dignity',
    text: 'We treat every resident with compassion and full recognition of their individuality, culture, and life story.',
  },
  {
    title: 'Transparency',
    text: 'From pricing to care planning, we communicate clearly and honestly with families. No hidden surprises. No corporate layers.',
  },
  {
    title: 'True Home Environment',
    text: 'Our goal is not just to provide care — it is to provide comfort, belonging, and peace of mind.',
  },
]

function OurPromise() {
  return (
    <section className="promise" id="promise">
      <header className="promise__header">
        <p className="promise__eyebrow">Our Promise</p>
        <h2 className="promise__heading">Compassion. Safety. Dignity.</h2>
        <p className="promise__intro">
          At Stern Life Assisted Living, we make a promise to every resident
          and every family.
        </p>
      </header>
      <ul className="promise__grid">
        {promises.map(({ title, text }, i) => (
          <li className="promise__card" key={title}>
            <span className="promise__number">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="promise__title">{title}</h3>
            <p className="promise__text">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurPromise
