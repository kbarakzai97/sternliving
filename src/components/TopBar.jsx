import './TopBar.css'

const socials = [
  {
    label: 'Instagram',
    handle: '@sternlifeal',
    href: 'https://www.instagram.com/sternlifeal',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" />
      </>
    ),
  },
]

function TopBar() {
  return (
    <div className="topbar">
      <ul className="topbar__socials">
        {socials.map(({ label, handle, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              className="topbar__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} ${handle}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {icon}
              </svg>
              {handle}
            </a>
          </li>
        ))}
      </ul>
      <a href="tel:+12406103769" className="topbar__link">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
        (240) 610-3769
      </a>
    </div>
  )
}

export default TopBar
