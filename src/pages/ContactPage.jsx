import VisitUs from '../components/VisitUs'
import './ContactPage.css'

function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <h1 className="contact-hero__heading">Contact Us</h1>
        <p className="contact-hero__text">
          Have a question or want to schedule a private tour? Call or email us
          and we’ll be happy to speak with you personally.
        </p>
        <div className="contact-hero__links">
          <a href="tel:+12406103769">(240) 610-3769</a>
          <a href="mailto:sternlifeinc@gmail.com">sternlifeinc@gmail.com</a>
          <a href="mailto:enquiries@sternlifeassistedliving.com">
            enquiries@sternlifeassistedliving.com
          </a>
        </div>
      </section>
      <VisitUs />
    </>
  )
}

export default ContactPage
