import { useState } from 'react'
import './JoinCommunity.css'

const CONTACT_EMAIL = 'enquiries@sternlifeassistedliving.com'

function JoinCommunity() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  // No mailing-list service yet, so hand the sign-up to the visitor's email app.
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Join the Stern Life Community')
    const body = encodeURIComponent(
      `Hello,\n\nPlease add ${email} to the Stern Life community updates.\n\nThank you!`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="community">
      <div className="community__inner">
        <div className="community__text">
          <p className="community__eyebrow">Join the Community</p>
          <h2 className="community__heading">Stay Connected With Stern Life</h2>
          <p className="community__intro">
            Be the first to hear about room availability, family events, and
            caregiving tips from our team in Frederick.
          </p>
        </div>

        {sent ? (
          <p className="community__thanks" role="status">
            Thank you! Your email app should open so you can send your request.
            We look forward to welcoming you to the Stern Life family.
          </p>
        ) : (
          <form className="community__form" onSubmit={handleSubmit}>
            <label className="community__label" htmlFor="community-email">
              Email address
            </label>
            <div className="community__field">
              <input
                id="community-email"
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Join Now</button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default JoinCommunity
