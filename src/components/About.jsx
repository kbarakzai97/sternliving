import cardsImg from '../assets/imag2.webp'
import gardeningImg from '../assets/image1.webp'
import checkIcon from '../assets/Coral Circle Checkmark Icon.webp'
import './About.css'

const beliefs = [
  'Care should be personal, not transactional.',
  'Seniors deserve dignity, safety, and respect.',
  'Smaller environments create stronger relationships.',
  'Families deserve transparency and peace of mind.',
]

const highlights = [
  { value: '7', label: 'Residents per home' },
  { value: '15+', label: 'Years in senior care' },
]

function About() {
  return (
    <section className="about" id="about">
      <div className="about__story">
        <div className="about__text">
          <p className="about__eyebrow">About Us</p>
          <h2 className="about__title">
            A Home-Like Alternative to Traditional Senior Living
          </h2>
          <p>
            Stern Life Assisted Living was founded with a simple but powerful
            vision: to provide seniors with compassionate, personalized care in
            a comfortable residential setting — not a large institutional
            facility.
          </p>
          <p>
            After years of experience working across every level of senior care
            — from large corporate campuses to mid-sized communities and small
            homes — our leadership recognized that something was missing in
            traditional assisted living models. Too often, residents became
            numbers instead of individuals. Stern Life was created to be
            different.
          </p>
          <dl className="about__highlights">
            {highlights.map(({ value, label }) => (
              <div className="about__highlight" key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          loading="lazy"
          src={cardsImg}
          className="about__image"
          alt="Senior couple playing cards together"
        />
      </div>

      <div className="about__philosophy">
        <img
          loading="lazy"
          src={gardeningImg}
          className="about__image about__image--philosophy"
          alt="Senior couple tending to houseplants together"
        />
        <div className="about__text">
          <p className="about__eyebrow">Our Philosophy</p>
          <h2 className="about__title">We Believe</h2>
          <p>
            At Stern Life Assisted Living, we provide compassionate,
            personalized care in a safe and welcoming environment where
            residents can feel comfortable, supported, and at home.
          </p>
          <ul className="about__beliefs">
            {beliefs.map((belief) => (
              <li key={belief}>
                <img loading="lazy" src={checkIcon} alt="" />
                <span>{belief}</span>
              </li>
            ))}
          </ul>
          <p className="about__note">
            With only a limited number of residents in each home, we are able to
            provide higher staff attention, individualized care plans, and a
            true sense of belonging.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
