import './FaqPage.css'

const faqs = [
  {
    question: 'What levels of care do you provide?',
    answer: (
      <>
        <p>
          We provide Level 1 (Low), Level 2 (Moderate), and Level 3 (High)
          assisted living care at both of our Frederick locations.
        </p>
        <p>
          Services include assistance with daily activities, medication
          management, diabetic monitoring, memory support, and 24/7 supervision.
        </p>
      </>
    ),
  },
  {
    question: 'What is included in your monthly rate?',
    answer: (
      <>
        <p>Our monthly rates include:</p>
        <ul>
          <li>24-hour supervision</li>
          <li>Assistance with bathing, dressing, toileting, and mobility</li>
          <li>Medication administration</li>
          <li>Insulin administration (as ordered)</li>
          <li>Three home-style meals daily plus snacks</li>
          <li>Housekeeping and laundry</li>
          <li>Care coordination</li>
          <li>Social and cognitive engagement</li>
        </ul>
        <p>
          We believe in transparent pricing with clearly defined care levels.
        </p>
      </>
    ),
  },
  {
    question: 'How much does assisted living cost at Stern Life?',
    answer: (
      <>
        <p>
          Monthly rates vary depending on location, room type, and level of
          care.
        </p>
        <div className="faq__prices">
          <div className="faq__price">
            <span className="faq__price-location">Thames Drive Location</span>
            <span className="faq__price-amount">From $4,500</span>
          </div>
          <div className="faq__price">
            <span className="faq__price-location">Walnut Street Location</span>
            <span className="faq__price-amount">From $5,000</span>
          </div>
        </div>
        <p>Please contact us for current availability and pricing.</p>
      </>
    ),
  },
  {
    question: 'Do you provide dementia or Alzheimer’s care?',
    answer: (
      <>
        <p>
          Yes. We provide care in a safe and dementia-friendly residential
          environment.
        </p>
        <p>Our approach includes:</p>
        <ul>
          <li>Structured daily routines</li>
          <li>Increased supervision</li>
          <li>Calm, familiar surroundings</li>
          <li>Gentle redirection</li>
          <li>Person-centered engagement</li>
        </ul>
        <p>
          We are experienced in supporting residents living with Alzheimer’s
          disease and other forms of dementia.
        </p>
      </>
    ),
  },
  {
    question:
      'How is Stern Life different from large assisted living facilities?',
    answer: (
      <>
        <p>
          Stern Life operates small 7-bed residential homes rather than large
          institutional campuses.
        </p>
        <p>This allows us to offer:</p>
        <ul>
          <li>Higher staff-to-resident attention</li>
          <li>Stronger caregiver relationships</li>
          <li>Direct communication with leadership</li>
          <li>A true home-like environment</li>
        </ul>
        <p>
          Many families prefer the intimacy and personalization of our model.
        </p>
      </>
    ),
  },
  {
    question: 'Is Stern Life licensed?',
    answer: (
      <p>
        Yes. Stern Life Assisted Living is licensed by the Maryland Department
        of Health and operates in compliance with the Office of Health Care
        Quality (OHCQ) regulations.
      </p>
    ),
  },
  {
    question: 'Can residents keep their own doctors?',
    answer: (
      <p>
        Yes. Residents may continue seeing their existing physicians. We
        coordinate care and communicate with healthcare providers as needed.
      </p>
    ),
  },
  {
    question: 'Do you accept Medicaid?',
    answer: (
      <p>
        Please contact us directly to discuss current payment options and
        eligibility requirements.
      </p>
    ),
  },
  {
    question: 'What happens if my loved one’s care needs increase?',
    answer: (
      <p>
        We conduct regular assessments and adjust care plans as needed. If a
        resident requires services beyond our licensed capacity, we will assist
        the family in coordinating a safe and appropriate transition.
      </p>
    ),
  },
  {
    question: 'Do you offer short-term or respite care?',
    answer: (
      <p>
        Yes. We offer respite care for families who need temporary support.
        Respite residents receive the same high level of supervision and
        assistance as full-time residents.
      </p>
    ),
  },
  {
    question: 'Can families visit?',
    answer: (
      <p>
        Yes. We encourage family involvement and maintain reasonable visiting
        hours to ensure safety and comfort for all residents.
      </p>
    ),
  },
  {
    question: 'How do I schedule a tour?',
    answer: (
      <p>
        You can call us directly or complete our online contact form to schedule
        a private tour. Due to our small-home setting, availability may be
        limited.
      </p>
    ),
  },
]

function FaqPage() {
  return (
    <>
      <section className="faq-hero">
        <p className="faq-hero__eyebrow">Our Care Pledge</p>
        <h1 className="faq-hero__heading">Frequently Asked Questions</h1>
        <p className="faq-hero__text">
          Stern Life Assisted Living – Frederick, MD
        </p>
      </section>

      <section className="faq">
        {faqs.map(({ question, answer }, i) => (
          <details className="faq__item" key={question} open={i === 0}>
            <summary className="faq__question">{question}</summary>
            <div className="faq__answer">{answer}</div>
          </details>
        ))}
      </section>

      <section className="faq-cta">
        <h2 className="faq-cta__heading">Still Have Questions?</h2>
        <p className="faq-cta__text">
          We’re happy to speak with you personally.
        </p>
        <div className="faq-cta__contacts">
          <a href="tel:+12406103769">Call: 240-610-3769</a>
          <a href="mailto:sternlifeinc@gmail.com">sternlifeinc@gmail.com</a>
          <a href="mailto:enquiries@sternlifeassistedliving.com">
            enquiries@sternlifeassistedliving.com
          </a>
        </div>
        <a href="tel:+12406103769" className="faq-cta__button">
          Schedule a Tour Today
        </a>
      </section>
    </>
  )
}

export default FaqPage
