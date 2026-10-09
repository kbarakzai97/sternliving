import { useState } from 'react'
import './Testimonials.css'

const reviews = [
  {
    title: 'From a Grateful Family',
    quote: [
      'We are so grateful to the wonderful team at Stern Life. They take excellent care of our mother, meet all her needs with compassion, and understand her in a way that brings us peace.',
    ],
    initials: 'K.H',
  },
  {
    title: 'High Recommendation',
    quote: [
      'Do you have a family member who can no longer live on their own? Stern Life has provided my brother with a lovely home environment in a neighborhood setting and 24/7 care. Professional services such as medication dispensing which is handled by a trained technician, and keeping my brother clean both in body and his clothing/bedding.',
      'The home environment is upbeat, designed for wheelchair & walker access, kept clean and is well managed.',
      'I’m able to sleep at night knowing he is well cared for, which is why I am recommending Stern Life for your family.',
    ],
    initials: 'P.S',
  },
  {
    title: 'We Do It From Our Hearts',
    quote: [
      'Rebecca and John have been so helpful in caring for my father! They have put my mind at ease showing concern, and patience with his wellbeing! I would definitely recommend Stern Life Inc.',
    ],
    initials: 'C.D',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { title, quote, initials } = reviews[current]

  const go = (step) =>
    setCurrent((i) => (i + step + reviews.length) % reviews.length)

  return (
    <section className="testimonials" id="testimonials">
      <header className="testimonials__header">
        <p className="testimonials__eyebrow">Hear From Families Like Yours</p>
        <h2 className="testimonials__heading">What Families Are Saying</h2>
      </header>

      <div className="testimonials__carousel">
        <button
          type="button"
          className="testimonials__arrow"
          onClick={() => go(-1)}
          aria-label="Previous review"
        >
          ‹
        </button>

        <article className="testimonial" key={current} aria-live="polite">
          <span className="testimonial__mark" aria-hidden="true">
            “
          </span>
          <h3 className="testimonial__title">{title}</h3>
          <blockquote className="testimonial__quote">
            {quote.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </blockquote>
          <footer className="testimonial__author">
            <span className="testimonial__avatar" aria-hidden="true">
              {initials.replace('.', '')}
            </span>
            <span>
              <strong>{initials}</strong>
              <span className="testimonial__role">Stern Life Family</span>
            </span>
          </footer>
        </article>

        <button
          type="button"
          className="testimonials__arrow"
          onClick={() => go(1)}
          aria-label="Next review"
        >
          ›
        </button>
      </div>

      <div className="testimonials__dots">
        {reviews.map((review, i) => (
          <button
            type="button"
            key={review.title}
            className={
              'testimonials__dot' +
              (i === current ? ' testimonials__dot--active' : '')
            }
            onClick={() => setCurrent(i)}
            aria-label={`Show review ${i + 1} of ${reviews.length}`}
            aria-current={i === current}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
