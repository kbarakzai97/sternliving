import checkIcon from '../assets/White Checkmark Circle Icon.png'
import './WhyChooseUs.css'

const reasons = [
  'Small residential setting.',
  'Families communicate directly with leadership.',
  'Care plans are flexible and adjusted as needs change.',
  'Residents build meaningful relationships with consistent caregivers.',
  'Our environment feels like home — because it is one.',
]

function WhyChooseUs() {
  return (
    <section className="why" id="why-us">
      <div className="why__text">
        <h2 className="why__heading">Why Choose Us?</h2>
        <p>
          At Stern Life Assisted Living, we believe personalized care begins
          with truly knowing each resident. Our small residential setting
          allows us to provide a more personal, home-like experience where
          families can communicate directly with leadership and care plans
          can evolve as individual needs change. With consistent caregivers,
          residents have the opportunity to build meaningful, trusting
          relationships while receiving the support they need to feel safe,
          comfortable, and valued. Our environment feels like home—because it
          is one.
        </p>
      </div>
      <ul className="why__list">
        {reasons.map((reason) => (
          <li className="why__item" key={reason}>
            <img src={checkIcon} className="why__icon" alt="" />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WhyChooseUs
