import { withBase } from '../url'
import groupIcon from '../assets/Coral Group People Icon.webp'
import './ServicesPage.css'

const categories = [
  {
    icon: 'house',
    title: 'Assisted Living & Daily Care',
    text: 'Comprehensive, personalized support designed to help residents live safely, comfortably, and with dignity in a warm, home-like environment.',
    items: [
      '24/7 Personalized Care & Supervision',
      'Level 1–3 Assisted Living Support',
      'Assistance with Daily Living',
      'Medication Management & Insulin Administration',
      'Dementia & Alzheimer-Friendly Care',
      'Person-Centered Individualized Care Plans',
      'Emotional Support & Companionship',
      'Cognitive Stimulation & Engagement',
      'Nutritional Support & Special Diets',
      'Housekeeping & Laundry',
      'Respite Care',
      'Small, Home-Like Residential Setting',
    ],
  },
  {
    icon: groupIcon,
    title: 'Coordinated Health & Support Services',
    text: 'We coordinate with trusted healthcare professionals to provide residents with convenient access to additional medical, therapeutic, and supportive services when needed.',
    items: [
      'On-Site Primary Care — Physicians & Nurses',
      'Hospice Care',
      'Palliative Care',
      'Physical Therapy (PT)',
      'Occupational Therapy (OT)',
      'Speech Therapy',
      'Mobile Lab Services',
      'Diagnostic Scans',
      'Professional Wound Care',
      'Pharmacy Services — Medication Delivery & Consultation',
      'Physician Communication',
      'Appointment Coordination',
      'Ongoing Care Reassessment',
    ],
  },
]

function HouseIcon() {
  return (
    <svg className="category__icon" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="60" fill="#f06f61" />
      <path
        d="M30 60 L60 32 L90 60 M38 54 V88 H54 V70 H66 V88 H82 V54"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <p className="services-hero__eyebrow">Our Services</p>
        <h1 className="services-hero__heading">What We Offer</h1>
        <p className="services-hero__text">
          At Stern Life Assisted Living, we provide personalized care in a
          comfortable residential setting designed to feel like home—not an
          institution. We proudly offer Level 1, Level 2, and Level 3 assisted
          living services at both of our Frederick locations.
        </p>
      </section>

      <section className="categories">
        {categories.map(({ icon, title, text, items }) => (
          <article className="category" key={title}>
            <header className="category__header">
              {icon === 'house' ? (
                <HouseIcon />
              ) : (
                <img src={icon} className="category__icon" alt="" />
              )}
              <div>
                <h2 className="category__title">{title}</h2>
                <p className="category__text">{text}</p>
              </div>
            </header>
            <ul className="category__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="services-cta">
        <h2 className="services-cta__heading">
          Not sure which level of care is right?
        </h2>
        <p className="services-cta__text">
          Our team will walk you through every option and help build a care plan
          around your loved one.
        </p>
        <a href={withBase('/contact')} className="services-cta__button">
          Contact Us
        </a>
      </section>
    </>
  )
}

export default ServicesPage
