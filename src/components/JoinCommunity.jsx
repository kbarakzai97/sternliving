import { useState } from 'react'
import './JoinCommunity.css'

const CONTACT_EMAIL = 'enquiries@sternlifeassistedliving.com'
const MAX_EMAIL_LENGTH = 254

// Deliberately strict: letters, digits and common symbols only, so nothing odd ends up in the email we draft.
const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/

// Anything that can't appear in the addresses EMAIL_PATTERN accepts, e.g. < > " ' ( ) ; and spaces.
const DISALLOWED_CHARS = /[^A-Za-z0-9._%+@-]/g

// Keeps only email-safe characters, so markup like <script> can't be typed, pasted, or submitted.
function sanitizeEmail(value) {
  return value.replace(DISALLOWED_CHARS, '').slice(0, MAX_EMAIL_LENGTH)
}

function JoinCommunity() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  // No mailing-list service yet, so hand the sign-up to the visitor's email app.
  const handleSubmit = (event) => {
    event.preventDefault()
    const clean = sanitizeEmail(email)
    if (!EMAIL_PATTERN.test(clean)) {
      setError('Please enter a valid email address, like name@example.com.')
      return
    }
    const subject = encodeURIComponent('Join the Stern Life Community')
    const body = encodeURIComponent(
      `Hello,\n\nPlease add ${clean} to the Stern Life community updates.\n\nThank you!`,
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
                maxLength={MAX_EMAIL_LENGTH}
                autoComplete="email"
                placeholder="Enter your email address"
                value={email}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'community-email-error' : undefined}
                onChange={(event) => {
                  setEmail(sanitizeEmail(event.target.value))
                  setError('')
                }}
              />
              <button type="submit">Join Now</button>
            </div>
            {error && (
              <p id="community-email-error" className="community__error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

export default JoinCommunity
