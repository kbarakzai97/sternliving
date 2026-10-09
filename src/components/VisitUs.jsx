import { useState } from 'react'
import './VisitUs.css'

const locations = [
  { name: 'Thames Drive', address: '228 Thames Dr, Frederick, MD' },
  { name: 'Walnut Street', address: '903 Walnut St, Frederick, MD' },
]

const OPEN_HOUR = 9
const CLOSE_HOUR = 17

// Office hours are local to Frederick, so check against Eastern time, not the visitor's clock.
function isOfficeOpen() {
  const hour = Number(
    new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      hourCycle: 'h23',
      timeZone: 'America/New_York',
    }).format(new Date()),
  )
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR
}

const icons = {
  pin: (
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
  ),
}

function Icon({ name }) {
  return (
    <span className="visit__icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[name]}
      </svg>
    </span>
  )
}

function VisitUs() {
  const [selected, setSelected] = useState(0)
  const open = isOfficeOpen()
  const location = locations[selected]
  const query = encodeURIComponent(
    `Stern Life Assisted Living, ${location.address}`,
  )

  return (
    <section className="visit" id="visit">
      <div className="visit__content">
        <p className="visit__eyebrow">Stern Life Assisted Living</p>
        <h2 className="visit__heading">Visit Us in Frederick</h2>
        <p className="visit__text">
          Join us in Frederick to experience our compassionate care. We’re here
          to support your loved ones’ health and happiness.
        </p>

        <ul className="visit__info">
          <li>
            <Icon name="pin" />
            <div>
              <span className="visit__label">Our Homes</span>
              {locations.map(({ name, address }) => (
                <span className="visit__value" key={name}>
                  {address}
                </span>
              ))}
            </div>
          </li>
          <li>
            <Icon name="phone" />
            <div>
              <span className="visit__label">Call Us</span>
              <a className="visit__value" href="tel:+12406103769">
                (240) 610-3769
              </a>
            </div>
          </li>
          <li>
            <Icon name="clock" />
            <div>
              <span className="visit__label">
                Office Hours
                <span
                  className={`visit__status ${open ? 'visit__status--open' : ''}`}
                >
                  {open ? 'Open now' : 'Closed now'}
                </span>
              </span>
              <span className="visit__value">09:00 am – 05:00 pm</span>
            </div>
          </li>
          <li>
            <Icon name="heart" />
            <div>
              <span className="visit__label">Around-the-Clock Care</span>
              <span className="visit__value">
                Care provided 24 hours a day, 7 days a week.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="visit__map-card">
        <div className="visit__tabs" role="tablist" aria-label="Locations">
          {locations.map(({ name }, i) => (
            <button
              type="button"
              role="tab"
              key={name}
              aria-selected={i === selected}
              className={`visit__tab ${i === selected ? 'visit__tab--active' : ''}`}
              onClick={() => setSelected(i)}
            >
              {name}
            </button>
          ))}
        </div>
        <iframe
          key={location.name}
          className="visit__map"
          title={`Map of our ${location.name} home`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="visit__map-footer">
          <div>
            <span className="visit__map-name">{location.name} Home</span>
            <span className="visit__map-address">{location.address}</span>
          </div>
          <div className="visit__actions">
            <a href="tel:+12406103769" className="visit__button">
              Call
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
              target="_blank"
              rel="noreferrer"
              className="visit__button visit__button--outline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitUs
