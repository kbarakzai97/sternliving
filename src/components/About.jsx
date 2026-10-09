import cardsImg from '../assets/imag2.webp'
import gardeningImg from '../assets/image1.webp'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about__row">
        <div className="about__text">
          <h2 className="about__heading">About Us</h2>
          <p>
            A Home-Like Alternative to Traditional Senior Living. Stern Life
            Assisted Living was founded with a simple but powerful vision: to
            provide seniors with compassionate, personalized care in a
            comfortable residential setting — not a large institutional
            facility.
          </p>
          <p>
            After years of experience working across every level of senior
            care — from large corporate campuses to mid-sized communities and
            small homes — our leadership recognized that something was
            missing in traditional assisted living models. Too often,
            residents became numbers instead of individuals. Stern Life was
            created to be different.
          </p>
        </div>
        <img
          src={cardsImg}
          className="about__image"
          alt="Senior couple playing cards together"
        />
      </div>

      <div className="about__row about__row--reverse">
        <div className="about__text">
          <h2 className="about__heading">Our Philosophy</h2>
          <p>
            At Stern Life Assisted Living, we provide compassionate,
            personalized care in a safe and welcoming environment where
            residents can feel comfortable, supported, and at home.
          </p>
          <div style={{ height: '16px' }}></div>
          <h2 className="about__heading">We Believe:</h2>
          <ul className="about__list">
            <li>Care should be personal, not transactional</li>
            <li>Seniors deserve dignity, safety, and respect.</li>
            <li>Smaller environments create stronger relationships.</li>
            <li>Families deserve transparency and peace of mind.</li>
            <li>
              With only a limited number of residents in each home, we are
              able to provide higher staff attention, individualized care
              plans, and a true sense of belonging.
            </li>
          </ul>
        </div>
        <img
          src={gardeningImg}
          className="about__image"
          alt="Senior couple tending to houseplants together"
        />
      </div>
    </section>
  )
}

export default About
