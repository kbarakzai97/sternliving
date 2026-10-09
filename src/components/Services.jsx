import clockIcon from '../assets/24_7 Clock Refresh Icon.webp'
import capsuleIcon from '../assets/White Capsule and Scored Tablet Icon.webp'
import mindIcon from '../assets/Heart and Mind Halo Icon.webp'
import caregiverIcon from '../assets/Caregiver Assisting Elderly Person Icon.webp'
import plateIcon from '../assets/Healthy Plate with Fork and Knife.webp'
import handsIcon from '../assets/Caring Hands Embracing a Heart.webp'
import './Services.css'

const services = [
  {
    icon: clockIcon,
    title: '24/7 Supervision',
    text: 'Around-the-clock support to help residents feel safe, comfortable, and cared for.',
  },
  {
    icon: capsuleIcon,
    title: 'Medication Management',
    text: 'Reliable assistance with medications to help residents stay on track with their care plans.',
  },
  {
    icon: mindIcon,
    title: 'Assistance with Daily Living',
    text: 'Compassionate support with everyday activities while encouraging independence and dignity.',
  },
  {
    icon: caregiverIcon,
    title: 'Dementia-Friendly Care',
    text: 'A calm, supportive environment designed to meet the unique needs of residents with memory challenges.',
  },
  {
    icon: plateIcon,
    title: 'Nutritional Support',
    text: 'Thoughtfully prepared meals and nutritional support tailored to residents’ individual needs.',
  },
  {
    icon: handsIcon,
    title: 'Emotional & Cognitive Engagement',
    text: 'Meaningful activities and personal interaction that encourage connection, mental stimulation, and emotional well-being.',
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services__heading">What We Offer</h2>
      <ul className="services__grid">
        {services.map(({ icon, title, text }) => (
          <li className="services__item" key={title}>
            <img loading="lazy" src={icon} className="services__icon" alt="" />
            <div>
              <h3 className="services__title">{title}</h3>
              <p className="services__text">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
