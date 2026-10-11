import './CheckIcon.css'

// Inline so the circle follows the theme colors; the old PNG was locked to the light brand coral.
function CheckIcon({ className }) {
  return (
    <svg
      className={className ? `check-icon ${className}` : 'check-icon'}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="12" />
      <path d="M7 12.5l3.2 3.2L17 9" />
    </svg>
  )
}

export default CheckIcon
